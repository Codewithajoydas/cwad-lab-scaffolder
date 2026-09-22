import { spawn } from "node:child_process";

type RepositoryVisibility = "public" | "private";

type SetupGitOptions = {
  targetPath: string;
  repositoryName: string;
  visibility: RepositoryVisibility;
};

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

  await runCommand("git", ["add", "."], targetPath);

  await runCommand("git", ["commit", "-m", "Initial commit"], targetPath);

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
}
