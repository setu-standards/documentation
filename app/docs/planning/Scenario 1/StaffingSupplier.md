# Supplier's planning and backoffice system

:::info
The sequence diagram on this page is specific to [scenario 1](../../planning/Scenario%201/Readme.md) for Planning and Scheduling, where the planning takes place in the staffing supplier's planning system.
:::

The sequence diagram below involves communication between a staffing supplier's backoffice system and its planning system. The planning system sends a `GET /planning/constraints/hrID` to retrieve availability information about a human resource. The API server of the backoffice system then responds with a status code 200 and the planning constraints of a particular human resource.

The backoffice system of the staffing supplier may also want to exchange the planning constraints of other human resources. This can be done by sending a `POST /planning/constraints`, and the planning system responds with a status code 201 + the requestBody + an unique resource identifier to indicate success.

Subsequently, the backoffice system may need to modify an already existing planning constraint by sending a `PUT /planning/constraints/{ID}` where the {ID} denotes the unique resource identifier of the planning constraint, assigned by the API server. The planning system may respond with a status code 200 if the update is successful. Additionally, the planning system may want to retrieve information about an existing planning constraint object. This is done by sending a `GET /planning/constraints/{ID}`, and the backoffice system will respond with a status code 200 and the details of the constraint.

:::note
More information about the usage of the different identifiers in certain REST API paths can be found in this [section](../../API%20Specification/identifiers.md).
:::

```mermaid
sequenceDiagram
    participant Backoffice as Backoffice staffing supplier
    participant Planning as Planning system  staffing supplier

    Note over Backoffice,Planning: GET availability information <br/> for a human resource
    Planning ->>+ Backoffice: GET /planning/constraints/{hrID}
    Backoffice ->>- Planning: 200 + requestBody


    Note over Backoffice,Planning: The backoffice has the <br/> planning constraints about human resource
    Backoffice ->>+ Planning: POST /planning/constraints
    Planning ->>- Backoffice: 201 + requestBody + /planning/constraints/{ID}

    Note over Backoffice,Planning: Change an existing planning constraints
    Backoffice ->>+ Planning: PUT /planning/constraints/ {ID}
    Planning ->>- Backoffice: 200 + requestBody

    Note over Backoffice,Planning: Get information about an existing <br/> planning constraints
    Planning ->>+ Backoffice: GET /planning/constraints/ {ID}
    Backoffice ->>- Planning: 200 + requestBody
```

<figcaption align = "center">Diagram 4 - Flow between the backoffice system and the planning system of a staffing supplier.</figcaption>
