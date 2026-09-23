import { spawn } from "node:child_process";

type RepositoryVisibility = "public" | "private";

export function createGitHubRepo(
  targetPath: string,
  repositoryName: string,
  visibility: RepositoryVisibility = "private",
): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(
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
      {
        cwd: targetPath,
        stdio: "inherit",
      },
    );

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
          `GitHub repository creation failed with exit code ${exitCode}`,
        ),
      );
    });
  });
}