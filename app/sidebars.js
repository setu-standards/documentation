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
          type: 'doc',
          label: "Ordering & Selection",
          id: 'purchase-to-pay-v2/OrderingSelection',
        },
        {
          type: 'doc',
          label: "Reporting Time and Expenses",
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
            "purchase-to-pay-v2/UsageNotes/Identifiers-overview", 
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
          type: "category",
          label: "Scenarios",
          collapsed: true,
          items: [, 
                  {
            type: "doc",
            label: "Scenario 1",
            id: 'planning/Scenario 1/Readme',
          }, 
          {
            type: "doc",
            label: "Scenario 2",
            id: 'planning/Scenario 2/Readme',
          },
        ],
        },
        {
          type: "category",
          label: "Sequence diagrams",
          collapsed: true,
          items: [
            "planning/Scenario 1/StaffingSupplier",
            "planning/Scenario 1/StaffingCustomer_and_StaffingSupplier",
            "planning/Scenario 2/StaffingSupplier_and_StaffingCustomer",
          ],
        },
        {
          type: "category",
          label: "Usage notes",
          collapsed: true,
          link: {type: 'doc', id: 'planning/usageNotes/Readme'},
          items: [
            'planning/usageNotes/memo-planningrequest',
            'planning/usageNotes/soap-webservices-documentatie',
            'planning/usageNotes/examples',
          ],
        },
        {
          type: "category",
          label: "Change log",
          collapsed: true,
          link: {type: 'doc', id: 'planning/Change log/Readme'},
          items: ['planning/Change log/changelog v0.9 - v1.0'], 
        },
      ],
    },
    {
      type: "category",
      label: "API documentation",
      collapsed: false,
      link: {type: 'doc', id: 'API Specification/README'},
      items: [
        {
          type: 'doc', 
          label: "OAS Purchase to Pay",
          id: 'API Specification/oas-purchase-to-pay',
        },
        {
          type: 'doc',
          label: "OAS Planning and Schedulling",
          id: 'API Specification/oas-planning',
        },
        {
          type: "category",
          label: "Usage notes",
          collapsed: true,
          items: [
            'API Specification/usage-notes/synchronous',
            'API Specification/usage-notes/identifiers',
            'API Specification/usage-notes/response-codes',
          ], 
        }
      ],
    },
    "FAQ",
     ],
};
