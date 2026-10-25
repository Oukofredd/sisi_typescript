import type { County, Project } from "./types.js";
export const kiambu: County = {
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
export const projects: Project[] = [
{
id: "JUJ-001",
title: "Street lights along Gachororo Road",
ward: "Juja",
budgetKes: 4_500_000,
status: "approved",
closesOn: "2026-10-31",
},
{
id: "JUJ-002",
title: "Borehole at the Juja Farm market",
ward: "Juja",
budgetKes: 2_800_000,
status: "approved",
},
{
id: "WIT-001",
title: "Early childhood classroom block",
ward: "Witeithie",
budgetKes: 6_200_000,
status: "in-progress",
},
];


// pending fails because we did not declare it on our "status"
// shown.phone because we did not declare property phone on PublicResident, which is an Omit of Resident
