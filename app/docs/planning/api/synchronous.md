# Synchronous vs asynchronous request handling

For processing planning and scheduling requests, we can distinguish three different levels:

1. The business process level, where a business transaction is supported by different messages (e.g., a planning request is fulfilled by a planning assignment).
2. The functional level of an individual request (e.g., a planning request can be processed by the business).
3. The technical level of a single API call (e.g., a planning request message is valid according to the schema, and a 200 response is returned).

The synchronous handling of a request implies the direct handling of the request, with the requestor waiting for the response. On the other hand, for asynchronous handling, the request is made, but the requestor doesn't wait for the response immediately and retrieves or checks for a response at a later stage.

This section of the documentation describes which levels require synchronous handling and which ones require asynchronous handling.

## Business process level

On the business process level the requests are handled **asynchronous**. This means that when a planning request is made, the planning assignment doesn't follow immediately in a response.

## Functional level

At the functional level of an indiviual request, all requests need to be handled **synchronous**. This means that, e.g. a planning request must be accepted or rejected immediately when the API request is made. It is the responsibility of the server (the called system) to handle the request. If applicable, it may include informing the client (the requestor) about the successful progession in the business proces (e.g. by sending a planning assignment), and also informing the client if the request cannot be fulfilled due to any reason.

## Technical processing of planning messages:

At the technical level, due to the nature of REST, the API call is always handled **synchronous**. A request is processed, and a technical response is immediately returned. Each incoming request always requires content validation agains the schema.

Because request are handled **synchronously** at the functional level, a successfull POST request must be responded to with a `201 Created` status code. The standard HTTP response code `202 Accepted`, which indicates that the request is received but the resource is not created yet, is not allowed in this context.
