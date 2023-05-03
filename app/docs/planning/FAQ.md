# Frequently Asked Questions

Welcome to our Frequently Asked Questions page! Here, you will find answers to some of the most common questions we receive from our users.

## Questions

**If there have been modifications made to assignments that have not been communicated to the client, it is unclear which assignments will be returned by the GET /planning/requests/{id}/assignments request.**

Let's not make it more complicated than it is. Essentially, REST operations are stateless, which means that a GET (A->B) should not depend on whether information about that resource (in this case, an assignment) has been shared via a PUT. This means that the relevant GET should always provide current information, regardless of whether a PUT has been sent or not.

**Can you confirm whether there are any POST, PUT, GET, or DELETE operations available for specific planning lines in the PlanningAssignment message?**

Indeed, the Open API specs currently do not include IDs at the planninglines (Periodic & Single line) for the Assignment message. However, this does not mean that it is not possible to make adjustments or deletions at for the Assignment message. A decision was made at the time to assign responsibility for assigning a worker to a job to either the staffing supplier's planning system (Scenario 1) or the planning system of the staffing customer (Scenario 2). In both cases, the Assignment message is intended as a notification to a back-office system. Therefore, it is correct that the OpenAPI spec only allows POST, PUT, and DELETE operations at the main level and not at the planningline level. If specific planning lines need to be modified or deleted at, the sender can use a PUT to notify the recipient.

**What is the protocol for dealing with errors in message content during synchronous or asynchronous message processing?**

This is should not be an issue for synchronous processing of SETU Planning and Scheduling messages. If the receiver is unable to process the /planning/..., this can be indicated through a response with a 400 series error code.

Regarding asynchronous processing of planning requests, it is currently not possible to indicate errors in processing. This has not come up before. Please reach out to us if you consider working out this issue necessary.
