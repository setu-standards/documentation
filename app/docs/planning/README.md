# Planning and Scheduling

:::caution
The SETU standard for planning and scheduling is currently under review. The documentation in this section is about version 0.9.

Version 1.0 is expected to be released by the SETU board on the 20th of June '23.

Would you like to contribute? Please refer to the following page: [Public Consultation](./Public%20consultation/public-consultation.md)
:::

## Introduction

The SETU standard for planning and scheduling is currently under review. The documentation in this section is about version 0.9.

- **PlanningConstraints**, which is used for exchanging information on the constraints that need to be taken into account for the planning of an individual worker related to a specific assignment;
- **PlanningRequest**, which is used by the customer to request the planning of workers for a certain position;
- **PlanningAssignment**, which is used to exchange the planning of a worker on a certain position.

Further details on the content of these specifications can be found on our [Semantic Treehouse environment](https://setu.semantic-treehouse.nl/#/Projects). There you can also find example messages, validation artifacts, and REST API specifications for each message specification.

## Scenarios

During the development of the Planning and Scheduling messages, the SETU working group took two particular scenarios into account:

1. The planning is done entirely in the system of the staffing supplier.
2. The planning is done entirely in the system of the staffing customer.

The following sections will cover both scenarios and their corresponding [API specifications](api).
