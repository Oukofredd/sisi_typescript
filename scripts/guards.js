const CHOICES = ["yes", "no", "abstain"];
export function isVoteChoice(value) {
    return typeof value === "string" && CHOICES.includes(value);
}
const STATUSES = ["proposed", "approved", "in-progress", "completed"];
export function isProjectStatus(value) {
    return typeof value === "string" && STATUSES.includes(value);
}
export function isProject(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const p = value;
    return (typeof p.id === "string" &&
        typeof p.title === "string" &&
        typeof p.ward === "string" &&
        typeof p.budgetKes === "number" &&
        isProjectStatus(p.status) &&
        (p.closesOn === undefined || typeof p.closesOn === "string"));
}
