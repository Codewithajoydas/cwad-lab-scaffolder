import { z } from "zod";

// Validate file names
export  const validateProjectName = z
  .string()
  .min(1)
  .max(50)
  .nonempty()
  .regex(/^[a-zA-Z0-9_.]+$/);
