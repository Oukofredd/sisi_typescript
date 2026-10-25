
import type { Project, VoteChoice } from "./types.js";
import { formatKes } from "./format.js";
import { tallyVotes } from "./tally.js";
import { isProject, isVoteChoice } from "./guards.js";

const list = document.querySelector<HTMLUListElement>("#project-list");

if (!list) {
  throw new Error('participate.html needs <ul id="project-list">');
}

const votes = new Map<string, VoteChoice[]>();

function renderProject(project: Project): HTMLLIElement {
  const item = document.createElement("li");
  item.dataset.projectId = project.id;

  const heading = document.createElement("h3");
  heading.textContent = project.title;

  const details = document.createElement("p");
  details.textContent =
    `${project.ward} ward · ${formatKes(project.budgetKes)} · ${project.status}`;

  item.append(heading, details);

  if (project.status === "proposed") {
    const buttons = document.createElement("p");

    const choices: VoteChoice[] = ["yes", "no", "abstain"];

    for (const choice of choices) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.choice = choice;
      button.textContent = choice;
      buttons.append(button);
    }

    const result = document.createElement("output");
    result.textContent = "No votes yet.";

    item.append(buttons, result);
  }

  return item;
}

function recordVote(item: HTMLLIElement, choice: VoteChoice): void {
  const id = item.dataset.projectId;

  if (id === undefined) {
    return;
  }

  const cast = votes.get(id) ?? [];
  cast.push(choice);
  votes.set(id, cast);

  const totals = tallyVotes(cast);
  const output = item.querySelector("output");

  if (output) {
    output.textContent =
      `Yes ${totals.yes} · No ${totals.no} · Abstain ${totals.abstain}`;
  }
}

list.addEventListener("click", (event: MouseEvent) => {
  if (!(event.target instanceof HTMLButtonElement)) {
    return;
  }

  const choice = event.target.dataset.choice;
  const item = event.target.closest("li");

  if (item && isVoteChoice(choice)) {
    recordVote(item, choice);
  }
});

async function loadProjects(): Promise<Project[]> {
  const response = await fetch("data/projects.json");

  if (!response.ok) {
    throw new Error(`Could not load projects: HTTP ${response.status}`);
  }

  const raw: unknown = await response.json();

  if (!Array.isArray(raw)) {
    throw new Error("projects.json should contain a list");
  }

  return raw.filter(isProject);
}

loadProjects()
  .then((loaded) => {
    list.replaceChildren(...loaded.map(renderProject));

    if (loaded.length === 0) {
      list.textContent = "No valid projects are available.";
    }
  })
  .catch((error: unknown) => {
    list.textContent =
      error instanceof Error
        ? error.message
        : "Something went wrong.";
  });
