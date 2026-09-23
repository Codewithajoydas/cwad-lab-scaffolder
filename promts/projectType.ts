import { templateNames } from "@/utils/template/getTemplateNames.js";
import { select } from "@inquirer/prompts";

export const askProjectType = () =>
  select({
    message: "Project type:",
    choices: templateNames.map((templateName: string) => ({
      name: templateName,
      value: templateName,
    })),
    loop: false,
  });
