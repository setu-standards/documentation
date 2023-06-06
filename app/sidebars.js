module.exports = {
  docs: [
    "README",
    {
      type: "category",
      label: "Planning and Scheduling v1.0 DRAFT",
      collapsed: false,
      link: {type: 'doc', id: 'planning/README'},
      items: [
        {
          type: 'doc',
          id: 'planning/public-consultation',
          label: "Public consultation",
        }, 
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
          link: {
            type: 'doc',
            id: 'planning/api/readme',
          },
          items: [
            'planning/api/oas',
            'planning/api/synchronous',
            'planning/api/identifiers',
            'planning/api/response-codes',
            'planning/api/examples',
          ],
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
