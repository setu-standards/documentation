# Inquiry Pay Equity v1.0

:::info DOCUMENTATION
The message models can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/specifications). There you can also find example messages and validation artifacts in both XML and JSON.

The REST API specifications can be found here: [Purchase to Pay API specifications](../api/oas-gelijkwaardige-beloning.mdx)
:::

## Introduction
 
The "Inquiry Pay Equity" standard aims to ensure that flex workers earn and actually receive the same **remuneration** as the permanent employees of the staffing customer who perform the same tasks and are paid according to the staffing customer's collective labor agreement (CLA). To apply equal or equivalent pay, it is necessary to share the **staffing customer** (inlener) remuneration information with the **staffing supplier** (uitzender). This way, the staffing supplier can accurately apply equal pay for each of their flex workers. The SETU, in collaboration with ABU and NBBU, has developed a standard for the uniform exchange of this remuneration information between staffing customers, staffing suppliers, and CLA parties

:::info Inquiry Pay Equity standard 
The message model can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/message-model/MessageModel_881f9d0c-bdb8-4848-93b2-b45e6624950d). There you can also find example messages and validation artifacts in both XML and JSON.

The REST API specifications can be found here: [Inquiry Pay Equity OAS](../api/oas-gelijkwaardige-beloning.mdx)
:::

## What's in it for you? 
Implementing this standard comes with several benefits:

*   **More efficient processes:** Faster and error-free exchange of remuneration information, saving time and costs.
*   **Improved compliance:** Supports the correct application of inquiry pay equity.

## Core of the Standard
The ABU and NBBU developed an application form for pay equity (the Model Inquiry Equitable Pay (MIEP)). This is an overview of information requirements necessary to correctly apply equal pay for each flex worker.
The SETU standard for Inquiry Pay Equity is based on this MIEP and takes into account all the information requirements.

**What the standard includes:**
- The ability to send all relevant remuneration components, such as:
    - Reference to the staffing customer's CLA and/or their own terms of employment
    - Salary structure/scales
    - Allowances (e.g., for overtime, shift work, irregular hours)
    - Holiday allowance
    - Compensations (such as for commuting, working from home, standby, coffee)
    - Special bonuses/payments
    - Information on leave, Individual Choice Budget (IKB), pension, and other relevant schemes

**What the standard does _not_ include:**
- **Calculations:** The standard focuses on the structure of data about remuneration components, not on the actual calculations.
- **All terms of employment:** The focus is on components relevant for pay equity.
- **Detailed conditions:** Although conditions may apply to remuneration components (determining when they are applicable), the first version of the standard does not yet include all possible exceptions and detailed conditions.
- **Legal interpretation:** The correct application and interpretation of the data (remuneration components) remain the responsibility of the parties involved.

## Relationship with ABU and NBBU
Applying and interpreting these remuneration components can be challenging. To provide more clarity and a platform for questions, the ABU and NBBU are developing the **wijzerbelonen.nl** platform. This platform aims to make it easier for employers and intermediaries to determine the correct pay. The SETU is working closely with the ABU and NBBU to ensure that our standard aligns well with this initiative.

## Scenario's

The exchange of pay equity (Inquiry Pay Equity) data involves communication between the staffing supplier, staffing customer, and CAO service providers, including their respective systems. The SETU Inquiry Pay Equity standard defines two different scenarios for data exchange between these parties:

- **Scenario 1:** The staffing customer provides the pay equity data directly to the staffing supplier without the involvement of CAO service providers.
- **Scenario 2:** CAO service providers supply the pay equity data directly to the staffing supplier.


## Relation to HR Open standard
The new Inquiry Pay Equity SETU standard is based on a standardized SETU language in which concepts and relationships with associated terminology and definitions are specified. The SETU reuses the terminology and definitions of the latest version 4.3 of the international HR Open standard as much as possible for its SETU language. Where necessary, additional relationships have been established in the SETU language between existing HR Open concepts, or new concepts have been introduced. Definitions have also been improved and made more suitable for the inquiry pay equity context.

## Public consultation
For version 1.0 of the Inquiry Pay Equity standard, a public consultation was performed from 7 april till 2nd of May.

Interested parties were invited to review the delivered standard and provide review comments. Those responses were considered by the SETU, discussed with the working group and, where necessary, the draft version adjusted before final publication.
