import { cp, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { getTemplatePath } from "../utils/getTemplateNames.js";

const __dir = path.dirname(fileURLToPath(import.meta.url));

type GenerateProjectResult = {
  targetPath: string;
  success: boolean;
};

export const generateProject = async (
  projectName: string,
  projectType: string,
): Promise<GenerateProjectResult> => {

  const targetPath = path.resolve(process.cwd(), projectName);
  const isCurrentDirectory = targetPath === process.cwd();
  const packageName = path.basename(targetPath);
  const templatePath = path.join(
    __dir,
    "..",
    "..",
    "templates",
    getTemplatePath(projectType),
  );

  try {
    await cp(templatePath, targetPath, {
      recursive: true,
    });

    const packageJsonPath = path.join(targetPath, "package.json");

    try {
      const packageJsonContent = await readFile(
        packageJsonPath,
        "utf-8",
      );

      const packageJson = JSON.parse(packageJsonContent);
      packageJson.name = packageName;
      await writeFile(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2) + "\n",
        "utf-8",
      );
    } catch {
      // ignore
    }

    return {
      targetPath,
      success: true,
    };
  } catch {
    return {
      targetPath,
      success: false,
    };
  }
};