import { z } from "zod";
import {templateNames} from "../utils/template/getTemplateNames.js";

export const validateProjectType = z.enum([
  ...templateNames.map((templateName: string) => templateName),
]);
