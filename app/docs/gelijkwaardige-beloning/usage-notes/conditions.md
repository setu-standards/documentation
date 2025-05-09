# Conditions

:::info DOCUMENTATION
The message models can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/specifications). There you can also find example messages and validation artifacts in both XML and JSON.

The REST API specifications can be found here: [Purchase to Pay API specifications](../api/oas-gelijkwaardige-beloning.mdx)
:::

For nearly all benefit components certain conditions may apply. This means that the component is or is not applicable to workers that meet these conditions. For example:
* an overtime allowance might only be applicable up to salary scale 10
* an allowance for home working costs is applicable for certain functions

To specify those conditions, all benefit components elements can have a `conditions` list element. The element can contain zero, one or many (`0..n`) condition elements. A benefit component applies to workers that satisfy **all** conditions.

## Condition types
The SETU has identified that there are many conditions. In order to be able to automate the evaluation of conditions as much as possible, the SETU-standard introduces `condition types`. The first version of the standard contains 6 standardized condition types:
1. Salary scale conditions
2. Function conditions
3. Age conditions
4. Employment duration conditions
5. After `x` hours per day
6. Textual conditions; catches "other conditions"

For next versions, more common conditions types can be added. The `conditions` list structure is designed for this.

Each condition type has its own set of object properties that are needed for the automatic evaluation. E.g. a salary scale condition can contain a `salaryScaleMaxInclusive` element to specify that a benefit component is only applicable for workers up to and including a certain salary scale.

The list of defined condition types is maintained as a codelist here: [SETU Condition types](https://setu.semantic-treehouse.nl/codelist/Codelist_89d3b9a9-8927-45de-b578-1cf96a90e6a3).

## Example json
The example below gives an impression of how the `conditions` element is used. It specifies 3 conditions that apply to the overtime allowance. A worker needs to meet ALL 3 conditions for the allowance to apply.

```json
"conditions": [{
    "conditionType": "salaryScaleCondition",
    "salaryScaleMaxInclusive": "10" // value refer to enumerations > salaryScale > name
},{
    "conditionType": "functionCondition",
    "applicableToAllFunctions": true,
    "except": ["function123"] // values refer to positionProfile > positionId > value
},{
    "conditionType": "textualCondition",
    "description": "Indien u overwerkt aansluitend aan uw dagelijkse werktijd geldt als aanvullende voorwaarde dat u dan pas recht heeft op een vergoeding als u: * minimaal 15 minuten overwerkt als uw werktijd die dag minder dan 4 uur bedraagt of * minimaal 30 minuten overwerkt als uw werktijd die dag 4 uur of meer bedraagt."
}]
```

## JSON schema

Below is a **snippet** of how the condition types are specified in JSON schema. This is used as such in the Open API specifications.

```yaml
  schemas:
    Conditions:
      type: array
      items:
        $ref: '#/components/schemas/Condition'
    Condition:
      type: object
      anyOf:
        - $ref: '#/components/schemas/TextualCondition'
        - $ref: '#/components/schemas/SalaryScaleCondition'
        - $ref: '#/components/schemas/FunctionCondition'
      required:
        - conditionType
    TextualCondition:
      type: object
      properties:
        conditionType:
          type: string
          const: textualCondition
        description:
          type: string
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
```
