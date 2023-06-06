# Synchronous vs asynchronous request handling

For processing the planning and scheduling request we can distinguish three different levels:

1. The business process level where a business transaction is supported by different messages (e.g. a planning request is fullfilled by a planning assignment)
2. The functional level of an individual requet (e.g. a planning request can be processed by the business)
3. The technical level of a single API call (e.g. a planning request message is valid according to schema and a 200 response is returned)

The synchronous handling of a request implies direct handling of the request and that the requestor waits for the response. For asynchronous handling the request is made, but the requestor doesn't wait for the response and gets or checks for a response at a later stage.

This section of the documentation describes which levels are required to be handled synchronous vs asynchronous.

## Business process level
On the business process level the requests are handled **asynchronous**. When a planning request is made, the planning assignment doesn't follow in the immediate response.

## Functional level
On the functional level of an indiviual request, all requests need to be handled **synchronous**. This means that e.g. a planning request needs to be accepted or rejected when the API request is made. It becomes the responsibility of the server (the called system) to handle the request. This includes informing the client (the requestor) about a successful next step in the business proces (e.g. a planning assignment), but also informing the client if the request cannot be fulfilled for whatever reason.

## Technical processing of planning messages:
On technical level, because of the nature of REST, the API call is always handled **synchronous**. A request is processed and a technical response is returned immediately. A incoming request always requires content validation agains the schema.

Because of the choice to handle requests on functional level **synchronous**, a successfull POST request needs to be responded with a `201 Created`. The standard HTTP response code `202 Accepted`, that indicates that the request is received but the resource is not created yet, is therefore not allowed.
