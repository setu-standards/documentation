# Purchase to Pay v2.0

:::info DOCUMENTATION
The message models can be found in [Semantic Treehouse](https://setu.semantic-treehouse.nl/specifications). There you can also find example messages and validation artifacts in both XML and JSON.

The REST API specifications can be found here: [Purchase to Pay API specifications](../api/oas-purchase-to-pay)
:::

## Introduction
The SETU specified multiple message specifications to exchange purchase to pay information in the flexible staffing industry. The 'Purchase to pay' standards with a 2.0 version are the:
 - **SETU Standard for Ordering and Selection** is used for matching a human resource to an open position. It deals with electronically sending ordering and selection related information, including updates. This standard consists of two message specifications:
    - **Staffing Order** is used by a staffing customer to request and order (an) employee(s) for an open position.
    - **Human Resource** is used by the staffing supplier to match a human resource to an open position.
 - **SETU Standard for Assignment** is used by a staffing supplier for confirming the placement of a worker on a position at the staffing customer.
 - **SETU Standard for Reporting Time & Expenses** is used by the staffing customer to report time recording and expense related information to the staffing supplier.

## Relation to HR Open standard
The new 2.0 versions of the 'Purchase to Pay' SETU standards are based on a standardized SETU language in which concepts and relationships with associated terminology and definitions are specified. This SETU language provides building blocks from which to compose messages. The SETU reuses the terminology and data definitions of the latest version 4.3 of the international [HR Open standard](https://www.hropenstandards.org/) as much as possible for its SETU language. Where necessary additional relationships have been established in the SETU language between existing HR Open concepts, or new concepts have been introduced. Definitions have also been improved and made more suitable for the Dutch context.

In addition to the reuse of HR Open v4.3, the insights gained from the development of the SETU Standard for Planning & Scheduling v1.0 have also been used. Where possible, concepts and definitions from that SETU standard have also been applied to the new versions of the 'Purchase to pay' messages to make the new set of SETU standards as uniform as possible. Open change requests from the 1.x versions of the SETU standards have also been processed during the development of this version 2.0 set of standards.

## Public consultation
A public consultation was performed from 5 November 2024 to 5 December 2024.

Interested parties were invited to review the delivered standards and provide review comments. No responses were received. The final version is released on 17 December 2024.