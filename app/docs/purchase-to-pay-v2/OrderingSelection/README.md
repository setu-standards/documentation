# Ordering & Selection and Assignment

:::caution
The SETU Standard for Ordering & Selection, Assignment and Reporting Time & Expenses (Timecard) v2.0 are currently under review. The documentation in this section is a draft and subject to change.

We expect to release the final documentation at the end of 2024.
:::

The SETU Standard for Ordering & Selection consists of two message specifications:
- **Staffing Order** is used by a staffing customer to request and order (an) employee(s) for an open position.
- **Human Resource** is used by the staffing supplier to match a human resource to an open position.

The **SETU Standard for Assignment** is used by a staffing supplier for confirming the placement of a worker on a position at the staffing customer.

The Staffing Order, Human Resource and Assignment versions 2.0 will be released at the end of 2024. The standard can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/specifications). There you can also find example messages and validation artifacts in both XML and JSON. The REST API specifications are specified in this documentation.

## Scope Ordering & Selection
The SETU Standard for Ordering and Selection is used for matching a human resource to an open position. It deals with electronically sending ordering and selection related information, including updates. The standard supports the exchange of ordering and selection information between two organizations; this implies that multi-party collaborations are out of scope.

This standard is intended for use only within the domain of human resourcing, and does not deal with, nor is intended to provide a general mechanism or design of the ordering and selection process, or a general purpose template for ordering and selection of a human resource outside this domain.

## Supported processes
The processes supported with the message are specified under [Supported processes](Processes).

## Mapping to Ordering & Selection v1.4 and Assignment v1.4
To compare Staffing Order v2.0, Human Resource v2.0 and Assignment v2.0 with their previous versions 1.4, you can view the [mapping at the treeview of Staffing Order v2.0](https://setu.semantic-treehouse.nl/message-model-tree/Message_8ce31bab-da16-4e48-aac7-c745b1080bb1?panes=element_tree:Message_8ce31bab-da16-4e48-aac7-c745b1080bb1:c7jkjc:primary,element_tree:Message_1597759721_00689072:l6vreo), the [mapping at the treeview of Human Resource v2.0](https://setu.semantic-treehouse.nl/message-model-tree/Message_da7a87ec-72c9-414e-8da0-e4f942eb1a7c?panes=element_tree:Message_da7a87ec-72c9-414e-8da0-e4f942eb1a7c:xmr7of:primary,element_tree:Message_1597760582_00768543:aqg138) and the [mapping at the treeview of Assignment v2.0](https://setu.semantic-treehouse.nl/message-model-tree/Message_fc07cc98-14b0-4e7c-a52b-3240baa46194?panes=element_tree:Message_fc07cc98-14b0-4e7c-a52b-3240baa46194:s6577g:primary,element_tree:Message_1595323786_00145985:dfnxew). When the mapping to v1.4 is selected (by clicking 'Add Specification' and the select the mapping provided), for each element in v2.0 a mapping is shown to one or multiple elements in v1.4, and vice versa. This gives users accelerated insight into how certain information has been included in the new message and thus facilitates the adoption of the new version of the standard.