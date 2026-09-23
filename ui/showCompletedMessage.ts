import { logger as log } from "@/utils/log/logger.js";

export const showCompletedMessage = (
  targetPath: string,
  projectName: string,
  projectType: string,
) => {
  console.log("");
  log.success("Project generated successfully");
  log.info(`Project: ${projectName}`);
  log.info(`Type: ${projectType}`);
  log.info(`Location: ${targetPath}`);
  console.log();
  log.info("Next steps:");
  if (projectName !== ".") {
    log.step(`cd ${projectName}`);
  }
  log.step("npm run dev");
  console.log();
};
