export type ProjectStatus = "proposed" | "approved" | "in-progress" | "completed";
export type VoteChoice = "yes" | "no" | "abstain";
export interface Ward {
name: string;
constituency: string;
}
export interface County {
code: number;
name: string;
wards: Ward[];
}
export interface Project {
readonly id: string;
title: string;
ward: string;
budgetKes: number;
status:ProjectStatus; // we'll tighten this in Lab 4
closesOn?: string;
}
export interface Resident {
fullName: string;
phone: string;
county: string;
ward: string;
consentGiven: boolean;
}
export type PublicResident= Omit<Resident, "phone">;

export type SisiNotice =
| { kind: "meeting"; ward: string; venue: string; date: string }
| { kind: "budget"; ward: string; amountKes: number }
| { kind: "vote-open"; projectId: string; closesOn: string }
| { kind: "result"; projectId: string; approved: boolean };
