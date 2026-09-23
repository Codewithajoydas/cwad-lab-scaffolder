import { confirm } from "@inquirer/prompts";

export const askInstallDependencies = () =>
  confirm({
    message: "Install dependencies?",
    default: true,
  });
