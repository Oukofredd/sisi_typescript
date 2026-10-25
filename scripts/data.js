export const kiambu = {
    code: 22,
    name: "Kiambu",
    wards: [
        { name: "Juja", constituency: "Juja" },
        { name: "Witeithie", constituency: "Juja" },
        { name: "Kalimoni", constituency: "Juja" },
        { name: "Murera", constituency: "Juja" },
        { name: "Theta", constituency: "Juja" },
    ],
};
export const projects = [
    {
        id: "JUJ-001",
        title: "Street lights along Gachororo Road",
        ward: "Juja",
        budgetKes: 4500000,
        status: "approved",
        closesOn: "2026-10-31",
    },
    {
        id: "JUJ-002",
        title: "Borehole at the Juja Farm market",
        ward: "Juja",
        budgetKes: 2800000,
        status: "approved",
    },
    {
        id: "WIT-001",
        title: "Early childhood classroom block",
        ward: "Witeithie",
        budgetKes: 6200000,
        status: "in-progress",
    },
];
// pending fails because we did not declare it on our "status"
// shown.phone because we did not declare property phone on PublicResident, which is an Omit of Resident
