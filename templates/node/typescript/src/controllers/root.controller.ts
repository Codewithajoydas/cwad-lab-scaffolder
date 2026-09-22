import type { IncomingMessage, ServerResponse } from 'node:http';

export function rootController(
  _req: IncomingMessage,
  res: ServerResponse,
): void {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(
    JSON.stringify({
      name: 'node-typescript',
      message: 'Node.js TypeScript application is running.',
    }),
  );
}
