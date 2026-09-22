#!/usr/bin/env node

import { Command } from "commander";
import { input, select, confirm } from "@inquirer/prompts";
import { ExitPromptError } from "@inquirer/core";
import ora from "ora";

import { validateProjectName } from "./validator/validateProjectName.js";
import { validateProjectType } from "./validator/validateProjectType.js";
import { templateNames } from "./utils/getTemplateNames.js";
import { generateProject } from "./generator/generateProject.js";
import { installDependencies } from "./cmd/installDependencies.js";
import { setupGit } from "./cmd/setupGit.js";
import { logger as log } from "./utils/log/logger.js";
import { showWelcomeMessage } from "./utils/showWelcomeMessage.js";

const program = new Command();

program
  .name("cwad-lab-scaffold")
  .description(
    "Professional project scaffolding CLI for modern apps, APIs, mobile, desktop, and monorepos.",
  )
  .version("1.0.0")
  .argument("[project-name]", "Name of the project")
  .argument("[project-type]", "Type of the project")
  .option("--install", "Install dependencies")
  .option("--no-install", "Skip dependency installation");

program.parse();

const [cliProjectName, cliProjectType] = program.args;
const options = program.opts();

async function main() {
  try {
    showWelcomeMessage();

    // --------------------------------------------------
    // Project name
    // --------------------------------------------------

    const projectName =
      cliProjectName ??
      (await input({
        message: "Project name:",
        default: "my-new-project",
      }));

    validateProjectName.parse(projectName);

    // --------------------------------------------------
    // Project type
    // --------------------------------------------------

    const projectType =
      cliProjectType ??
      (await select({
        message: "Project type:",
        choices: templateNames.map((templateName: string) => ({
          name: templateName,
          value: templateName,
        })),
        loop: false,
      }));

    validateProjectType.parse(projectType);

    // --------------------------------------------------
    // Generate project
    // --------------------------------------------------

    const { targetPath, success } = await generateProject(
      projectName,
      projectType as string,
    );

    if (!success) {
      throw new Error("Project generation failed");
    }

    // --------------------------------------------------
    // Install dependencies
    // --------------------------------------------------

    let shouldInstallDependencies: boolean;

    if (options.install !== undefined) {
      shouldInstallDependencies = options.install;
    } else {
      shouldInstallDependencies = await confirm({
        message: "Install dependencies?",
        default: true,
      });
    }

    if (shouldInstallDependencies) {
      const spinner = ora("Installing dependencies...").start();

      try {
        await installDependencies(targetPath);

        spinner.succeed("Dependencies installed successfully");
      } catch (error) {
        spinner.fail("Failed to install dependencies");
        throw error;
      }
    }

    // --------------------------------------------------
    // Git setup
    // --------------------------------------------------

    const shouldInitializeGit = await confirm({
      message: "Initialize Git and create GitHub repository?",
      default: true,
    });

    if (shouldInitializeGit) {
      const repositoryVisibility = await select<"public" | "private">({
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

      const spinner = ora(
        "Initializing Git and creating GitHub repository...",
      ).start();

      try {
        await setupGit({
          targetPath,
          repositoryName: projectName,
          visibility: repositoryVisibility,
        });

        spinner.succeed("Git repository created and pushed to GitHub");
      } catch (error) {
        spinner.fail("Failed to initialize Git or create GitHub repository");

        throw error;
      }
    }

    // --------------------------------------------------
    // Success
    // --------------------------------------------------

    console.log();

    log.success("Project generated successfully");

    log.info(`Project: ${projectName}`);

    log.info(`Type: ${projectType}`);

    log.info(`Location: ${targetPath}`);

    console.log();

    log.info("Next steps:");

    if (projectName !== ".") {
      log.step(`cd ${projectName}`);
    }

    log.step("npm start");

    console.log();
  } catch (error) {
    if (error instanceof ExitPromptError) {
      console.log();

      log.warn("Process interrupted. Exiting...");

      process.exit(0);
    }

    console.log();

    log.error("Failed to generate project");

    if (error instanceof Error) {
      log.error(error.message);
    }

    process.exit(1);
  }
}

main();
