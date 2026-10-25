import type { VoteChoice } from "./types.js";
export function tallyVotes(votes: VoteChoice[]): Record<VoteChoice, number> {
const totals: Record<VoteChoice, number> = { yes: 0, no: 0, abstain: 0 };
for (const vote of votes) {
totals[vote] += 1;
}
return totals;
}
export function firstMatch<T>(items: T[], test: (item: T) => boolean): T | undefined {
for (const item of items) {
if (test(item)) {
return item;
}
}
return undefined;
}