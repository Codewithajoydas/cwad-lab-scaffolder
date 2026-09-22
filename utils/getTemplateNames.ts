import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fileContent = await fs.readFile(
  path.join(__dirname, "..","..", "templates", "templates", "manifest.json"),
  "utf-8",
);
export const templateNames = JSON.parse(fileContent)?.templates?.map(
  (template: any) => template.id,
);

export const getTemplatePath = (fileName: string): string => {
  var path = JSON.parse(fileContent)?.templates?.find(
    (template: any) => template.id === fileName,
  )?.path;
  return path;
};
