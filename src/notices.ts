import type { SisiNotice } from "./types.js";
import { formatKes } from "./format.js";
export function describeNotice(notice: SisiNotice): string {
switch (notice.kind) {
case "meeting":
return `Public meeting for ${notice.ward} ward at ${notice.venue} on ${notice.date}.`;
case "budget":
return `${notice.ward} ward has been allocated ${formatKes(notice.amountKes)}.`;
case "vote-open":
return `Voting on project ${notice.projectId} is open until ${notice.closesOn}.`;
case "result":
  return notice.approved
    ? `Project ${notice.projectId} has been approved.`
    : `Project ${notice.projectId} was not approved.`;

default: {
const unreachable: never = notice;
return unreachable;
}
}
}