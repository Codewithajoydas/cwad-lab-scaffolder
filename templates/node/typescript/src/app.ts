import http from 'node:http';
import { createRouter } from './http/router.js';

export function createApp(): http.Server {
  const router = createRouter();

  return http.createServer((req, res) => {
    try {
      router(req, res);
    } catch (error) {
      console.error(error);

      if (!res.headersSent) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(
          JSON.stringify({
            error: {
              code: 'INTERNAL_SERVER_ERROR',
              message: 'Internal server error.',
            },
          }),
        );
      } else {
        res.destroy();
      }
    }
  });
}
