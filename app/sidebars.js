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
          label: "Ordering & Selection",
          collapsed: true,
          link: {type: 'doc', id: 'purchase-to-pay-v2/OrderingSelection/README'},
          items: [
            "purchase-to-pay-v2/OrderingSelection/Processes", 
          ],
        },
        {
          type: "category",
          label: "Timecard",
          collapsed: true,
          link: {type: 'doc', id: 'purchase-to-pay-v2/Timecard/README'},
          items: [
            "purchase-to-pay-v2/Timecard/Processes", 
          ],
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
          type: "doc",
          label: "Scenario 1",
          id: 'planning/Scenario 1/Readme',
        }, 
        {
          type: "doc",
          label: "Scenario 2",
          id: 'planning/Scenario 2/Readme',
        },
        {
          type: "category",
          label: "Usage notes",
          collapsed: true,
          link: {type: 'doc', id: 'planning/usageNotes/Readme'},
          items: ['planning/usageNotes/memo-planningrequest', 'planning/usageNotes/soap-webservices-documentatie'], 
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
          type: "category",
          label: "Purchase-to-pay: API Specification (OAS)",
          collapsed: true,       
          link: {type: 'doc', id: 'API Specification/purchase-to-pay/oas-purchase-to-pay' },   
          items: [
            {
              type: "category",
              label: "Sequence diagrams",
              collapsed: true,         
              items: [
                "API Specification/processes",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Planning and Schedulling: API Specification (OAS)",
          collapsed: true,         
          link: {type: 'doc', id: 'API Specification/planning-api/oas' },
          items: [
            {
              type: "category",
              label: "Sequence diagrams",
              collapsed: true,         
              items: [
                "planning/Scenario 1/StaffingSupplier", "planning/Scenario 1/StaffingCustomer_and_StaffingSupplier", "planning/Scenario 2/StaffingSupplier_and_StaffingCustomer", 
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Handling API requests",
          collapsed: true,
          items: ['API Specification/synchronous',
          'API Specification/identifiers',
          'API Specification/response-codes', ], 
        }
      ],
    },
    "FAQ",
     ],
};
