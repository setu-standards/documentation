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
        "planning/api", 
        {
          type: "category",
          label: "API Message Exchange",
          collapsed: true,
          link: {type: 'doc', id: 'planning/API documentation/readme'},
          items: [
            {
              type: 'category',
              label: "Handling Identifiers",
              collapsed: true, 
              link: {type: 'doc', id: 'planning/API documentation/identifiers'},
              items: ["planning/API documentation/example"],
            }, "planning/API documentation/asynchroon_synchroon", 
          ],
        },
        "planning/Standardised response codes",
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
