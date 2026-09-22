import { spawn } from "node:child_process";

export function commitGit(
  targetPath: string,
  message = "Initial commit",
): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(
      "git",
      ["commit", "-m", message],
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
          `git commit failed with exit code ${exitCode}`,
        ),
      );
    });
  });
}