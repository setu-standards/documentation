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
          link: {type: 'doc', id: 'purchase-to-pay-v2/UsageNotes/README'},
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
          label: "Scenario 1",
          collapsed: true,
          link: {type: 'doc', id: 'planning/Scenario 1/Readme'},
          items: [
            "planning/Scenario 1/StaffingSupplier", "planning/Scenario 1/StaffingCustomer_and_StaffingSupplier", 
          ],
        }, 
        {
          type: "category",
          label: "Scenario 2",
          collapsed: true,
          link: {type: 'doc', id: 'planning/Scenario 2/Readme'},
          items: [
            "planning/Scenario 2/StaffingSupplier_and_StaffingCustomer", 
          ],
        },
        {
          type: "category",
          label: "API documentation",
          collapsed: true,
          items: [
            'planning/api/oas',
            'planning/api/synchronous',
            'planning/api/identifiers',
            'planning/api/response-codes',
          ],
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
        "planning/FAQ"
      ],
    },
  ],
};
