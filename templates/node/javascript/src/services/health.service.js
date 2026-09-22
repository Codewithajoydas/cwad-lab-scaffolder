export function getHealth() {
  return {
    status: 'ok',
    service: 'node-javascript',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  };
}
