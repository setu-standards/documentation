# Release notes: Inquiry Pay Equiy

This documentation page records the changes made to the SETU Standard for Inquiry Pay Equity across multiple versions. This page provides a chronological overview of updates, improvements, and modifications.

## From v1.0 to v2.0

Version 2.0 of the Inquiry Pay Equity specification represents a significant improvement of the standard, addressing over 80 solved issues. This release focuses on three key themes:

1. **Data consistency** - Harmonizing data types and structures across all blocks
2. **Expressiveness** - Adding capabilities to capture complex compensation scenarios
3. **Traceability** - Enabling tracking of data origins and cross-referencing between elements

All the issues are recorded on the SETU GitHub environment: [link ](https://github.com/setu-standards/inquiry-pay-equity/issues)

### Structural changes

| Change | Issues | Migration |
|--------|--------|-----------|
| `amount.value` and `amount.baseAmount.value` changed from `string` to `number` | [#13](https://github.com/setu-standards/inquiry-pay-equity/issues/13), [#69](https://github.com/setu-standards/inquiry-pay-equity/issues/69) | Convert all numeric strings to actual numbers. E.g., `"25"` → `25`, `"150.50"` → `150.50` |
| `id` field removed, replaced by `versionId` | [#52](https://github.com/setu-standards/inquiry-pay-equity/issues/52), [#57](https://github.com/setu-standards/inquiry-pay-equity/issues/57) | Use `documentId` as the primary business identifier. Use `versionId` for version tracking. |
| `customer.personContacts` changed from object to array. Multiple person contacts can now be specified | [#5](https://github.com/setu-standards/inquiry-pay-equity/issues/5) | Wrap existing contact in an array: `personContacts: {...}` → `personContacts: [{...}]` |
| Multiple `leave.specialLeave` are allowed | [#33](https://github.com/setu-standards/inquiry-pay-equity/issues/33) | Wrap existing special leave in an array to support multiple leave types |
| Multiple `leave.WAZO` are allowed | [#33](https://github.com/setu-standards/inquiry-pay-equity/issues/33) | Convert WAZO description field to structured array entries |
| `sickPay.periode` is removed | [#79](https://github.com/setu-standards/inquiry-pay-equity/issues/79) | Unwrap single time period from array |
| `sickPay.period[].weekday` changed from string to array | [#31](https://github.com/setu-standards/inquiry-pay-equity/issues/31) | Wrap weekday in array for consistency |
| `individualChoiceBudget.budgetRate[]` renamed to `individualChoiceBudget.line[]` | [#63](https://github.com/setu-standards/inquiry-pay-equity/issues/63) | Rename `budgetRate` to `line` for consistency with other blocks |
| Reference of `positionProfile.salaryScale` moved to `remuneration.salaryScale` | [#14](https://github.com/setu-standards/inquiry-pay-equity/issues/14) | Move salary scales and add `positionProfileReference` for linking |
| `schemeAgencyId` now required on `customer.id`, `individualChoiceBudget.id`, `other.id`, `sickPay.id`, `sustainableEmployability.id` | [#26](https://github.com/setu-standards/inquiry-pay-equity/issues/26) | |
| `holidayAllowance.name` changed from required to optional | [#50](https://github.com/setu-standards/inquiry-pay-equity/issues/50) | |
| Various `line` and `line.amount` fields changed from required to optional | [#56](https://github.com/setu-standards/inquiry-pay-equity/issues/56) | |
| Change `...SalaryIncreaseRate` to `...SalaryIncrease`  |  [82](https://github.com/setu-standards/inquiry-pay-equity/issues/82) | |
|  Standardize `conditionType` values|  [#1](https://github.com/setu-standards/inquiry-pay-equity/issues/1)| Major change please see [conditions](./usage-notes/conditions.md)  |
| Possibility to add Occurence as Conditions and as Paydates to indicate for example salary increases |  [#42](https://github.com/setu-standards/inquiry-pay-equity/issues/42) | See [conditions](./usage-notes/conditions.md) |
| Add `description` field to all components| [#80](https://github.com/setu-standards/inquiry-pay-equity/issues/80) | Description field for complex calculations |
| Add Hour/Day `unitCode` for sustainable employability| [#75](https://github.com/setu-standards/inquiry-pay-equity/issues/75) |  |
| Time-for-time available in the `other` component | [#73](https://github.com/setu-standards/inquiry-pay-equity/issues/73) | Support for time-for-time arrangements |
| Add `startSalaryStep`  under `InquiryPayEquity / remuneration / salaryScale / positionProfileReference`| [#67](https://github.com/setu-standards/inquiry-pay-equity/issues/67) | |
| Add `Holidays` under `allowance/period/weekday` | [#66](https://github.com/setu-standards/inquiry-pay-equity/issues/66) | Process holidays for allowances |
| Add `referenceDate` to `baseDefinitions`| [#65](https://github.com/setu-standards/inquiry-pay-equity/issues/65) | Add valuation date to basis definitions |
| Add `IKBReference` under each `line` in allowance, holiday allowance, ADV, Paid leave and Sustainability Employability | [#36](https://github.com/setu-standards/inquiry-pay-equity/issues/36) | Handle missing IKB information |


### Code List Changes

| Change | Issues |
|--------|--------|
| Expense/allowance code lists consolidated; `EA105` reassigned | [#54](https://github.com/setu-standards/inquiry-pay-equity/issues/54) |
| Base amount `unitCode` list expanded with clear wage concepts | [#9](https://github.com/setu-standards/inquiry-pay-equity/issues/9) |
| Amount `unitCode` list expanded with Day | [#77](https://github.com/setu-standards/inquiry-pay-equity/issues/77) | |
| Codelist for offical holidays | [#62](https://github.com/setu-standards/inquiry-pay-equity/issues/62) | |
|  `typeCode` for SustainableSociety expanded | [#38](https://github.com/setu-standards/inquiry-pay-equity/issues/38) | |
|  `typeCode` for Allowances expanded | [#21](https://github.com/setu-standards/inquiry-pay-equity/issues/21) | |
|  `unitCode` for salary increase is expanded with `step` | [#21](https://github.com/setu-standards/inquiry-pay-equity/issues/21) | Enables to define a salarystep raise |


---

### Functional extensions

#### Origin Tracking ([#8](https://github.com/setu-standards/inquiry-pay-equity/issues/8), [#74](https://github.com/setu-standards/inquiry-pay-equity/issues/74))

A new `origin` block has been added to all major sections to distinguish between:
- CAO-defined elements (collective labor agreement)
- Client-specific additions or deviations

```json
"origin": {
  "type": "CollectiveLabourAgreement" | "CollectiveLabourAgreementExtended" | "CustomLabourAgreement" | "Unknown"
}
```

**Affected blocks:** `allowance`, `holidayAllowance`, `individualChoiceBudget`, `leave`, `other`, `pension`, `positionProfile`, `remuneration`, `sickPay`, `sustainableEmployability`

#### Base Definitions ([#16](https://github.com/setu-standards/inquiry-pay-equity/issues/16))

New top-level `baseDefinition[]` array to explicitly define what components are included in base salary calculations:

```json
"baseDefinition": [{
  "baseType": "actualWage",
  "remuneration": true,
  "holidayAllowance": true,
  "paidLeaveDays": false,
  "allAllowances": false,
  "allowances": {
    "typeCode": ["EA101", "EA102"]
  },
  "referenceDate" : { 
    "occurenceType":"..",
  }
}]
```

#### Supplementary Arrangements ([#49](https://github.com/setu-standards/inquiry-pay-equity/issues/49))

New `supplementaryArrangements[]` section for RVU (early retirement), generation pact, and other arrangements:

```json
"supplementaryArrangements": [{
  "name": "Generatiepact 80-90-100",
  "type_code": { "value": "GenerationPact"}
}]
```

#### Line Identifiers ([#60](https://github.com/setu-standards/inquiry-pay-equity/issues/60), [#22](https://github.com/setu-standards/inquiry-pay-equity/issues/22))

New `lineId` field on line items enables cross-referencing between allowances:

```json
"allowance": [{
  "line": [{
    "lineId": { "value": "shift-allowance-1" },
    "reference": [{
      "targetId": { "value": "base-hourly-rate" }
    }]
  }]
}]
```

#### Proportional Indicators ([#48](https://github.com/setu-standards/inquiry-pay-equity/issues/48))

New `proportional` object on amount blocks to indicate pro-rata calculation:

```json
"amount": {
  "value": 100,
  "unitCode": "euro",
  "proportional": {
    "partTimePercentage": true,
    "employmentDuration": true,
    "description": "Pro-rata based on ...."
  }
}
```

#### Leave Day Value ([#46](https://github.com/setu-standards/inquiry-pay-equity/issues/46))

New `leaveDayValue` on individual leave types (ADV, paid leave, special leave, holidays, WAZO) instead of a single global value:

```json
"adv": [{
  "amount": { "value": 24, "unitCode": "hour" },
  "leaveDayValue": {
    "value": 180,
    "unitCode": "euro"
  }
}]
```

#### Expanded Special Leave ([#33](https://github.com/setu-standards/inquiry-pay-equity/issues/33))

Special leave restructured as an array with full amount specification:

```json
"specialLeave": [{
  "name": "Marriage leave",
  "amount": {
    "value": 2,
    "unitCode": "day"
  },
  "intervalCode": {
    "value": "1",
    "unitCode": "item"
  },
  "conditions": [{
    "conditionType": ".."
  }],
}]
```

#### WAZO Leave Support ([#33](https://github.com/setu-standards/inquiry-pay-equity/issues/33))

New dedicated `wazo[]` array for maternity/paternity leave arrangements:

```json
"wazo": [{
  "name": "Additional birth leave",
  "amount": {
    "value": 5,
    "unitCode": "day"
  },
  "conditions": [{
    "conditionType": "Occurence",
      "occurenceType": "...",
  }]
}]
```

#### Work Duration Details ([#64](https://github.com/setu-standards/inquiry-pay-equity/issues/64), [#41](https://github.com/setu-standards/inquiry-pay-equity/issues/41))

Expanded `workDuration` with interval specification:

```json
"workDuration": {
  "amount": {
    "value": 40,
    "unitCode": "hour"
  },
  "intervalCode": {
    "value": 1,
    "unitCode": "week"
  },
  "valuePerWeek": 40
}
```

#### Effective date on Salary Increases ([#12](https://github.com/setu-standards/inquiry-pay-equity/issues/12))

Added `effectiveDate` to `individualSalaryIncrease`:

```json
"individualSalaryIncrease": [{
  "effectiveDate":  {
    "occurenceType": "..."
  },
  "line": { ... }
}]
```

---

### Improvements

#### Expanded Unit Codes ([#6](https://github.com/setu-standards/inquiry-pay-equity/issues/6), [#9](https://github.com/setu-standards/inquiry-pay-equity/issues/9), [#23](https://github.com/setu-standards/inquiry-pay-equity/issues/23), [#25](https://github.com/setu-standards/inquiry-pay-equity/issues/25), [#30](https://github.com/setu-standards/inquiry-pay-equity/issues/30), [#32](https://github.com/setu-standards/inquiry-pay-equity/issues/32), [#34](https://github.com/setu-standards/inquiry-pay-equity/issues/34), [#39](https://github.com/setu-standards/inquiry-pay-equity/issues/39))

- Added `shift` (per dienst) for shift allowances
- Added `fourWeeks`, `quarter` to interval codes
- Expanded base amount unit codes with clear wage concepts
- Added `hour` and percentage options to paid leave
- Extended IKB interval options

#### Salary Scale Improvements ([#14](https://github.com/setu-standards/inquiry-pay-equity/issues/14))

- `salaryScale` moved to remuneration for direct linking
- Added `currency` field
- Added `positionProfileReference` for position linking

#### Pension Clarifications ([#15](https://github.com/setu-standards/inquiry-pay-equity/issues/15), [#16](https://github.com/setu-standards/inquiry-pay-equity/issues/16))

- Pension lines can now be distinguished by employer/employee contribution via conditions or naming
- Base definitions allow specifying pension calculation basis

#### Holiday Processing ([#28](https://github.com/setu-standards/inquiry-pay-equity/issues/28), [#44](https://github.com/setu-standards/inquiry-pay-equity/issues/44), [#58](https://github.com/setu-standards/inquiry-pay-equity/issues/58))

- Added `unitCode` to holiday amounts
- Improved pay date flexibility
- Added official holiday code list support

#### Documentation ([#7](https://github.com/setu-standards/inquiry-pay-equity/issues/7), [#17](https://github.com/setu-standards/inquiry-pay-equity/issues/17), [#61](https://github.com/setu-standards/inquiry-pay-equity/issues/61))

- Improved field descriptions throughout
- Clarified `hourlyWageFactor` usage
- Better documentation of `relationType`

#### Optional Fields ([#37](https://github.com/setu-standards/inquiry-pay-equity/issues/37), [#53](https://github.com/setu-standards/inquiry-pay-equity/issues/53), [#56](https://github.com/setu-standards/inquiry-pay-equity/issues/56))

- `line` and `amount` fields made optional where appropriate
- Supports scenarios where arrangements exist but amounts are not known

---


### Items On Hold

| Issue | Description | Reason |
|-------|-------------|--------|
| [#72](https://github.com/setu-standards/inquiry-pay-equity/issues/72) | Non-classifiable function workers | Awaiting requirements |
| [#59](https://github.com/setu-standards/inquiry-pay-equity/issues/59) | Replacing allowances | Needs further analysis |

---


