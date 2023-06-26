# Scenario 2: planning in the system of the staffing customer

In the second scenario, the staffing customer is responsible for the planning. The staffing customer receives PlanningConstraints about the human resource (e.g, availability) and other human resource data of the staffing supplier. Then, the staffing customer creates a schedule that includes the flexible workers. This schedule (PlanningAssignment) is communicated back to the staffing supplier. The staffing supplier can provide updates on constraints and availabilities (e.g. due to illness or leave), as a consequence the staffing customer creates a new schedule and sends it back to the staffing supplier. This scenario is most likely when a flexible worker works exclusively for the client.

![](../../../static/img/Scenario%202.png)

Some situations that are supported by scenario 2:

1. A representative of the staffing supplier creates the schedule in the staffing customer's planning system.
2. A flexible worker does not work exclusively for the client. In this case, it is still possible to follow scenario 2 when the staffing supplier can manage it with updates on availability. If the staffing supplier wants more influence on the planning of non-exclusive flexible workers, this is out of scope of scenario 2.

Scenario 2 is developed into a [sequence diagram](StaffingSupplier_and_StaffingCustomer) that illustrates the flow of REST calls in this scenario. It incorporates a typical flow with updates and cancellation between the backoffice system of a staffing supplier and the planning system of a staffing customer.
