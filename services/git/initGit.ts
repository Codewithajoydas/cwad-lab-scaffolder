import { spawn } from "node:child_process";

export function initialiseGit(targetPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn("git", ["init"], {
      cwd: targetPath,
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
          `git init failed with exit code ${exitCode}`,
        ),
      );
    });
  });
}