import type { IncomingMessage, ServerResponse } from 'node:http';
import { API_PREFIX } from '../config/constants.js';
import { healthController } from '../controllers/health.controller.js';
import { rootController } from '../controllers/root.controller.js';

export type RouteHandler = (
  req: IncomingMessage,
  res: ServerResponse,
) => void;

export function createRouter(): RouteHandler {
  return (req, res) => {
    const method = req.method ?? 'GET';
    const url = new URL(
      req.url ?? '/',
      `http://${req.headers.host ?? 'localhost'}`,
    );

    if (method === 'GET' && url.pathname === '/') {
      return rootController(req, res);
    }

    if (method === 'GET' && url.pathname === `${API_PREFIX}/health`) {
      return healthController(req, res);
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(
      JSON.stringify({
        error: {
          code: 'NOT_FOUND',
          message: 'Route not found.',
        },
      }),
    );
  };
}
