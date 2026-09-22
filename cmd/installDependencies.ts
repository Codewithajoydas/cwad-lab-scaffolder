import { spawn } from "node:child_process";

export function installDependencies(targetPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn("npm.cmd", ["install"], {
      cwd: targetPath,
      stdio: "ignore",
      shell: true,
    });

    child.on("error", (error) => {
      reject(error);
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`npm install failed with exit code ${code}`));
      }
    });
  });
}