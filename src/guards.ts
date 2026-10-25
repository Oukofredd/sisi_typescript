const CHOICES: readonly VoteChoice[] = ["yes", "no", "abstain"];
export function isVoteChoice(value: unknown): value is VoteChoice {
return typeof value === "string" && (CHOICES as readonly string[]).includes(value);
}

import type { Project, ProjectStatus, VoteChoice } from "./types.js";
const STATUSES: readonly ProjectStatus[] = ["proposed", "approved", "in-progress", "completed"];
export function isProjectStatus(value: unknown): value is ProjectStatus {
return typeof value === "string" && (STATUSES as readonly string[]).includes(value);
}
export function isProject(value: unknown): value is Project {
if (typeof value !== "object" || value === null) {
return false;
}
const p = value as Record<string, unknown>;
return (
typeof p.id === "string" &&
typeof p.title === "string" &&
typeof p.ward === "string" &&
typeof p.budgetKes === "number" &&
isProjectStatus(p.status) &&
(p.closesOn === undefined || typeof p.closesOn === "string")
);
}