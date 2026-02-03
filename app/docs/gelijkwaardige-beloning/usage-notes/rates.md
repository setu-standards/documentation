# Pay Equity Structure

:::caution DISCLAIMER
The SETU Standard for Inquiry Pay Equity v2.0 is currently under review.

The public consultation period runs from 6 Feb till 27 Feb 2026.
:::

:::info DOCUMENTATION
The message models can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/specifications). There you can also find example messages and validation artifacts in both XML and JSON.

The REST API specifications can be found here: [Inquiry Pay Equity API specifications](../api/oas-gelijkwaardige-beloning)
:::

## Introduction

The 'Inquiry Pay Equity' data standard is constructed from a set of common structural patterns (building blocks) and generic elements. Many of these building blocks, such as those for allowances, leave, and sick pay, follow a similar structure. We refer to this recurring pattern as the "Pay Equity Structure". Multiple components using this structure can collectively describe a wide array of regulations and employment conditions applicable to an employee. This page explains the general nature of this Pay Equity Structure.

### Base Definitions

Version 2.0 introduces the `baseDefinition` block, which allows for explicit definition of what components (remuneration, holiday allowance, specific allowances) are included in base salary calculations. These base definitions are used in the pay equity structure to define how each component is calculated. For example, holiday allowance is 8% of the annual salary, with the base definitions specifying what the annual salary includes. Optionally, a `referenceDate` (peildatum) can be added to specify the reference date for the calculation.

## What is the Pay Equity Structure?

The Pay Equity Structure is a standardized set of elements used within various components of the 'Inquiry Pay Equity' data standard (e.g., `allowance`, `leave`, `sickPay`, `remuneration`). This consistent structure allows for a uniform way to describe diverse regulations, ranging from monetary compensations and allowances to non-monetary benefits like paid leave.

## Key Features of the Pay Equity Structure

Most components using this structure will include some or all of the following key features:

- **Identifier (`id`):** A unique identifier for the specific regulation or component instance, often assigned by the customer.
- **Origin (`origin`):** Distinguishes between CAO-defined elements and client-specific additions or deviations.
- **Name:** A human-readable name or description of the regulation (e.g., "Special Event Surcharge," "Annual Leave Entitlement").
- **Type Code (if applicable):** A code that categorizes the regulation, often from a standard list (e.g., an allowance type code from a SETU codelist).
- **Effective Period (`effectivePeriod`):** This defines the overall validity period of the regulation itself (i.e., when this rule is in force). It uses `validFrom` and `validTo` dates. This is distinct from when an employee might earn or receive the benefit.
- **Applicability Periods (`period`):** This element is only applicable for Allowances. It defines when the regulation is actively applicable to an employee and thus when the benefit is 'earned' or accrued. It can specify:
  - **Date Period (`datePeriod`):** A specific date or a range of dates (e.g., "2026-07-26" to "2026-08-11").
  - **Time Period (`timePeriod`):** A specific recurring time or range of times during the applicable dates/days (e.g., "18:00:00" to "23:00:00").
  - **Weekday (`weekday`):** Recurring days of the week (e.g., "Saturday", "Sunday").
- **Regulation Lines (`line`):** This element (often an array) details the specific lines, amounts, or entitlements for the regulation. Multiple lines can exist to define different values under varying conditions. A typical `line` includes:
  - **Line Identifier (`lineId`):** A unique identifier for the specific line, enabling cross-referencing.
  - **Amount (`amount`):** Describes the value of the benefit.
    - **Value (`value`):** The numeric value (e.g., `25`, `100`).
    - **Unit Code (`unitCode`):** The unit of the value (e.g., `Percentage`, `Euro`, `Hour`, `Day`).
    - **Base Amount (`baseAmount`):** If the `value` is a percentage or derived, this specifies the base for the calculation (e.g., `ActualWage`, `Fixed`).
    - **Proportional (`proportional`):** Indicates whether the amount is calculated proportionally based on part-time percentage or employment duration.
  - **Interval Code (`intervalCode`):** Defines the interval over which the `amount` is applied or earned (e.g., `1` `Hour` means per hour; `0.5` `Year` means per half year).
  - **Conditions (`conditions`):** Specifies any conditions that must be met for this particular line to apply (see the "Conditions" documentation page for more details).
- **References (`reference`):** Allows linking this regulation to others, for instance, to define calculation dependencies (e.g., an allowance being compounded on another).
- **Other specific fields:** Depending on the component (e.g., `waitingDays` for `sickPay`, `payDate` for `holidayAllowance`).

### Period Structure Example

The following JSON snippet, taken from an `allowance` component, illustrates how the `period` element defines when a "Special Event Surcharge" is applicable. This surcharge is for a major sporting event.

