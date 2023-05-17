module.exports = {
  docs: [
    "README",
    {
      type: "category",
      label: "Planning and Scheduling v0.9",
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
        "planning/api", 
        "planning/Standardised response codes",
        "planning/FAQ"
      ],
    },
  ],
};
