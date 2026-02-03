# Conditions

:::caution DISCLAIMER
The SETU Standard for Inquiry Pay Equity v2.0 is currently under review.

The public consultation period runs from 6 Feb till 27 May 2026.
:::


:::info DOCUMENTATION
The message models can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/specifications). There you can also find example messages and validation artifacts in both XML and JSON.

The REST API specifications can be found here: [Inquiry Pay Equity API specifications](../api/oas-gelijkwaardige-beloning). The condition schema can be found [here](https://github.com/setu-standards/xml-specifications/tree/main/setu-gelijkwaardige-beloning)
:::

For nearly all benefit components, certain conditions may apply. This means that the component is or is not applicable to workers who meet these conditions. For example:
* An overtime allowance might only be applicable up to a certain salary scale.
* An allowance for home working costs might be applicable only for specific job functions.
* A youth salary scale might only apply to employees within a certain age range.

To specify these conditions, most benefit component elements (like those in `remuneration`, `allowance`, `leave`, etc.) can have a `conditions` list element. This element can contain zero, one, or many (`0..n`) condition objects. A benefit component typically applies to workers who satisfy **all** specified conditions within that list.

## Condition types
SETU has identified various conditions. To enable automation in evaluating these conditions, the SETU standard introduces structured `conditionType` objects. Version 2.0 of the standard includes several concrete condition types:

1.  **`Age`**: Condition based on the age of the employee (in years).
2.  **`EmploymentDuration`**: Based on the length of time an employee has been employed (tenure).
3.  **`Occurrence`**: A condition based on time or a specific event.
4.  **`PositionProfile`**: Related to specific job functions or roles by referencing `positionId`.
5.  **`SalaryScale`**: Based on the salary scale range and optionally salary steps.
6.  **`Text`**: A textual condition type to be used when no other structured type fits.

### Combination Types
Complex conditions can be created using combination types:
*   **`AllOf`**: All nested conditions must be met.
*   **`AnyOf`**: At least one nested condition must be met.
*   **`Not`**: The nested condition must NOT be met.

Each structured condition type uses an `operator` (e.g. `eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `in`) to define the comparison logic.

## Example JSON
The examples below illustrate how the `conditions` element is used in various parts of the pay equity specification.

### 1. Position Profile-based Condition
This example shows a condition applied to an entire remuneration block, making it applicable only to specific job functions (Team Lead or Manager).

```json
{
    "remuneration": [
        {
            "origin": { "type": "CollectiveLabourAgreement" },
             // ... other remuneration details ...
            "conditions": [ 
                {
                    "conditionType": "PositionProfile", // Specifies the condition relates to job functions.
                    "operator": "in", // Restrict to 'in' operator to check against a list.
                    "positionProfileIds": ["TeamLead", "Manager"] // The list of applicable position IDs.
                }
            ]
           
        }
    ]
}
```

### 2. Age-based Condition
A specific salary step that applies only if the employee is 18 years or older but younger than 19.

```json
{
    "salaryStep": [
        {
            "name": "Pay for youth: Age 18",
            "value": 1850.75,
            "conditions": [
                {
                    "conditionType": "Age", // Condition based on employee age.
                    "operator": "eq", // Greater than or equal to.
                    "age": 18 // Age value in years.
                },
                
            ]
        }
    ]
}
```

### 3. Occurrence Condition
Occurrence conditions allow for specifying timing based on events, fixed dates, or recurring intervals.

#### 3.a Relative Occurrence
This example shows a condition for sick pay that changes after 1 year (P1Y) of sick leave to 70% percent of the salary.

```json
{
    "conditions": [
        {
            "conditionType": "Occurrence", // Condition based on a time or event.
            "occurrence": {
                "occurrenceType": "Relative", // Timing relative to an event.
                "event": "SickLeave", // The triggering event (e.g., start of illness).
                "offset": "P1Y" // The relative time offset (1 year).
            }
        }
    ]
}
```

#### 3.b Single Occurrence (Fixed Date)
Specifies a condition that is met on a specific date.

```json
{
    "conditions": [
        {
            "conditionType": "Occurrence",
            "occurrence": {
                "occurrenceType": "SingleOccurence", // A one-time occurrence.
                "date": "2026-12-15" // The specific fixed date.
            }
        }
    ]
}
```

#### 3.c Recurring Occurrence
Specifies a condition that repeats according to an interval.

```json
{
    "conditions": [
        {
            "conditionType": "Occurrence",
            "occurrence": {
                "occurrenceType": "Recurring", // An event that repeats.
                "recurringInterval": "R/2026-5/P1Y" // Every year recurring in May (ISO 8601-1 repeating interval).
            }
        }
    ]
}
```

### 4. Textual Condition
When no structured logic is available, use the `Text` condition type.

```json
{
    "conditions": [
        {
            "conditionType": "Text", // Fallback for unstructured conditions.
            "description": "Based on individual performance review results." // Human-readable explanation.
        }
    ]
}
```

### 5. Combination Condition (AllOf)
This example shows how to combine multiple conditions. In this case, both the Age and Position Profile conditions must be met.

```json
{
    "conditions": [
        {
            "conditionType": "AllOf",
            "conditions": [
                {
                    "conditionType": "Age",
                    "operator": "gte",
                    "age": 21
                },
                {
                    "conditionType": "PositionProfile",
                    "operator": "in",
                    "positionProfileIds": ["SeniorDeveloper"]
                }
            ]
        }
    ]
}
```


## JSON Schema Structure
Concrete condition types are implemented as a `oneOf` structure in the JSON schema, discriminated by the `conditionType` property.

```yaml
    Condition:
      oneOf:
        - $ref: './condition-types/Age.yaml'
        - $ref: './condition-types/EmploymentDuration.yaml'
        - $ref: './condition-types/Occurrence.yaml'
        - $ref: './condition-types/PositionProfile.yaml'
        - $ref: './condition-types/SalaryScale.yaml'
        - $ref: './condition-types/Text.yaml'
        - $ref: './condition-types/combinations/AllOf.yaml'
        - $ref: './condition-types/combinations/AnyOf.yaml'
        - $ref: './condition-types/combinations/Not.yaml'
```
