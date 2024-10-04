# API Documentation 

The following pages include the API documentation to implement the SETU Standards for `Purchase to Pay` and for ``Planning & Scheduling``. The API documentation consist of an Open API Specifications, multiple sequence diagrams to better understand how the API endpoints in different systems work together, and additional documentation about handling API request. 

The following REST API calls are used in the SETU API specifications to create, retrieve, update, and delete SETU messages: 

- **POST**: The POST method is used to send a new message to the API server. It creates a new message, and the server processes and returns the details of the newly created message.
- **GET**: The GET method is used to retrieve a message from the API server. It fetches a specific message or a list of messages without modifying them.
- **PUT**: The PUT method is used to update an existing message. It modifies the entire message or replaces it with new content.
    - *Note*: a PUT request is not expected to include all optional elements. Meaning, if you omit an optional element, it will not be overwritten in the database.
- **DELETE**: The DELETE method is used to remove a message from the API server. Once successfully processed, the message will no longer be available.
