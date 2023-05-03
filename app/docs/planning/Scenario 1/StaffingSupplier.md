# Supplier's Planning and Backoffice System

## Sequence diagram:

### A typical flow with updates and cancellation between the backoffice system and the planning system of a **staffing supplier.**

The scenario in the sequence diagram below involves communication between a staffing supplier's backoffice system and its planning system. The planning system sends a _GET /planning/constraints_ to retrieve availability information about a human resource. The backoffice system then responds with a status code 200 and the planning constraint of a particular human resource.

The backoffice system may also want to exchange the planning constraints of other human resources. This can be done by sending a _POST /planning/constraints_, and the planning system responds with a status code 201 to indicate success.

Subsequently, the backoffice system may need to modify an already existing planning constraint by sending a _PUT /planning/constraints/{id}_ where the {id} denotes the unique identifier of the planning constraint. The planning system may respond with a status code 200 if the update is successful. Additionally, the planning system may want to retrieve information about an existing lanning constraint by sending a _GET /planning/constraints/{id}_, and the backoffice system will respond with a status code 200 and the details of the constraint.

```mermaid
sequenceDiagram
    participant Backoffice as Backoffice staffing supplier
    participant Planning as Planning system  staffing supplier

    Note over Backoffice,Planning: GET availability information <br/> for a human resource
    Planning ->>+ Backoffice: GET /planning/constraints
    Backoffice ->>- Planning: 200 + PlanningConstraints


    Note over Backoffice,Planning: The backoffice has the <br/> planning constraints about human resource
    Backoffice ->>+ Planning: POST /planning/constraints
    Planning ->>- Backoffice: 201

    Note over Backoffice,Planning: Change an existing planning constraints
    Backoffice ->>+ Planning: PUT /planning/constraints/ {id-A}
    Planning ->>- Backoffice: 200

    Note over Backoffice,Planning: Get information about an existing <br/> planning constraints
    Planning ->>+ Backoffice: GET /planning/constraints/ {id-A or B}
    Backoffice ->>- Planning: 200 + PlanningConstraints
```

<figcaption align = "center">Diagram.1 - Flow between the backoffice system and the planning system of a staffing supplier.</figcaption>