```json
{
  "allowance": [
    {
      "id": {
        // Unique ID for this specific allowance regulation.
        "value": "2b497da74f7",
        "schemeAgencyId": "Customer"
      },
      "name": "Special Event Surcharge (e.g. Major Sporting Event)", // Descriptive name of the allowance.
      "effectivePeriod": {
        // Validity period for this allowance rule.
        "validFrom": "2025-01-01",
        "validTo": "2025-12-31"
      },
      "typeCode": {
        // Code identifying the type of allowance (from SETU codelist).
        "value": "HT320" // Example: Code for shift/irregular hours allowance.
      },
      "period": [
        // Defines when this allowance is applicable ('earned').
        {
          "datePeriod": [
            // Specific date or range of dates.
            {
              "start": "2025-07-26",
              "end": "2025-08-11" // Example: Applicable during the Olympics.
            }
          ],
          "timePeriod": {
            // Specific time or range of times during the applicable dates/days.
            "start": "00:00:00", // Start time (HH:MM:SS).
            "end": "23:59:59" // End time (HH:MM:SS).
          },
          "weekday": [
            // Recurring days of the week.
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday" // Applicable all days within the datePeriod/timePeriod.
          ]
        }
      ]
      // ... line details for the allowance rate ...
    }
  ]
}
```

This structure indicates the surcharge is active for the duration of the special event (July 26 to August 11, 2025), applies 24 hours a day, on all days of the week within that date range.

### Lines Structure Example

The `line` array within a component defines the actual benefit(s). The following example for "Overtime Compensation" shows two different ways overtime can be compensated, each defined as a separate object in the `line` array.

```json
{
  "allowance": [
    {
      "id": {
        "value": "2dsajofoiasd",
        "schemeAgencyId": "Customer"
      },
      "origin": {
        "type": "CollectiveLabourAgreement"
      },
      "name": "Overtime Compensation (Money and Time)",
      // ... effectivePeriod, typeCode, period ...
      "line": [
        // Multiple lines can represent different compensation methods.
        {
          "lineId": { "value": "OT-MONEY-01" },
          // Line 1: Monetary compensation (e.g., 150% of hourly rate).
          "amount": {
            "value": 150, // The numeric value (150%).
            "unitCode": "Percentage", // Unit is percentage.
            "baseAmount": {
              "unitCode": "HourlyRate", // Base for the percentage is the hourly rate.
              "baseType": "GrossSalary"
            }
          },
          "intervalCode": {
            "value": 1, // For every 1 unit.
            "unitCode": "Hour" // Unit is hour (i.e., per hour of overtime worked).
          },
          "conditions": [
            // Conditions for choosing this line.
            {
              "conditionType": "Text",
              "description": "Default overtime compensation in money, unless employee opts for time-off."
            }
          ]
        },
        {
          "lineId": { "value": "OT-TIME-01" },
          // Line 2: Time-for-time compensation (e.g., 1 hour off for 1 hour overtime).
          "amount": {
            "value": 1, // 1 hour of leave.
            "unitCode": "Hour", // Unit is 'hour' representing leave time.
            "baseAmount": {
              "unitCode": "Fixed" // It's a fixed amount of time, not percentage based.
            }
          },
          "intervalCode": {
            "value": 1, // For every 1 unit.
            "unitCode": "Hour" // Unit is hour (i.e., per hour of overtime worked).
          },
          "conditions": [
            // Conditions for choosing this line.
            {
              "conditionType": "textCondition",
              "description": "Overtime compensation as time-off, if chosen by employee and operationally feasible."
            }
          ]
        }
      ]
    }
  ]
}
```

This example clearly shows how different lines or forms of compensation for the same underlying regulation (overtime) can be specified, each with its own calculation logic and potential conditions.

## Examples of Pay Equity Components

Below are brief examples of how different pay equity components are structured using this common building block approach.

### Allowances

Allowances are additional payments made to employees for specific reasons, such as working irregular hours, special events, or specific job conditions.

```json
{
  "allowance": [
    {
      "id": {
        // Unique ID for this allowance.
        "value": "jdhebridka23",
        "schemeAgencyId": "Customer"
      },
      "name": "Basic Weekend Surcharge", // Name of the allowance.
      "effectivePeriod": {
        // When this rule is valid.
        "validFrom": "2026-01-01",
        "validTo": "2027-12-31"
      },
      "typeCode": {
        // Type of allowance.
        "value": "HT320" // Example: Shift/irregular hours code.
      },
      "period": [
        // When this surcharge is earned.
        {
          "timePeriod": {
            // Applicable full day.
            "start": "00:00:00",
            "end": "23:59:59"
          },
          "weekday": [
            // Applicable only on weekends.
            "Saturday",
            "Sunday"
          ]
        }
      ],
      "line": [
        // The rate for the surcharge.
        {
          "amount": {
            "value": 5, // Fixed amount as number.
            "unitCode": "Euro",
            "baseAmount": {
              "unitCode": "Fixed" // Indicates it's a fixed Euro amount.
            }
          },
          "intervalCode": {
            "value": 1,
            "unitCode": "Hour" // 5 Euro per hour worked during the weekend.
          }
        }
      ]
    }
  ]
}
```

