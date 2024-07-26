# Purchase to Pay v2.0

:::caution
The SETU Standard for Ordering & Selection, Assignment and Reporting Time & Expenses (Timecard) v2.0 are currently under review. The documentation in this section is a draft and subject to change.

We expect to release the final documentation at the end of 2024.
:::

## Introduction
The SETU specified multiple message specifications to exchange purchase to pay information in the flexible staffing industry. The 'Purchase to pay' standards with a 2.0 version are the:
 - **SETU Standard for Ordering and Selection** is used for matching a human resource to an open position. It deals with electronically sending ordering and selection related information, including updates. This standard consists of two message specifications:
    - **Staffing Order** is used by a staffing customer to request and order (an) employee(s) for an open position.
    - **Human Resource** is used by the staffing supplier to match a human resource to an open position.
 - **SETU Standard for Assignment** is used by a staffing supplier for confirming the placement of a worker on a position at the staffing customer.
 - **SETU Standard for Reporting Time & Expenses** is used by the staffing customer to report time recording and expense related information to the staffing supplier.

The 2.0 versions of these message specification will be released at the end of 2024, after the public consultation that will be performed for all message specifications around November 2024. During the public consultation interested parties are invited to review the delivered standard and provide review comments. Those responses are considered by the SETU, will be discussed with the working group and, where necessary, the draft version will be adjusted before final publication.

The standards can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/specifications). There you can also find example messages and validation artifacts in both XML and JSON. The REST API specifications are specified in this documentation.

## Development process and relation to HR Open standard
The new 2.0 versions of the 'Purchase to Pay' SETU standards are based on a standardized SETU language in which concepts and relationships with associated terminology and definitions are specified. This SETU language provides building blocks from which to compose messages. The SETU reuses the terminology and data definitions of the latest version 4.3 of the international [HR Open standard](https://www.hropenstandards.org/) as much as possible for its SETU language. Where necessary additional relationships have been established in the SETU language between existing HR Open concepts, or new concepts have been introduced. Definitions have also been improved and made more suitable for the Dutch context.

In addition to the reuse of HR Open v4.3, the insights gained from the development of the SETU Standard for Planning & Scheduling v1.0 have also been used. Where possible, concepts and definitions from that SETU standard have also been applied to the new versions of the 'Purchase to pay' messages to make the new set of SETU standards as uniform as possible. Open change requests from the 1.x versions of the SETU standards have also been processed during the development of this version 2.0 set of standards.

The standardized SETU language, or SETU ontology, is maintained in the [SETU GitHub](https://github.com/setu-standards/setu-ontology). The SETU ontology and additional constraints ontology can also be found as ontology specifications in [Semantic Treehouse](https://setu.semantic-treehouse.nl/specifications).