# Planning and Scheduling

## Introduction

The SETU working group on Planning and Scheduling has developed three new message specifications based on HR Open 4.3.:

- **PlanningConstraints**, which is used to exchange information on constraints related to planning an individual worker for a specific assignment;
- **PlanningRequest**, which is used by the customer to request the planning of workers for a certain position;
- **PlanningAssignment**, which is used to exchange the planning of a worker on a certain position.

Further details on the content of these specifications can be found on our Semantic Treehouse environment. The SETU has also provided sample messages, validation artifacts, and REST API specifications (OAS).

### Scenarios

During the development of these message the SETU working group took two particular scenarios into account:

1. **Scenario 1:** Planning is done entirely in the system of the staffing supplier;
   - 1.1 the staffing supplier also plans the permanent employees of the staffing customer.
2. **Scenario 2:** Planning is done entirely in the staffing customer's system;

The following sections will cover both scenarios and their corresponding API specifications.
