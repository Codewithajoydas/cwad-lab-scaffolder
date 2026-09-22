import { spawn } from "node:child_process";

export function addGitFiles(targetPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn("git", ["add", "."], {
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
          `git add failed with exit code ${exitCode}`,
        ),
      );
    });
  });
}