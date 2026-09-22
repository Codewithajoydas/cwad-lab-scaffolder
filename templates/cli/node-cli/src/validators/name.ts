import { z } from "zod";

const nameSchema = z
  .string()
  .trim()
  .min(1, "Name is required")
  .max(50, "Name must be 50 characters or fewer")
  .regex(/^[a-zA-Z0-9._-]+$/, "Name contains invalid characters");

export function validateName(name: string) {
  return nameSchema.parse(name);
}