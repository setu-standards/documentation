# Planning and Scheduling

:::info DOCUMENTATION
The message models can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/specifications). There you can also find example messages and validation artifacts in both XML and JSON.

The REST API specifications can be found here: [OAS Planning and Scheduling](../api/oas-planning)
:::

## Introduction

The SETU Standard for Planning and Scheduling contains three message specifications:

- **PlanningConstraints**, which is used for exchanging information on the constraints that need to be taken into account for the planning of an individual worker related to a specific assignment;
- **PlanningRequest**, which is used by the customer to request the planning of workers for a certain position;
- **PlanningAssignment**, which is used to exchange the planning of a worker on a certain position.

Further details on the content of these specifications can be found on our [Semantic Treehouse environment](https://setu.semantic-treehouse.nl/#/Projects). There you can also find example messages, validation artifacts, and REST API specifications for each message specification.

## Scenarios

During the development of the Planning and Scheduling messages, the SETU working group took two particular scenarios into account:

1. The planning is done entirely in the system of the staffing supplier.
2. The planning is done entirely in the system of the staffing customer.

## Public consultation
A public consultation was performed from 15 May 2023 to 15 June 2023.

Interested parties were invited to review the delivered standard and provide review comments. Those responses were considered by the SETU, discussed with the working group and, where necessary, the draft version adjusted before final publication.