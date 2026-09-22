import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createApp } from '../src/app.js';

let server;
let baseUrl;

beforeAll(async () => {
  server = createApp();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  baseUrl = `http://127.0.0.1:${address.port}`;
});

afterAll(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

describe('health endpoint', () => {
  it('returns service health', async () => {
    const response = await fetch(`${baseUrl}/api/v1/health`);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.status).toBe('ok');
    expect(body.service).toBe('node-javascript');
  });

  it('returns 404 for unknown routes', async () => {
    const response = await fetch(`${baseUrl}/api/v1/unknown`);

    expect(response.status).toBe(404);
  });
});
