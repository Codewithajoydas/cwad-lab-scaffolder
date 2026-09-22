import { Command } from "commander";
import { confirm, input } from "@inquirer/prompts";
import ora from "ora";

import { createGreeting } from "../services/hello.service.js";
import { error, success } from "../utils/output.js";
import { validateName } from "../validators/name.js";

export function registerHelloCommand(program: Command) {
  program
    .command("hello [name]")
    .description("Run the template verification command")
    .option("-i, --interactive", "Prompt for the name interactively")
    .action(async (name: string | undefined, options: { interactive?: boolean }) => {
      try {
        let targetName = name;

        if (options.interactive || !targetName) {
          targetName = await input({
            message: "What is your name?",
            default: "Developer",
          });
        }

        const validatedName = validateName(targetName);

        const shouldRun = await confirm({
          message: `Run greeting for "${validatedName}"?`,
          default: true,
        });

        if (!shouldRun) {
          return;
        }

        const spinner = ora("Running CLI verification...").start();

        await new Promise((resolve) => setTimeout(resolve, 400));

        spinner.stop();
        success(createGreeting(validatedName));
      } catch (err) {
        error(err instanceof Error ? err.message : "Command failed");
        process.exitCode = 1;
      }
    });
}