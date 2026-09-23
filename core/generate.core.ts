import program from "@/commands/generate.js";
import { askInitialiseGit } from "@/promts/github/initialiseGit.js";
import { askRepositoryVisibility } from "@/promts/github/repositoryVisibility.js";
import { askInstallDependencies } from "@/promts/installDependencies.js";
import { askProjectName } from "@/promts/projectName.js";
import { askProjectType } from "@/promts/projectType.js";
import { projectGenerator } from "@/services/generators/project.generator.js";
import { installDependencies } from "@/services/packages/installDependencies.js";
import { setupGit } from "@/services/packages/setupGit.js";
import type { ProjectType } from "@/types/ProjectDetails.js";
import { showCompletedMessage } from "@/ui/showCompletedMessage.js";
import { showWelcomeMessage } from "@/ui/showWelcomeMessage.js";
import { logger as log } from "@/utils/log/logger.js";
import { validateProjectName } from "@/validator/validateProjectName.js";
import { validateProjectType } from "@/validator/validateProjectType.js";
import { ExitPromptError } from "@inquirer/core";
import ora from "ora";

const [cliProjectName, cliProjectType] = program.args;
const options = program.opts();

export async function generateProject(): Promise<void> {
  try {
    showWelcomeMessage();

    const projectName = cliProjectName ?? (await askProjectName());

    validateProjectName.parse(projectName);

    const projectType =
      (cliProjectType as ProjectType) ?? (await askProjectType());

    validateProjectType.parse(projectType);

    const { targetPath, success } = await projectGenerator({
      projectName,
      projectType,
    });

    if (!success) {
      throw new Error("Failed to generate project.");
    }

    const shouldInstallDependencies =
      options.install ?? (await askInstallDependencies());

    if (shouldInstallDependencies) {
      const spinner = ora("Installing dependencies...").start();

      try {
        await installDependencies(targetPath);
        spinner.succeed("Dependencies installed successfully.");
      } catch (error) {
        spinner.fail("Failed to install dependencies.");
        throw error;
      }
    }

    const shouldInitializeGit = await askInitialiseGit();

    if (shouldInitializeGit) {
      const repositoryVisibility = await askRepositoryVisibility();
      try {
        await setupGit({
          targetPath,
          repositoryName: projectName,
          visibility: repositoryVisibility,
        });
      } catch (error) {
        log.error("Failed to setup git.");
        throw error;
      }
    }

    showCompletedMessage(targetPath, projectName, projectType);
  } catch (error) {
    if (error instanceof ExitPromptError) {
      console.log();
      log.warn("Process interrupted. Exiting...");
      process.exit(0);
    }

    console.log();
    log.error("Failed to generate project.");

    if (error instanceof Error) {
      log.error(error.message);
    } else {
      log.error(String(error));
    }

    process.exit(1);
  }
}
