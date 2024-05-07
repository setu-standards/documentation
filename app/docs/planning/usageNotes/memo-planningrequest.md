# Clarification Planning Lines

:::info
<a href="/documents/Notitie_verduidelijking_PlanningRequest.pdf" target="_blank">Download the Dutch version in PDF</a>
:::


## Introduction

During the implementation of the Planning Standard, different interpretations were identified regarding the ***Planning Request*-message v1.0** when requesting multiple flexible workers for the same position at the same time and location. This note serves to clarify the situation, provide support for any discussions in the working group, and will subsequently be added as an explanation to the standard.

The issue revolves around specifying position profiles with multiple human resources. There are two different approaches.

- **Option A:** Combining a request for multiple human resources with the same duties at the same location and time into a single planning line (periodic or singular) with a position quantity corresponding to the number of requested flexible workers.
- **Option B:** Including planningrequest lines with a position quantity (occupancy) of 1 multiple times for the total requested number.

By adding the *'position quantity'* element to the standard, option A is the intended choice, while option B is also allowed.

## Conceptual Model

Key elements from the PlanningRequest message related to this usage note:

- PlanningRequest
  - PositionProfile: 
    - Function / Role
    - Location
  -	Requested periodic planning line
    - Start & End Time
    - Position Quatity
  - Requested single planning line
    - Start date & End date time
    - Position Quantity



**PlanningRequest:** The PlanningRequest message is used to request the planning of human resources for a specific position at a particular location. The message contains information about the position, location, and the exact times when human resources are requested.

**PositionProfile:** provides a description of a specific position or role that a human resource must fulfill at a particular location.
- **Example:** role 'Dishwasher' for Location Kitchen at Dorpsplein 10.

**Planningline:** When you need this role or position, you specify it using a planning line. There are two types of planning lines: single planning line and periodic planning line. The difference between them is that one is periodic, for example, every monday, and the other is occasional, for example, on a specific date. It is possible to add a name to this specific planning line.

**Position Quantity:** for these planning lines, it is essential to indicate how many human resource you need for a specific position at a particular time and location. This can be done using the 'Position Quantity' element.

- **Example:** single planning line: one dishwasher for Location Kitchen at Dorpsplein 10 on monday, January 19, 2024, from 9:00 AM to 4:00 PM.

## Scenario's

**Scenario 1:** Request for multiple human resources with the same duties at the same location and the same working hours. **Example:** A request for three dishwashers at the same location and working hours results in one or more planning lines.

In option A, this scenario is consolidated into one planning line with a *'position quantity'* corresponding to the number of requested human resources.

- **One planning line:**
  - **Three** dishwashers for Location Kitchen at Dorpsplein 10 on Monday, January 19, 2024, from 9:00 AM to 4:00 PM.

In option B, this scenario results in multiple planning lines with a *'position quantity'* equal to 1.

- **Three planning lines:**
  - **One** dishwasher for Location Kitchen at Dorpsplein 10 on Monday, January 19, 2024, from 9:00 AM to 4:00 PM.
  - **One** dishwasher for Location Kitchen at Dorpsplein 10 on Monday, January 19, 2024, from 9:00 AM to 4:00 PM.
  - **One** dishwasher for Location Kitchen at Dorpsplein 10 on Monday, January 19, 2024, from 9:00 AM to 4:00 PM.


**Scenario 2:** Request for the same duties at the same location but at different working hours and/or other duty characteristics. This is considered as different duties and also leads to different planning lines (periodic or single). However, it is possible to combine these different lines in one PlanningRequest message since the position profile and location remain the same. **For example:** If you want to request a dishwasher between 9:00 AM and 4:00 PM and another **two** dishwashers between 4:00 PM and 11:00 PM at the same location, this can be described through the two different options:

In option A, the request with the same working hours is consolidated into one planning line (periodic or single) with a *'position quantity'* of two.

- **Two planning lines:**
  - **One** dishwasher for Location Kitchen at Dorpsplein 10 on Monday, January 19, 2024, from 9:00 AM to 4:00 PM.
  - **Two** dishwashers for Location Kitchen at Dorpsplein 10 on Monday, January 19, 2024, from 4:00 PM to 11:00 PM.

In option B, this results in multiple planning lines with a *'position quantity'* equal to 1.

- **Three planning lines:**
  - **One** dishwasher for Location Kitchen at Dorpsplein 10 on Monday, January 19, 2024, from 9:00 AM to 4:00 PM.
  - **One** dishwasher for Location Kitchen at Dorpsplein 10 on Monday, January 19, 2024, from 4:00 PM to 11:00 PM.
  - **One** dishwasher for Location Kitchen at Dorpsplein 10 on Monday, January 19, 2024, from 4:00 PM to 11:00 PM.

**Scenario 3:** If you want to request a dishwasher or another position at a different location, this requires a separate PlanningRequest message because it involves a different position profile and location.

## Explanation

**Explanation of Option A:**
Through the *'position quantity'* element, a request for multiple human resources can be consolidated into one planning line (periodic or single) with a position quantity corresponding to the requested number of flexible workers. Depending on the planning system, this approach may have the following implications for a staffing customer:

- For each request for one human resource, an individual identification is required. By consolidating the requested human resources into one planning line, a unique identification for each requested flexible worker is lacking. Additionally, there is a lack of overview to determine for which request a human resource is planned upon receiving a PlanningAssignment.
- By bundling planning requests for the same tasks, location, and working hours into one planning line, the client is less flexible in adjusting requests for one or more flexible workers.

**Explanation of Option B:**
According to the standard, it is allowed to include multiple planning lines with a position quantity of 1 multiple times for the total requested quantity, as long as they do not differ in duty characteristics, location, and working hours. However, this can lead to the following implication, depending on the staffing supplier's planning system:

- From a functional perspective, these individuals planning lines are not considered one and the same duty. Instead, they are regarded as five individual duties that must be assessed and planned separately. This means that the staffing supplier or the person responsible for planning needs to handle each of these duties individually.


