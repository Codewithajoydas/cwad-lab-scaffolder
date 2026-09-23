import { SetupGitOptions } from "@/types/SetupGitOptions.js";
import { logger } from "@/utils/log/logger.js";
import { spawn } from "node:child_process";

function runCommand(
  command: string,
  args: string[],
  cwd: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: "inherit",
    });

    child.on("error", (error) => {
      reject(error);
    });

    child.on("close", (exitCode) => {
      if (exitCode === 0) {
        resolve();
        return;
      }

      reject(
        new Error(
          `${command} ${args.join(" ")} failed with exit code ${exitCode}`,
        ),
      );
    });
  });
}

export async function setupGit({
  targetPath,
  repositoryName,
  visibility,
}: SetupGitOptions): Promise<void> {
  await runCommand("git", ["init"], targetPath);
  logger.success("Git initialized");
  await runCommand("git", ["add", "."], targetPath);
  logger.success("Git added");
  await runCommand("git", ["commit", "-m", "Initial commit"], targetPath);
  logger.success("Git committed: \'Initial commit\'");
  await runCommand(
    "gh",
    [
      "repo",
      "create",
      repositoryName,
      `--${visibility}`,
      "--source=.",
      "--remote=origin",
      "--push",
    ],
    targetPath,
  );
  logger.success(
    `GitHub repository created: ${repositoryName}, visibility: ${visibility} and pushed`,
  );
}
