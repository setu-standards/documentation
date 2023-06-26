# Customer's planning system and supplier's backoffice

This scenario involves communication between a staffing supplier's backoffice system and a staffing customer's planning system. The staffing customer sends a _GET /planning/constraints/hrID_ to retrieve the availability information for a human resource, and the staffing supplier responds with a status code 200 and the requested planning constraints.

The staffing supplier can also send the planning constraints of other human resources by creating a _POST /planning/constraints_, and the planning system of the staffing customer responds with a status code 201, the requestBody, and an unique resource identifier to indicate success.

The planning system notifies the staffing supplier of the new assignment by sending a _POST /planning/assignments_, and the staffing supplier responds with a status code 201, the requestBody, and an unique resource identifier.

Later on, the staffing supplier may want to add a planning line to the planning constraint by sending a _POST /planning/constraints/{id}/periodic-lines_. The .../constraint/{ID} indicates the unique resource identifier of the planning constraints, which is assigned by the API server. The planning system may respond with a status code 201 to indicate success. Finally, the staffing supplier is notified of the updated assignment by the planning system sending a _PUT /planning/assignments/{id},_ and the staffing supplier responds with a status code 201.

**Note:** more information about the usage of the different identifiers in certain REST API paths can be found in this [section](../api/identifiers.md).

```mermaid
sequenceDiagram
   participant Customer as Backoffice <br/> staffing supplier
    participant Planning as Planning system <br/> staffing customer

     Note over Customer,Planning: GET availability information <br/> for a human resource
    Planning ->>+ Customer: GET /planning/constraints/{hrID}
    Customer ->>- Planning: 200 + requestBody

    Note over Customer,Planning: Additional availability information of a human resource <br/> sent to the staffing customer
    Customer ->>+ Planning: POST /planning/constraints
    Planning ->>- Customer: 201 + requestBody + /planning/constraint/{ID}

    Note over Customer,Planning: The assignment is notified to staffing supplier
    Planning ->>+ Customer: POST /planning/assignments
    Customer ->>- Planning: 201 + requestBody + /planning/assignment/{ID}

    Note over Customer,Planning: The staffing supplier has an additional planning constraint
    Customer ->>+ Planning: POST /planning/constraints/{ID}/periodic-lines
    Planning ->>- Customer: 201 + requestBody + /planning/constraints/{ID}/lines{ID}

    Note over Customer,Planning: The staffing supplier is notified about <br/> the updated assignment
    Planning ->>+ Customer: PUT /planning/assignments/{ID}
    Customer ->>- Planning: 200 + requestBody

```

<figcaption align = "center">Diagram 3 - Flow between the backoffice system of the staffing supplier and the planning system of the staffing customer.</figcaption>
