import { input } from "@inquirer/prompts";

export const askProjectName = () =>
  input({
    message: "Project name:",
    default: "my_new_project",
    pattern: /^[a-z0-9-._]+$/,
    patternError: "Please enter a valid project name.",
  });
