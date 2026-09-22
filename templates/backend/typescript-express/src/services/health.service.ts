export type HealthResponse = {
  status: "ok";
  timestamp: string;
};

export function getHealth(): HealthResponse {
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
  };
}