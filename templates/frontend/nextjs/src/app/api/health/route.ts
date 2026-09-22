import type { HealthResponse } from "@/types/api";

export function GET(): Response {
  const body: HealthResponse = {
    status: "ok",
    timestamp: new Date().toISOString(),
  };

  return Response.json(body);
}