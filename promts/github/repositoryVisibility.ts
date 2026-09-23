import { select } from "@inquirer/prompts";

export const askRepositoryVisibility = () =>
  select<"public" | "private">({
    message: "GitHub repository visibility:",
    choices: [
      {
        name: "Private",
        value: "private",
      },
      {
        name: "Public",
        value: "public",
      },
    ],
    default: "private",
  });
