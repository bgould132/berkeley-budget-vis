var len, i;

var revenuesList = [
    "Real Property Tax", "Property Transfer Tax", "Unsecured Property", "Sales Tax", "Business License", "Hotel Tax", "Utility Users Tax", "Auto. In-Lieu", "Parking Fines", "Moving Violations", "Interest", "Service Fees", "Other Revenues", "Special Revenue Funds", "Enterprise Funds", "Gas / Sales Tax Street Improvement Funds", "Bond Funds", "Debt Service Funds", "Grant Funds", "Internal Service Funds", "Other Restricted Funds"
];

var expensesList = [
    "Mayor & Council", "Auditor", "Police Review Commission", "City Manager", "Office of Economic Development", "Information Technology", "City Attorney", "City Clerk", "Finance", "Human Resources", "Health, Housing & Community Services", "Police", "Fire", "Public Works", "Parks, Recreation & Waterfront", "Planning", "Community Agencies", "Library", "Rent Board", "Non-Departmental"
];

var sankeyNodesList = [
    "Real Property Tax", "Property Transfer Tax", "Unsecured Property", "Sales Tax", "Business License", "Hotel Tax", "Utility Users Tax", "Auto. In-Lieu", "Parking Fines", "Moving Violations", "Interest", "Service Fees", "Other Revenues", "Special Revenue Funds", "Enterprise Funds", "Gas / Sales Tax Street Improvement Funds", "Bond Funds", "Debt Service Funds", "Grant Funds", "Internal Service Funds", "Other Restricted Funds", "Mayor & Council", "Auditor", "Police Review Commission", "City Manager", "Office of Economic Development", "Information Technology", "City Attorney", "City Clerk", "Finance", "Human Resources", "Health, Housing & Community Services", "Police", "Fire", "Public Works", "Parks, Recreation & Waterfront", "Planning", "Community Agencies", "Library", "Rent Board", "Non-Departmental", "General Fund Revenues", "General Fund Expenditures", "Restricted Fund Revenues", "Restricted Fund Expenditures"
]

var sankey = {};
sankey.nodes = [];

len = sankeyNodesList.length;

for(i = 0; i < len; i++) {
    sankey.nodes[i] = {
        "node": i,
        "name": sankeyNodesList[i]
    }
}

console.log(sankey.nodes);

sankey.links = [];




/*
{
    "nodes":[
        {"node":0,"name":"node0"},
        {"node":1,"name":"node1"},
        {"node":2,"name":"node2"},
        {"node":3,"name":"node3"},
        {"node":4,"name":"node4"}
    ],
    "links":[
        {"source":0,"target":2,"value":2},
        {"source":1,"target":2,"value":2},
        {"source":1,"target":3,"value":2},
        {"source":0,"target":4,"value":2},
        {"source":2,"target":3,"value":2},
        {"source":2,"target":4,"value":2},
        {"source":3,"target":4,"value":4}
    ]
}
*/