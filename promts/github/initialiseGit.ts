import { confirm } from "@inquirer/prompts";

export const askInitialiseGit = () =>
  confirm({
    message: "Initialise git?",
    default: true,
    transformer: (value) => (value ? "Yes" : "No"),
  });
