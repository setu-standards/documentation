
# Sending SETU Messages via [Peppol](https://peppol.org/)

SETU standards define the _content_ and structure of messages for the temporary staffing industry in the Netherlands. While SETU specifies _what_ information is exchanged, it is possible to use the international Peppol network for the actual _transport_ of these messages, alongside other existing methods. Peppol (Pan-European Public Procurement Online) provides a standardized, secure way for organizations to exchange electronic business documents using a 'four-corner model' involving certified Access Points (APs).

## SETU and Peppol

Through agreements between SETU and the [Dutch Peppol Authority](https://www.peppolautoriteit.nl/) (NPa), standard SETU XML messages can now be sent using the Peppol network infrastructure.

To enable this, specific **Document Type Identifiers** are registered within the Peppol network for the various SETU message types. These identifiers are crucial for the **identification and processing** of the messages within the network. They ensure that the receiving system recognizes the type of SETU message and can process its content accordingly. **The image below provides an example overview of the Document Type Identifiers assigned to SETU messages. For the complete, authoritative list, please refer to the official [Peppol Codelists](https://docs.peppol.eu/edelivery/codelists/) page mentioned below.**  

<br/>

![](../../static/img/peppol%20document%20types.png)

These identifiers are registered in the receiver's Service Metadata Publisher (SMP), which acts as an address book within Peppol. The SMP lists which document types an organization can receive and via which Access Point. When a message is sent, the sending AP queries the central Service Metadata Locator (SML) and then the receiver's SMP to verify that the recipient can handle the specific SETU message type and to determine the correct delivery endpoint (the receiver's AP).

## How to Use SETU via Peppol

To send or receive SETU messages via the Peppol network:

1. **Connect to a Peppol Access Point Provider:** Your organization needs a connection to the Peppol network via a certified Peppol Access Point (AP) provider. You can find a list of providers operating in the Netherlands via the NPa website. While technically possible, implementing your own AP is significantly more complex.
2. **Use the Correct Document Type Identifiers:** Ensure that your software and/or your Access Point provider are configured to use the correct, officially registered Document Type Identifiers for the specific SETU messages you intend to exchange. This Document Type Identifier should be included within the Peppol envelope when sending the message. The complete, authoritative list of all official Peppol Document Type Identifiers (including those for SETU) is maintained on the [official Peppol Codelists page](https://docs.peppol.eu/edelivery/codelists/).
3. **Agree with Business Partners:** Coordinate with your business partners to confirm that you will be exchanging SETU messages using the Peppol network.

## Support

- For questions regarding the **content, structure, or business rules** of the SETU messages themselves, please consult the [SETU documentation](https://standard.setu.nl/docs/) or contact the [SETU Helpdesk](mailto:helpdesk@setu.nl).
- For questions concerning the **operation of the Peppol network**, connectivity, Access Points, SML/SMP lookups, or other Peppol-specific technical details, please refer to the documentation provided by the [Dutch Peppol Authority (NPa)](https://peppolautoriteit.nl/) or contact your chosen Access Point provider.
