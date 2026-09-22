import { describe, expect, it } from "vitest";
import { createGreeting } from "../src/services/hello.service.js";
import { validateName } from "../src/validators/name.js";

describe("CLI services", () => {
  it("creates a greeting", () => {
    expect(createGreeting("Ajoy")).toContain("Ajoy");
  });

  it("accepts a valid CLI name", () => {
    expect(validateName("my-project")).toBe("my-project");
  });

  it("rejects an invalid CLI name", () => {
    expect(() => validateName("bad name!")).toThrow();
  });
});