### Reimbursements

Reimbursements cover expenses incurred by employees, such as travel costs. The `allowance` component is used for this, with specific `typeCode` values.

```json
{
  "allowance": [
    {
      "id": {
        "value": "5oidsan23d",
        "schemeAgencyId": "Customer"
      },
      "name": "Travel Allowance with Distance Brackets",
      "effectivePeriod": {
        "validFrom": "2026-01-01",
        "validTo": "2027-12-31"
      },
      "typeCode": {
        "value": "EA103" // Example: Code for travel costs home-work.
      },
      "period": [
        /* ... applicable workdays ... */
      ],
      "line": [
        // Multiple lines for different distance brackets.
        {
          "amount": { "value": 25.0, "unitCode": "Euro" /* ... */ },
          "baseAmount": {
            "unitCode": "Fixed" // Indicates it's a fixed Euro amount.
          },
          "intervalCode": { "value": 1, "unitCode": "Day" },
          "conditions": [
            {
              "conditionType": "textCondition",
              "description": "For travel > 50 km"
            }
          ]
        },
        {
          "amount": { "value": 0.23, "unitCode": "Euro" /* ... */ },
          "baseAmount": {
            "unitCode": "Fixed" // Indicates it's a fixed Euro amount.
          },
          "intervalCode": { "value": 1, "unitCode": "Kilometer" },
          "conditions": [
            {
              "conditionType": "textCondition",
              "description": "For travel < 20 km or bicycle"
            }
          ]
        }
        // ... other brackets ...
      ]
    }
  ]
}
```

### Sick Pay

Sick pay regulations define how employees are compensated during periods of illness. Version 2.0 allows specifying `waitingDays` only at the main sick pay level for broader applicability.

```json
{
  "sickPay": [
    {
      "id": {
        "value": "9c36cb78897",
        "schemeAgencyId": "Customer"
      },
      "name": "Continued sick pay.",
      "waitingDays": {
        // waiting days for this sick pay regulation
        "value": 1,
        "unitCode": "Day"
      },
      "effectivePeriod": {
        "validFrom": "2026-01-01",
        "validTo": "2027-01-01"
      },
      "line": [
        {
          "amount": {
            "value": 100, // 100% of pay.
            "unitCode": "Percentage",
            "baseAmount": {
              "unitCode": "MonthlyRate", // Based on monthly rate.
              "baseType": "GrossSalary",
              "value": 3201 // Optional: Example monthly rate.
            }
          },
          "intervalCode": { "value": 1, "unitCode": "Month" },
          "conditions": [
            {
              "conditionType": "Occurrence",
              "occurrence": {
                "occurrenceType": "Relative",
                "event": "SickLeave",
                "offset": "P0D" // From start of sick leave
              }
            }
          ]
        }
      ]
    }
  ]
}
```

### Leave

Leave regulations cover various types of time off, such as annual vacation, public holidays, and special leave.

```json
{
  "leave": [
    {
      "id": {
        "value": "37605f8e84f",
        "schemeAgencyId": "Customer"
      },
      "name": "Leave ruling that is valid for all employees.",
      "effectivePeriod": {
        "validFrom": "2023-01-01",
        "validTo": "2028-01-01"
      },
      "holidays": [
        // Recognized public holidays.
        {
          "amount": { "value": 7, "unitCode": "Day" }, // Number of recognized holidays.
          "name": ["Christmas Day", "Easter", "etc."],
          "conditions": [
            {
              "conditionType": "textCondition",
              "description": "If holiday falls on a workday"
            }
          ]
        }
      ],
      "paidLeave": [
        // General paid leave (vacation days).
        {
          "amount": { "value": 25, "unitCode": "Day" }, // E.g., 25 days.
          "intervalCode": { "value": 1, "unitCode": "Year" }, // 25 days per year.
        }
      ],
      "adv": [
        /* ... Arbeidsduurverkorting (reduction in working hours) details ... */
      ],
      "leaveDayValue": { "value": 133.0, "unitCode": "Euro" }, // Financial value of one leave day.
      "wazo": [
        {
          "name": "Parental leave supplement",
          "amount": { "value": 3, "unitCode": "Day" }
        }
      ], // Employer supplement to statutory leave.
      "sustainableEmployability": [
        {
          "name": "Personal Training Budget",
          "line": [
            {
              "amount": { "value": 100, "unitCode": "percentage" },
              "baseAmount": {
                "unitCode": "HourlyRate",
                "baseType": "GrossSalary"
              },

              "intervalCode": {
                "value": 1,
                "unitCode": "hour"
              }
            }
          ]
        }
      ],
    }
  ]
}
```

These examples demonstrate the Pay Equity Structure in capturing a wide range of employment conditions in a standardized manner. Each main component (`allowance`, `sickPay`, `leave`, etc.) shares these core structural elements. Understanding these elements is key to understanding the Pay Equity Inquiry data model as a whole.
