import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createApp } from '../src/app.js';

let server: ReturnType<typeof createApp>;
let baseUrl: string;

beforeAll(async () => {
  server = createApp();

  await new Promise<void>((resolve) => {
    server.listen(0, '127.0.0.1', resolve);
  });

  const address = server.address();

  if (!address || typeof address === 'string') {
    throw new Error('Could not determine test server address.');
  }

  baseUrl = `http://127.0.0.1:${address.port}`;
});

afterAll(async () => {
  await new Promise<void>((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
});

describe('health endpoint', () => {
  it('returns service health', async () => {
    const response = await fetch(`${baseUrl}/api/v1/health`);
    const body = (await response.json()) as {
      status: string;
      service: string;
    };

    expect(response.status).toBe(200);
    expect(body.status).toBe('ok');
    expect(body.service).toBe('node-typescript');
  });

  it('returns 404 for unknown routes', async () => {
    const response = await fetch(`${baseUrl}/api/v1/unknown`);

    expect(response.status).toBe(404);
  });
});
