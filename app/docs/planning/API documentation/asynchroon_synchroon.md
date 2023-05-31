# Asynchronous or synchronous

During API exchange, two crucial levels come into play: the technical processing of schemas and the functional processing of content. Both levels are essential as they ensure effective validation and processing of both the technical and functional aspects of message exchange. Coordination of these processes guarantee consistency and reliability during data exchange.

### Technical processing of planning messages:

This level involves the validation and processing of data schemas. It includes tasks such as validating incoming data against a schema or transforming data to meet the required schema. Typically, this level is handled synchronously.

### Functional processing of content:

This level encompasses the processing of data based, and validating whether the received content about planning information can be realised. It involves analyzing, validating, and processing the received content, as well as performing the associated actions. For example, checking if a planning request can be fulfilled or not. Similar to the technical processing of schemas, this level is also typically handled synchronously.

The synchronous nature of these levels ensures that data validation and functional logic are handled in a direct and consistent manner, with the client receiving in reasonable time feedback on the status or results of the operations. The HTTP response 202 cannot be used for the exchange of planning messages as it refers to an asynchronous process. While the HTTP response 201 or 200 indicates that the message has been approved both technically and functionally.

- 202 verbieden
- FAQ --> arno
