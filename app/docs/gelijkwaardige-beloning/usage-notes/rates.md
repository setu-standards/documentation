# Building block pay equity

:::info DOCUMENTATION
The message models can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/specifications). There you can also find example messages and validation artifacts in both XML and JSON.

The REST API specifications can be found here: [Purchase to Pay API specifications](../api/oas-gelijkwaardige-beloning)
:::

## Introduction

The 'inquiry-pay-equity' data standard is created from a set of building blocks and a set of generic elements. The template of the building blocks all follow a similar structure, which we call "pay equity". Multiple of these building blocks taken together can be used to describe almost all regulations and employment conditions applicable to a certain employee. As the building block 'pay equity' is reused throughout the 'inquiry-pay-equity', below its general structure will be further explained. 

## What is the building block 'pay equity'?
As stated, the 'pay equity' building block is a standardized set of elements that is used to describe almost all employment conditions and regulations in the 'inquiry-pay-equity' data standard. This building block makes it possible to describe a great variety of regulations in a uniform way. These regulations range from allowances & compensations to paid leave & sick pay. 

## What are some of the key features of the building block 'pay equity'?
- **Type of regulation:** This element indicates the type of regulation. Examples include: the type of compensation (e.g. overtime compensation) or type of leave (e.g. paid leave).
- **Effective period:** This period indicates what period the regulation is applicable. It uses the elements 'validFrom' and 'validTo'. This element is not connected to when the regulation is earned or the compensation is granted, but rather focusses on the effective time period of the regulation itself.
- **Periods:** This element defines the time period in which the regulation is applicable to an employee and thus 'earned'. The combination of the three following elements allows us to specify individual points in time, ranges of times and recurring times. 
  - **Date period:** A specific date or a range of dates (e.g. '31/03/2025').
  - **Weekdays:** A recurring time during the week. (e.g. 'Friday, Saturday')
  - **Time period:** A specific time or a range of times during the day (e.g. from 18:00 until 23:00).
- **Regulation rates (Lines):** This element allows us to convey the different rates that are applicable for this regulation. The distinction between the different rates is made through the conditions that can also be provided in this element. Due to the great variety of ways in which a regulation can be provided to the employee (e.g. extra pay/paid leave/lunch/etc.). The lines element allows us to model this great variety. It consists of three key elements (Value, Base and Interval), which together can be used to express almost any type of compensation/allowance/benefit the employee can receive.
  - **Amount:** (container element) which contains the compensation/allowance/benefit that the employee receives.
    -  **Value:** The actual value of the compensation/allowance/benefit.
    -  **Base Amount:** The base amount over which the value of the compensation/allowance/benefit is calculated.
  -  **Interval Code:** An element that can indicate the recurring nature of the compensation/allowance/benefit. An example: a certain regulation X is earned **PER** week/month/item. This indicates that every week or every month or for every item the regulation that is described is applicable. 

<!--
## Structure of the building block.

The entire structure of the building block is provided here:

- **ID:** an identifier for the regulation
  - **Value:** the value of the identifier
  - **Scheme Agency ID**: indicator on who provided this ID
- **Name**: name or description of the regulation
- **Effective Time Period:** the time period this regulation is valid.
  - **Valid From**
  - **Valid To**
- **Type Code:** the SETU type code of this regulation (e.g. overtime/travel compensation/shift compensation)
- **Period:** time period in which this regulation is applicable (e.g. overtime compensation is earned every 'friday')
  - **Date Period:** a single (using just the start element) or a range of dates
     - **Start**
     - **End**
   - **Weekday:** a recurring weekday in which this regulation is applicable (e.g. saturday, sunday)
   - **Time Period:** the specific time or range of times
       - **Start**
       - **End**
- **Line:** the different rates that are applicable for this regulation
   - **Amount:** the amount of compensation/allowance/benefit this rate provides.
        - **Value:**  the amount of compensation/allowance/benefit expressed as an integer.
        - **Min Value** the minimal amount the value has to be and thus the minimal amount that this rate provides.
        - **Max Value** the maximum amount the value has to be and thus the maximum amount that this rate provides.
        - **Unit Code** indicates the unit code of this amount (e.g., percentage/hour/day).
        - **Base:** the base over which the amount is calculated.
            - **Code**: a code to indicate what the type of this base is (e.g. percentageOfMonthlySalary/fixed).
            - **Value**: the amount of the base (e.g. the employee's monthly salary).
            - **Min Value**: the minimal amount that the value of the base can be. 
            - **Max Value**: the maximum amount that the value of the base can be. 
    - **Interval Code**: if the regulation is applied in an interval, this element indicates the type of interval.
        - **Value**: the denominator of the value of the interval code (e.g. a value of 0.5 and a Unit Code of 'Hour' indicates every half hour).
        - **Unit Code**: indicates the type of interval.
    - **Conditions:** indicates the conditions that have to be met for this rate to be applicable.
        - **Description:** a description of this condition can be provided.
        - **Position Title:** The title(s) of the positions that are eligible for this rate can be provided here.
-->



### Period Structure

This JSON-example describes a compensation for irregular work hours called "irregular hour compensation summer". The regulation is valid from July 1st 2025 until 31st of December 2025. The compensation is applicable on mondays, tuesdays and wednesdays from 18:00 until 23:00.


```
{
  "ID": {
    "Value": "12345",
    "Scheme Agency ID": "Customer"
  },
  "Name": "irregular hour compensation summer",
  "Effective Time Period": {
    "Valid From": "2025-07-01T00:00:00",
    "Valid To": "2025-12-31T23:59:59"
  },
  "Type Code": "HT704",
  "Period": {
    "Weekday": ["Monday", "Tuesday", "Wednesday"],
    "Time Period": {
      "Start": "18:00",
      "End": "23:00"
    }
  },
}
```



### Rates (lines) structure
Within the building block, multiple different rates can be defined. This JSON example describes two different irregular working hour compensations for employees:

- **Administrative employees:** All administrative employees receive a 20% increase on their hourly rate for the hours worked at irregular times. 

- **All employees above pay scale '10':** All employees that are in pay scale 10 or higher receive a 10% increase on their hourly rate.

```
"Line": [
  {
    "Line": {
      "Amount": {
        "Value": 20, // 20 %
        "Unit Code": "percentage"
      },
      "Base": {
        "Code": "hourlyRate" // percentage of hourly rate
      },
      "Interval Code": {
        "Value": 1, // every full hour, so a value of 1. (a value of 0.5 would mean every half hour)
        "Unit Code": "hour" // per irregular hour worked.
      }
    },
    "Conditions": {
      "conditionType": "functions" 
      "Description": "This rate is only applicable to administrative employees.",
      "Position Title": "Administrative employee"
    }
  },
  {
    "Line": {
      "Amount": {
        "Value": 10,
        "Unit Code": "percentage"
      },
      "Base": {
        "Code": "percentagehourlyRate"
      },
      "Interval Code": {
        "Unit Code": "hour", // per irregular hour worked.
        "Value": 1 // every full hour, so a value of 1. (a value of 0.5 would mean every half hour)
      }
    },
    "Conditions": {
      "conditionType": "general"
      "Description": "This rate is applicable to every employee that is in or above pay scale 10.."
    }
  }
]
```


## Voorbeelden

### Toeslagen

To be filled

### Vergoedingingem

To be filled

### Doorbetaling bij ziekte

To be filled

### Verlof
