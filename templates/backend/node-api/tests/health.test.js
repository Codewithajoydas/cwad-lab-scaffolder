import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";

let app;

beforeAll(() => {
  app = createApp();
});

afterAll(() => {
  app.close();
});

describe("Node API", () => {
  it("returns a healthy response", async () => {
    const response = await request(app).get("/api/v1/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.timestamp).toEqual(expect.any(String));
  });

  it("returns 404 for an unknown route", async () => {
    const response = await request(app).get("/api/v1/unknown");

    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe("NOT_FOUND");
  });

  it("returns the API status from the root route", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("running");
  });
});