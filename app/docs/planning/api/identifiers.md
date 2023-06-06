# Handling identifiers

This documentation page takes into account the following identifiers:

- A new universally unique identifier (UUID) for modifying existing planning messages
- The included document id in the planning message (i.e., requestBody) itself
- The identifier to refer to a specific line in a particular planning message

## New UUID for modifying planning message via API endpoint:

How do we make changes to an existing document or resource that has been posted to an API endpoint? When you send your message or document to an API endpoint using the POST method, we have chosen that you will receive a newly generated UUID along with the orginal document in the response message. This UUID is provided by the party that integrated the API endpoint.

This ID allows the integrating party to associate your document or resource with its own system. Afterwards, the newly communicated ID can be utilized by the creator of the document or resource to reference the recently created resource and retrieve relevant information by making a GET request. Furthermore, the ID can also be used by the creator to modify or delete their created resources using methods such as PUT, DELETE, or even a POST of a planningline.

How to integrate and provide a new UUID with POST method? Please refer this [section](#how-to-integrate-and-provide-a-new-uuid-with-post-method)

## Document ID in the requestBody:

By providing the document ID in the request body, you are indicating to the API endpoint which document or resource you are referring to from your point of view. It helps the receiver of the message to identify the exact item that needs to be posted, updated, or even deleted. For example, a planning request may result in a planning assignment that includes a reference to this planning request by using the same unique identifier which is included in the planning request itself under the element 'document id ref'. As a result, they are interconnected, and in this case, the planningsystem is aware that any changes made to that planning request can potentially impact a planning assignment.

## Line ID in the requestBody

In each planning resource, it is possible to include multiple planninglines. In the case of a PlanningRequest, these can be periodic planning requests or single requests, while in the PlanningConstraint message, the lines are about the constraints and availability of a human resource. Each of these lines has its own identifier specified in the message itself under the 'planning line id' element. This container element allows you to provide the ID of the planning line and the organization that issues that identifier.

This identifier is used to refer to the specific line, which can also be used to make HTTP calls. The identifiers can be used to perform POST, PUT, DELETE, or GET operations at the line level of a particular planning resource. This is possible because the lines are contained within a message, and by using the newly received UUID, the receiver can identify which message and the corresponding lines are being referred to.

## How to integrate and provide a new UUID with POST method?

This section provides some explanatory text about how to provide a UUID (Universally Unique Identifier) in the response to the requester of your API endpoint:

- Generate a UUID: You can use a UUID library or function provided by your programming language or framework to generate a UUID.
- Include the UUID in the API response: Once you have generated the UUID, you should include the UUID in the **‘Location’** headers of your API response. Within the headers section, the **Location** header is defined with a description and a schema. The schema specifies that the header value should be of type string. In the API specifications, the example field provides an example value for the Location header, which is in this case /planning/request/123. You can replace this example with the appropriate return ID for your API.

```yaml
paths:
  /planning/request:
    post:

    ...

      responses:
        '201':
          description: Resource created successfully
          content:
            application/xml:
              schema:
                $ref: '#/components/schemas/planning-request'
            application/json:
              schema:
                $ref: '#/components/schemas/planning-request'
          headers:
            Location:
              description: ID of the newly created resource
              schema:
                type: string
              example: /planning/request/123
```

All in all, in case of a POST method, the Location header should be included in the response with the ID for accessing and modifying the newly created resource.