module.exports = {
  docs: [
    "README",
    {
      type: "category",
      label: "Purchase to Pay v2.0",
      collapsed: false,
      link: {type: 'doc', id: 'purchase-to-pay-v2/README'},
      items: [
        {
          type: "category",
          label: "Public consultation",
          collapsed: true,
          link: {type: 'doc', id: 'purchase-to-pay-v2/Public-publication'},
          items: [
            "purchase-to-pay-v2/review-public", 
          ],
        },
        {
          type: 'doc',
          label: "Ordering & Selection and Assignment",
          id: 'purchase-to-pay-v2/OrderingSelection',
        },
        {
          type: 'doc',
          label: "Reporting Time and Expenses (Timecard)",
          id: 'purchase-to-pay-v2/Timecard',
        },
        {
          type: "doc",
          label: "Sequence diagrams",
          id: "purchase-to-pay-v2/SequenceDiagrams",
        },
        {
          type: "category",
          label: "Usage notes",
          collapsed: true,
          items: [
            "purchase-to-pay-v2/usage-notes/Identifiers-overview", 
          ],
        }
      ]
    },
    {
      type: "category",
      label: "Planning and Scheduling v1.0",
      collapsed: false,
      link: {type: 'doc', id: 'planning/README'},
      items: [
        {
          type: "doc",
          label: "Scenario 1",
          id: 'planning/scenario-1',
        },
        {
          type: "doc",
          label: "Scenario 2",
          id: 'planning/scenario-2',
        },
        {
          type: "category",
          label: "Sequence diagrams",
          collapsed: true,
          items: [
            "planning/sequence-diagrams/StaffingSupplier",
            "planning/sequence-diagrams/StaffingCustomer_and_StaffingSupplier",
            "planning/sequence-diagrams/StaffingSupplier_and_StaffingCustomer",
          ],
        },
        {
          type: "category",
          label: "Usage notes",
          collapsed: true,
          link: {type: 'doc', id: 'planning/usage-notes/Readme'},
          items: [
            'planning/usage-notes/memo-planningrequest',
            'planning/usage-notes/soap-webservices-documentatie',
            'planning/usage-notes/examples',
          ],
        },
        {
          type: 'doc',
          label: "Change log",
          id: 'planning/changelog',
        },
        "planning/FAQ",
      ],
    },
    {
      type: "category",
      label: "API documentation",
      collapsed: false,
      link: {type: 'doc', id: 'api/README'},
      items: [
        {
          type: 'doc', 
          label: "OAS Purchase to Pay",
          id: 'api/oas-purchase-to-pay',
        },
        {
          type: 'doc',
          label: "OAS Planning and Schedulling",
          id: 'api/oas-planning',
        },
        {
          type: "category",
          label: "Usage notes",
          collapsed: true,
          items: [
            'api/usage-notes/synchronous',
            'api/usage-notes/identifiers',
            'api/usage-notes/response-codes',
            'api/usage-notes/attachment',
          ], 
        }
      ],
    },
  ],
};
