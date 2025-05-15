# Conditions

:::caution DISCLAIMER
The SETU Standard for Inquiry Pay Equity v1.0 is currently under review.

The public consultation period runs from 7 April till 2 May 2025. See [this page](./../public-consultation.md) for more information.

Some documentation in this section is a draft and subject to change. Feedback and suggestions are welcome to help refine and finalize these documents.
:::

For nearly all benefit components, certain conditions may apply. This means that the component is or is not applicable to workers who meet these conditions. For example:
* An overtime allowance might only be applicable up to a certain salary scale.
* An allowance for home working costs might be applicable only for specific job functions.
* A youth salary scale might only apply to employees within a certain age range.

To specify these conditions, most benefit component elements (like those in `remuneration`, `allowance`, `leave`, etc.) can have a `conditions` list element. This element can contain zero, one, or many (`0..n`) condition objects. A benefit component typically applies to workers who satisfy **all** specified conditions within that list.

## Condition types
SETU has identified various conditions. To enable automation in evaluating these conditions, the SETU standard introduces `conditionType`. The first version of the standard includes several common condition types, such as:
1.  Salary scale conditions
2.  Function conditions (related to job roles)
3.  Age conditions
4.  Employment duration conditions
5.  Conditions based on hours worked (e.g., "after X hours per day")
6.  Textual conditions (for "other conditions" not covered by specific types)

Future versions may include more common condition types. The `conditions` list structure is designed for this extensibility.

Each `conditionType` can be accompanied by specific properties relevant to its evaluation. However, for version 1.0, only the conditionType is implemented. The following (commented out) sections of the following examples showcase the models future capabilities. For instance, an `ageCondition` will include properties like `ageMinInclusive` or `ageMaxExclusive`. If a structured `conditionType` is not available or suitable, the `textualCondition` type can be used with a `description` field.

The list of defined condition types is maintained as a codelist here: [SETU Condition types](https://setu.semantic-treehouse.nl/codelist/Codelist_89d3b9a9-8927-45de-b578-1cf96a90e6a3).

## Example JSON
The examples below illustrate how the `conditions` element is used in various parts of the pay equity specification.

### 1. Function-based Condition on a Remuneration Block

This example shows a condition applied to an entire remuneration block. This block is applicable to all functions, except for the function with ID "function123".

```json
{
    "remuneration": [
        {
            // ... other remuneration details ...
            "conditions": [ // Conditions that apply to this entire remuneration block (salary table).
                {
                    "conditionType": "functionCondition", // Specifies the condition relates to job functions.
                    // "applicableToAllFunctions": true, // Indicates if it applies to all functions by default.
                    // "except": ["function123"] // List of position IDs (from positionProfile) that are excluded from this remuneration block.
                }
            ]
        }
        // ... other remuneration blocks ...
    ]
}
```
In this case, the `remuneration` settings would apply to employees in any job function, unless their specific `positionId` is "function123".

### 2. Employment Duration Condition for an Individual Salary Increase

This example shows a condition for an individual salary increase. The increase is dependent on the employee meeting certain employment duration criteria.

```json
{
    "remuneration": [
        {
            // ...
            "individualSalaryIncreaseRate": [
                {
                    "expenseDate": "2026-01-01", // Date when this specific increase rule takes effect.
                    "line": {
                        // ... amount and interval details ...
                        "conditions": [ // Conditions that must be met for this specific increase rate to apply.
                            {
                                "conditionType": "employmentDurationCondition" // Type of condition (e.g., based on tenure).
                                // Other condition fields like 'durationYears' (e.g., minimum years of employment)
                                // would be specified here, based on the detailed schema for "employmentDurationCondition".
                            }
                        ]
                    }
                }
            ]
            // ...
        }
    ]
}
```
This `employmentDurationCondition` would be further detailed with specific properties like the required number of years/months of employment for the increase to apply.

### 3. Textual Condition based on Performance

Here, an individual salary increase is based on employee performance. The `conditionType: "textualCondition"` with a separate `description` field can be used as a way to list any type of condition in a free text field.

```json
{
    "remuneration": [
        {
            // ...
            "individualSalaryIncreaseRate": [
                {
                    "expenseDate": "2026-01-01",
                    "line": {
                        "amount": {
                            "value": "4",
                            "unitCode": "percentage",
                            // ... baseAmount ...
                        },
                        // ... intervalCode ...
                        "conditions": [
                            {
                                "conditionType": "textualCondition" // Example of a textual condition.
                                // "description": "Based on performance of the employee."
                            }
                        ]
                    }
                }
            ]
            // ...
        }
    ]
}
```

### 4. Age-based Condition on a Salary Step

This example is from a salary scale for youth minimum wages. A specific salary step applies only if an age condition is met.

```json
{
    "remuneration": [
        {
            // ... (details for a youth remuneration block) ...
            "salaryScale": [
                {
                    "name": "Minimum wage youth",
                    // ...
                    "salaryStep": [
                        {
                            "name": "Pay for youth: Age 18",
                            "value": 1850.75,
                            "minimumWage": true,
                            "conditions": [
                                {
                                    "conditionType": "ageCondition" // Condition is based on age.
                                    // Specific age fields like 'ageMinInclusive': 18, 'ageMaxExclusive': 19 would be detailed here
                                    // according to the "ageCondition" type's schema.
                                }
                            ]
                        }
                        // ... other salary steps ...
                    ]
                }
            ],
            "conditions": [ // This outer condition applies to the whole "Minimum wage youth" remuneration block
                {
                    "conditionType": "ageCondition"
                    // Specific age fields like 'ageMaxExclusive': 21 (e.g., applies to employees under 21) would be detailed here.
                }
            ]
        }
    ]
}
```
In this scenario, the `salaryStep` "Pay for youth: Age 18" is only applicable if the employee's age meets the criteria defined within its `ageCondition` (e.g., the employee is 18 years old). The entire "Minimum wage youth" `remuneration` block itself also has an overarching `ageCondition`.

## JSON Schema Snippet

Below is a **snippet** illustrating how condition types might be specified in a JSON schema, often used in Open API specifications. This demonstrates a common approach using `anyOf` to allow different structures based on `conditionType`.

```yaml
  schemas:
    Conditions:
      type: array
      items:
        $ref: '#/components/schemas/Condition'
    Condition:
      anyOf:
        - $ref: '#/components/schemas/TextualCondition'
        - $ref: '#/components/schemas/SalaryScaleCondition'
        - $ref: '#/components/schemas/FunctionCondition'
        - $ref: '#/components/schemas/AgeCondition'
        - $ref: '#/components/schemas/EmploymentDurationCondition'
    TextualCondition:
      type: object
      properties:
        conditionType:
          type: string
          const: textualCondition 
        description:
          type: string
      required:
        - conditionType
        - description
    SalaryScaleCondition:
      type: object
      properties:
        conditionType:
          type: string
          const: salaryScaleCondition 
        salaryScaleMaxInclusive:
          type: string
        salaryScaleMinInclusive:
          type: string
      required:
        - conditionType
    FunctionCondition:
      type: object
      properties:
        conditionType:
          type: string
          const: functionCondition 
        applicableToAllFunctions:
          type: boolean
        except:
          type: array
          items:
            type: string
      required:
        - conditionType
    # AgeCondition, EmploymentDurationCondition, etc., would be similarly defined.
```
