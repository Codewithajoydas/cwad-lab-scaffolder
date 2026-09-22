import { z } from "zod";
import {templateNames} from "../utils/getTemplateNames.js";

export const validateProjectType = z.enum([
  ...templateNames.map((templateName: string) => templateName),
]);
