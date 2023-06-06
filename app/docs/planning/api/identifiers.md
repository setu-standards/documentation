# Handling identifiers

For the exchange of planning messages, multiple identifiers come into play. In this documentation page, we will go through the IDs and specify their functions. The following ID are taken into account:

1. A resource identifier for the (request) messages assigned by the API server for planning constraints, planning requests and planning assignments
2. The included document id in the message body itself
3. A identifier to refer to a specific line in a particular message

## 1. Resource identifiers
When a new request is made (e.g. `POST /planning/request`) the API server assigns a new identifier to the created resource. Typically this is a UUID. This resource identifier is how the API server knows the resource and is different from the document id in the message body itself assigned by the API client.

The resource identifier is returned in the API response as part of the response header `Location`. E.g.
```
HTTP/1.1 201 Created
Location: /planning/request/c93efb20-1acd-447b-87e7-fadb108d8a0e
```

This allows the API client to perform GET, PUT and DELETE calls on this resource at a later stage according to the [API specification](oas.mdx)

## 2. Document identifier in the request message
The planning messages also have a document identifier. This identifier is how the API client knows the request. Any identifier format can be used as long as it is unique within the scope of the issuing party (e.g. the staffing customer)

```xml
<PlanningRequest>
  <documentId>
    <value>46f7b984e63</value>
    <schemeAgencyId>Customer</schemeAgencyId>
  </documentId>
  ...
</PlanningRequest>
```

This document id is important for the business process, because it is refered to by other messages. E.g. a planning assignment has a referens to a planning request identifier that it fulfills.

```xml
<PlanningAssignment>
  <documentId>
    <value>2b7e1be8ccf</value>
    <schemeAgencyId>Customer</schemeAgencyId>
  </documentId>
  ...
  <planningRequestReference>
    <documentId>
      <value>46f7b984e63</value> <!-- Reference to the planning request in the example above -->
      <schemeAgencyId>Customer</schemeAgencyId>
    </documentId>
  </planningRequestReference>
  ...
</PlanningAssignment>
```

## 3. Line identifiers in the request message

In all planning messages it is possible to specify multiple lines. In the case of a planning request these are periodic vs single planning request lines; for the planning constraint message, the lines are about the periodic vs single availability of a human resource. Each of these lines has its own identifier specified in the message itself  provided by the `line id` element. E.g.:

```xml
<periodicAvailabilityLine>
    <lineId>
      <value>1</value>
      <schemeAgencyId>Customer</schemeAgencyId>
    </lineId>
    ...
<periodicAvailabilityLine>
<periodicAvailabilityLine>
    <lineId>
      <value>2</value>
      <schemeAgencyId>Customer</schemeAgencyId>
    </lineId>
    ...
<periodicAvailabilityLine>
```

The line identifiers need to be unique within the scope of the message. Therefore it is allowed to number them sequentially starting with '1', but using a UUID or other identifier format is also allowed.

**NOTE** that the line identifiers are also used as part of certain REST api paths. They are combined with the resource identifier as specified in the [section above](#1-resource-identifiers). E.g. `PUT /planning/requests/c93efb20-1acd-447b-87e7-fadb108d8a0e/lines/2` to update information about line 2 in the created planning request.
