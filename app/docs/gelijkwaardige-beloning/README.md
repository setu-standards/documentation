# Inquiry Pay Equity v2.0

:::caution DISCLAIMER
The SETU Standard for Inquiry Pay Equity v2.0 is currently under review.

The public consultation period runs from 6 Feb till 27 May 2026.
:::

## Introduction
 
The "Inquiry Pay Equity" standard aims to ensure that flex workers earn and actually receive the same **remuneration** as the permanent employees of the staffing customer who perform the same tasks and are paid according to the staffing customer's collective labor agreement (CLA). To apply equal or equivalent pay, it is necessary to share the **staffing customer** (inlener) remuneration information with the **staffing supplier** (uitzender). This way, the staffing supplier can accurately apply equal pay for each of their flex workers. The SETU, in collaboration with ABU and NBBU, has developed a standard for the uniform exchange of this remuneration information between staffing customers, staffing suppliers, and CLA parties. 

:::info Inquiry Pay Equity standard 
The message model can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/message-model/MessageModel_881f9d0c-bdb8-4848-93b2-b45e6624950d). There you can also find example messages and validation artifacts in both XML and JSON.

The REST API specifications can be found here: [Inquiry Pay Equity OAS](../api/oas-gelijkwaardige-beloning.mdx)
:::

## What's in it for you? 
Implementing this standard comes with several benefits:

*   **More efficient processes:** Faster and error-free exchange of remuneration information, saving time and costs.
*   **Improved compliance:** Supports the correct application of inquiry pay equity.

## Core of the Standard
On [wijzerbelonen.nl](https://www.wijzerbelonen.nl/stap-1-uitvraag-arbeidsvoorwaarden/) the ABU and NBBU developed an overview of information requirements necessary to correctly apply equal pay for each flex worker. The SETU standard for Inquiry Pay Equity based on the work of wijzerbelonen and takes into account all the information requirements.

**What the standard includes:**
- The ability to send all relevant remuneration components, such as:
    - Reference to the staffing customer's CLA and/or their own terms of employment
    - Salary structure/scales
    - Allowances (e.g., for overtime, shift work, irregular hours)
    - Holiday allowance
    - Compensations (such as for commuting, working from home, standby, coffee)
    - Special bonuses/payments
    - Information on leave, Individual Choice Budget (IKB), pension, and other relevant schemes
    - Structured conditions (Age, Function, etc.) determine when components are applicable.

**What the standard does _not_ include:**
- *Calculations:* The standard focuses on the structure of data about remuneration components, not on the actual calculations.
- *Legal interpretation:* The correct application and interpretation of the data (remuneration components) remain the responsibility of the parties involved.

## How to use the standard?

There are two primary ways to implement the Inquiry Pay Equity standard.

### 1. Direct API Integration (One-on-one relationship)
The standard can be implemented directly into existing software systems via an API. This method allows for automated data exchange between staffing partners, reducing manual work and the risk of errors.
*   **Target Audience:** Primarily suited for larger organizations or software vendors with high-volume data exchange.

### 2. Web Form via wijzerbelonen.nl (Collaborative initiative)
This platform is a collaborative initiative between ABU, NBBU, and SETU. The **[wijzerbelonen.nl](https://www.wijzerbelonen.nl)** was developed by ABU and NBBU to help interpret complex remuneration components.

The platform includes a web form that allows users to input data manually and export it into a SETU compliant message and PDF. This ensures that even parties without a direct technical coupling can still exchange standardized data.
*   **Target Audience:** Primarily for smaller parties, those without a direct 1-on-1 API coupling, enabling them to share compliant data with their staffing partners via other media like email.

## Scenario's

The exchange of pay equity (Inquiry Pay Equity) data involves communication between the staffing supplier, staffing customer, and CAO service providers, including their respective systems. The SETU Inquiry Pay Equity standard defines two different scenarios for data exchange between these parties:

- **Scenario 1:** The staffing customer provides the pay equity data directly to the staffing supplier without the involvement of CAO service providers.
- **Scenario 2:** CAO service providers supply the pay equity data directly to the staffing supplier.


## Relation to HR Open standard
The new Inquiry Pay Equity SETU standard is based on a standardized SETU language in which concepts and relationships with associated terminology and definitions are specified. The SETU reuses the terminology and definitions of the latest version 4.3 of the international HR Open standard as much as possible for its SETU language. Where necessary, additional relationships have been established in the SETU language between existing HR Open concepts, or new concepts have been introduced. Definitions have also been improved and made more suitable for the inquiry pay equity context.

## Public consultation
For version 2.0 of the Inquiry Pay Equity standard, a public consultation will be performed from 6 Feb till 27 May 2026.

Interested parties are invited to review the delivered standard and provide review comments. Those responses will be considered by the SETU, discussed with the working group and, where necessary, the draft version adjusted before final publication.
