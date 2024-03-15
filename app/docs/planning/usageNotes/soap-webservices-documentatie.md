# Clarification SOAP

:::info
At this moment in time, the SETU will not develop SOAP specifications for Planning and Scheduling messages. Within the development of the SETU v2.0 standards, we will further address the issues regarding SOAP and REST APIs.



:::

The planning and scheduling messages can be exchanged via both SOAP and REST APIs. For REST APIs, [specifications](../api/oas.mdx) and [related documentation](../../api/) have been developed in collaboration with the working group. However, there has been no documentation so far about the exchange of SETU messages via SOAP web services.

In response to the [change request](https://setu.semantic-treehouse.nl/issue/ChangeRequest_c03692a9-3af4-4f0e-8879-f110bf1a5171), the SETU does recognizes the need for clarification regarding the Resource Identifier for SOAP web services, hence this temporary documentation.



## Handling changes in SOAP web services
With the various REST calls (POST, PUT, DELETE, GET) of the REST APIs, adjustments can easily be made to previously sent messages. However, SOAP web services do not have these standardized calls. To keep this as generic as possible, the SETU has defined [action codes](https://setu.semantic-treehouse.nl/message-model-tree/Message_ab110a9b-56e0-44d8-9120-c4c5afa0020d?showElems=Element_1fad0577-5ad4-4cce-b612-bd3e859f6811) in their standards. However, handling changes for previously sent messages to a SOAP API endpoint proves to be a challenge.

To make adjustments, the action codes defined in the message can be used. In this case, a label indicating whether it is a POST, DELETE, PUT, or GET can be provided. In practice, the message is resent with the processed changes and the corresponding label of the action code. This allows the receiving party to be aware of the changes made in the message.

In contrast to REST APIs, where a resource identifier is used, with SOAP services the entire message is sent again, including the documentID. This allows the receiving party to identify which previously sent message the changes apply to. This implies that the **documentID** can serve as the identifier for determining the earlier sent message.

## Example

The staffing supplier initially sends a planning assignment to the back-office of the staffing customer with an action code 'POST' and a document ID in the payload itself. The customer receives this message and responds a '200' status code and the same requestbody.

Later, when the supplier updates a line in the existing planning assignment, they resend the modified assignment with an action code 'PUT' and the same document ID. 

This sequence highlights that the action codes and adjustments are communicated within the message payload, and the same document ID is maintained for tracking purposes across requests.

```mermaid
sequenceDiagram
    participant Planning as Planning system <br/> staffing supplier
    participant Customer as Backoffice <br/> staffing customer
  

    Note over Customer,Planning: The staffing supplier has a planning assignment
    Planning ->>+ Customer: a planning assignment with action code 'POST' <br/> and documentID 'c04e7b6a-19b9'
    Customer ->>- Planning: 200 + requestBody


    Note over Customer,Planning: The staffing supplier updates one of the lines<br/>in the existing planning assignment
    Planning ->>+ Customer: The same planning assignment but with adjustments, <br/> and with action code 'PUT' and documentID 'c04e7b6a-19b9'
    Customer ->>- Planning: 200 + requestBody

    
```