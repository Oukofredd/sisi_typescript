export function tallyVotes(votes) {
    const totals = { yes: 0, no: 0, abstain: 0 };
    for (const vote of votes) {
        totals[vote] += 1;
    }
    return totals;
}
export function firstMatch(items, test) {
    for (const item of items) {
        if (test(item)) {
            return item;
        }
    }
    return undefined;
}
