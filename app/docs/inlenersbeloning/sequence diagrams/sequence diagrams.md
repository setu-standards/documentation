# Sequence diagrams

:::caution DISCLAIMER
The SETU Standard for Inlenersbeloning v1.0 is currently under review.

The public consultation period runs from 7 April till 2 May 2025. See [this page](./../public-consultation.md) for more information.

Some documentation in this section is a draft and subject to change. Feedback and suggestions are welcome to help refine and finalize these documents.
:::

The page contains several sequence diagrams illustrating the communication between the backoffice systems of a staffing supplier and a staffing customer and a CAO service provider for exchanging the SETU Inlenersbeloning message

### Sending Inlenersbeloning: Staffing Supplier to Staffing Customer

The staffing supplier can request the inlenersbeloning from the staffing customer when necessary. This is currently out-of-scope, but might be done by sending a `POST /inlenersbeloning/request*` to the staffing customer. Upon receiving the request, the staffing customer processes it and returns the relevant inlenersbeloning data, typically with a `POST /inlenersbeloning/{ID}` response. The ID serves as the resource identifier, which the API client assigns to the requested resource. This identifier can be passed as a query parameter in the path of the POST request. It enables the API client to perform GET, PUT, and DELETE operations on the resource later. For more information, read [here](../../api/usage-notes/identifiers.md)

```mermaid
sequenceDiagram
    participant Supplier as Backoffice <br/> Staffing Supplier
    participant Customer as Backoffice <br/> Staffing Customer
    

    Note over Supplier,Customer: To request an inlenersbeloning, the staffing supplier sends <br/> an inlenersbeloning request to the staffing customer.
    Supplier ->>+ Customer: POST /inlenersbeloning/request
    
    Note over Supplier,Customer: In response, the staffing customer sends <br/> the inlenersbeloning to the staffing supplier.
    Customer ->>+ Supplier: POST /inlenersbeloning/{ID}
    Supplier ->>- Customer: 201 + requestBody + /inlenersbeloning/{ID}  
```

<figcaption align = "left">Diagram 1 - Inlenersbeloning process between the staffing customer and the staffing supplier.</figcaption>

<br/>

:::info Inlenersbeloning request*
These inlenersbeloning request API calls are currently out of scope. The inlenersbeloning API request is not comparable to the request (uitvraag) made by CAO service providers. This request concerns the trigger for sending the equal pay data.
:::



### Updating Inlenersbeloning: Staffing Supplier to Staffing Customer

The staffing customer may need to update the inlenersbeloning when there is a change in the remuneration or other relevant information.See below in the details panel how the sequence diagram looks.

<details>
<summary><strong>Updating an exiting inlenersbeloning</strong></summary>

The staffing customer may need to update the inlenersbeloning when there is a change in the remuneration or other relevant information. This is initiated when the staffing customer sends a `PUT /inlenersbeloning/{ID}` to the staffing supplier, which includes the updated information. The staffing supplier receives this update and processes it accordingly. It responses with a `200 and a the updated request body` 

```mermaid
sequenceDiagram
    participant Supplier as Backoffice <br/> Staffing Supplier
    participant Customer as Backoffice <br/> Staffing Customer
    

    Note over Supplier,Customer: This change can be initiated by either <br/> the staffing customer or the staffing supplier.
    
    Note over Supplier,Customer: The staffing customer updates <br/> the inlenersbeloning for the staffing supplier with a PUT request.
    Customer ->>+ Supplier: PUT /inlenersbeloning/{ID}
    Supplier ->>- Customer: 200 + requestBody 
```

<figcaption align = "left">Diagram 2 - Inlenersbeloning process between the staffing customer and the staffing supplier.</figcaption>

</details>

### Getting Inlenersbeloning: Staffing Supplier to Staffing Customer

The staffing supplier can request the inlenersbeloning from the staffing customer when necessary. This might be done by sending a `GET /inlenersbeloning/{ID}` to the staffing customer. Upon receiving the request, the staffing customer processes it and returns the relevant inlenersbeloning data, typically with a 200 OK response. 

<details>
<summary><strong>Getting an inlenersbeloning</strong></summary>


```mermaid
sequenceDiagram
    participant Supplier as Backoffice <br/> Staffing Supplier
    participant Customer as Backoffice <br/> Staffing Customer
    
    Note over Supplier,Customer: To request an inlenersbeloning, the staffing supplier sends <br/> a GET request to the staffing customer.
    Supplier ->>+ Customer: GET /inlenersbeloning/{ID}
    
    Note over Supplier,Customer: In response, the staffing customer sends <br/> the inlenersbeloning to the staffing supplier.
    Customer ->>+ Supplier: 200 + responseBody
    Supplier ->>- Customer: 200 OK
```
<figcaption align = "left">Diagram 3 - Inlenersbeloning process between the staffing customer and the staffing supplier.</figcaption>

</details>

### Staffing Supplier to CAO Service Provider

The exchanges with the CAO service provider follow the same process. Below, in the various detail panels, you can also find the sequence diagrams for this.


<details>
<summary><strong>Sending an inlenersbeloning</strong></summary>

```mermaid
sequenceDiagram
    participant Supplier as Backoffice <br/> Staffing Supplier
    participant Customer as Backoffice <br/> CAO Service Provider
    

    Note over Supplier,Customer: To request an inlenersbeloning, the staffing supplier sends <br/> an inlenersbeloning request to the CAO service provider.
    Supplier ->>+ Customer: POST /inlenersbeloning/request
    
    Note over Supplier,Customer: In response, the CAO service provider sends <br/> the inlenersbeloning to the staffing supplier.
    Customer ->>+ Supplier: POST /inlenersbeloning/{ID}
    Supplier ->>- Customer: 201 + requestBody + /inlenersbeloning/{ID}  
```

<figcaption align = "left">Diagram 4 - Inlenersbeloning process between the CAO service provider and the staffing supplier.</figcaption>

</details>


<details>
<summary><strong>Updating an exiting inlenersbeloning</strong></summary>

The CAO service provider may need to update the inlenersbeloning when there is a change in the remuneration or other relevant information. This is initiated when the CAO service provider sends a `PUT /inlenersbeloning/{ID}` to the staffing supplier, which includes the updated information. The staffing supplier receives this update and processes it accordingly. It responses with a `200 and a the updated request body` 

```mermaid
sequenceDiagram
    participant Supplier as Backoffice <br/> Staffing Supplier
    participant Customer as Backoffice <br/> CAO Service Provider
    

    Note over Supplier,Customer: This change can be initiated by either <br/> the CAO service provider or the staffing supplier.
    
    Note over Supplier,Customer: The CAO service provider updates <br/> the inlenersbeloning for the staffing supplier with a PUT request.
    Customer ->>+ Supplier: PUT /inlenersbeloning/{ID}
    Supplier ->>- Customer: 200 + requestBody 
```

<figcaption align = "left">Diagram 5 - Inlenersbeloning process between the CAO service provider and the staffing supplier.</figcaption>

</details>