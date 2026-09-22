export interface HealthStatus {
  status: 'ok';
  service: string;
  timestamp: string;
  uptime: number;
}

export function getHealth(): HealthStatus {
  return {
    status: 'ok',
    service: 'node-typescript',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  };
}
