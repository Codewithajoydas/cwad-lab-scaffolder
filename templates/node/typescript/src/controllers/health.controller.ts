import type { IncomingMessage, ServerResponse } from 'node:http';
import { getHealth } from '../services/health.service.js';

export function healthController(
  _req: IncomingMessage,
  res: ServerResponse,
): void {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(getHealth()));
}
