# PUT behavior

A `PUT` request is not expected to include all optional elements. This means that if you omit an optional element from the payload, it will not be overwritten in the database.

Furthermore, some SETU APIs (such as Inquiry Pay Equity) use `PUT` for both creating and updating resources. When using `PUT` for creation, the client is responsible for assigning the resource identifier (UUID).
