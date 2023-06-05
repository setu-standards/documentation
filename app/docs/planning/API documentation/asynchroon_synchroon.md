# Asynchronous or synchronous process

During API exchange, three crucial levels come into play:

- the technical processing of schemas
- the functional processing of content
- the generating functional responses.

The first two levels are essential as they ensure effective validation and processing of both the technical and functional aspects of message exchange. The third process relates to identifying which resource needs to be posted, updated or even deleted depending on the incoming API call. On this page, we will briefly discuss how the SETU standard for planning and scheduling deals with the above processes. Consensus on these processes ensures consistent and reliable data exchange.

### Technical processing of planning messages:

This level involves the validation and processing of data schemas. It includes tasks such as validating incoming data against a schema or transforming data to meet the required schema. Typically, this level is handled synchronously.

### Functional processing of content:

This level encompasses the processing of data based, and validating whether the received content about planning information can be realised. It involves analyzing, validating, and processing the received content, as well as performing the associated actions. For example, checking if a planning request can be fulfilled or not. Similar to the technical processing of schemas, this level is also typically handled synchronously.

The synchronous nature of these levels ensures that data validation and functional logic are handled in a direct and consistent manner, with the client receiving in reasonable time feedback on the status or results of the operations. The HTTP response 202 cannot be used for the exchange of planning messages as it refers to an asynchronous process. While the HTTP response 201 or 200 indicates that the message has been approved both technically and functionally.

### Generating a functional responses:

This process focuses on the functional response to an incoming API call. It involves determining whether a particular API call affects an existing resource. This also entails identifying the resource that needs to be posted, updated, or even deleted. These actions are performed by the receiving party of the API call. For example, as a response to a planning request, the receiving party may need to send a planning assignment back. Another scenario is when a planning request is modified, which might require the receiving party to update and send an existing planning assignment as a response. Within the SETU standard for planning and scheduling, it is not expected to receive an immediate functional response. Therefore, this process is typically asynchronous by default.

### Overview

| Process                                                                                                                                                 | Asynchrous or synchronous |
| :------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------ |
| **Technical processing of planning messages:** the validation and processing of data schemas                                                            | Synchronous               |
| **Functional processing of content:** processing of data based, and validating whether the received content about planning information can be realised. | Synchronous               |
| **Generating functional responses:** a functional response to an API call                                                                               | Asynchrous                |

**Remark**: The HTTP response 201 or 200 relates to the first two process, indicating that the message has been approved both technically and functionally.
