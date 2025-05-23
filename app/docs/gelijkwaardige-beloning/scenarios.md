# Scenarios

:::info DOCUMENTATION
The message models can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/specifications). There you can also find example messages and validation artifacts in both XML and JSON.

The REST API specifications can be found here: [Purchase to Pay API specifications](../api/oas-gelijkwaardige-beloning)
:::

The exchange of pay equity (Inquiry Pay Equity) data involves communication between the staffing supplier, staffing customer, and intermediary parties, including their respective systems. The SETU Inquiry Pay Equity standard defines two different scenarios for data exchange between those parties, as depicted in the picture below:

* **Scenario 1:** The staffing customer provides the pay equity data directly to the staffing customer without the involvement of CAO service providers.
* **Scenario 2:** CAO service providers supply the pay equity data directly to the staffing supplier.

This documentation page will elaborate on both scenarios, explaining what we mean by pay equity data and at what stage in the flexible staffing process it should be exchanged.

![Inquiry Pay Equity scenarios](../../static/img/Inlenersbeloning%20scenarios.png)


## Scenario 1

In this scenario, the staffing customer provides the pay equity data directly to the staffing supplier without involving CAO service providers. This means that only the staffing customer, the staffing supplier, and their back-office systems are involved. Typically, this scenario applies to large staffing customers who have a direct integration with the staffing supplier.

This exchange can take place at different stages:

* During the procurement process
* During the selection of a temporary worker for a specific assignment
* Before and during the placement of the temporary worker
* After the placement phase

As seen in the picture, the pay equity data can be sent based on a trigger/request from the staffing supplier. However, this trigger request is currently outside the scope of the SETU standard and is not standardized. *Note*: This request process should not be confused with a data request of pay equity (de uitvraag). In this scenario, the staffing customer is responsible for delivering the complete set of pay equity data for one or more positions in their organisation.

![scenario 1](../../static/img/Scenario%201%20inlenersbeloning.png)

## Scenario 2

In this scenario, CAO service providers directly transfer pay equity data to the staffing supplier. The CAO service provider, acting on behalf of the staffing supplier, initiates a request to the staffing customer to share their pay equity data with their system. Alternatively, the staffing customer may also initiate the sharing of pay equity data from the CAO service provider to the staffing supplier, for example, in case of changes to the pay equity data.

Either way, the CAO service provider maintains the pay equity data within their system and translates the received pay equity data from the staffing customer into the SETU pay equity format before exchanging it with the staffing supplier. The integration between CAO service providers and staffing customers is outside the scope of this document (see figure).

As with Scenario 1, this data exchange can take place at different stages of the employment process.

![scenario 2](../../static/img/Scenario%202.png)

## What is meant with a correct pay equity data exchange?

Throughout the process, a correct pay equity data exchange means that the data is complete for **one or more job functions** or **complete for all job functions**. 

This means that the data about employment terms must be complete for one or more specified job functions or for all specified job functions within the organization. Partial delivery of pay equity data is not considered complete and is outside the scope of the SETU standard. However, partial incomplete pay equity data can be exchanged if agreed upon by the implementing parties. See the figure below. 

![when and what](../../static/img/When%20and%20what%20inlenersbeloning.png)