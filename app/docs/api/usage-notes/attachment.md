# Attachments

In several SETU messages, like the Human Resource message and the TimeCard message, you can include an attachment as a URL. This endpoint allows you to send an embedded (base64) attachment via `PUT /attachment` to an API client and retrieve an URL as response. In response, the API returns a URL in the `Content-Location` header, which you can then reference in your SETU messages to link to the attachment you've sent to the API client. Example:

```
PUT /attachment/{id}
```

The URL is returned in the API response as part of the response header `Content-Location`:

```
HTTP/1.1 201 Created
Content-Location: https://www.example.org
```

You can then include the URL in the payload of another SETU message. For example, in a timecard message:

```
<allowance>
    <attachment>
        <url>https://www.example.org</url>
    </attachment>
</allowance>
```

