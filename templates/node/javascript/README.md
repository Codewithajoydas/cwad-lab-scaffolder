# Node.js JavaScript Template

A professional, lightweight Node.js JavaScript starter for services, workers, internal tools, automation systems, and APIs that do not need a framework.

## Why this template exists

This template intentionally uses Node.js built-ins instead of Express/Fastify/NestJS. It gives you a clean application boundary without forcing a framework into projects where native `node:http` is enough.

It includes:

- Native Node.js HTTP server
- ES modules
- Environment validation with Zod
- Structured logging with Pino
- Controller/service separation
- Centralized routing
- Graceful shutdown
- Automated tests with Vitest
- ESLint and Prettier
- Development watch mode
- Production-oriented configuration

## Requirements

- Node.js 24+ (LTS recommended)
- npm 11+

Node.js 24 is an LTS release line, while Node.js 26 is the current release line as of September 2026. This template targets Node.js 24+ for a stable runtime baseline.

## Installation

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

## Development

```bash
npm run dev
```

The server starts on:

```text
http://127.0.0.1:3000
```

## Production

```bash
npm start
```

## API

### GET /

Returns basic application information.

### GET /api/v1/health

Returns service health and uptime information.

Example:

```json
{
  "status": "ok",
  "service": "node-javascript",
  "timestamp": "2026-09-22T00:00:00.000Z",
  "uptime": 12.34
}
```

## Project structure

```text
node-javascript/
├── src/
│   ├── config/
│   │   ├── constants.js
│   │   └── env.js
│   ├── controllers/
│   │   ├── health.controller.js
│   │   └── root.controller.js
│   ├── http/
│   │   └── router.js
│   ├── services/
│   │   └── health.service.js
│   ├── utils/
│   │   └── logger.js
│   ├── app.js
│   └── server.js
├── tests/
│   └── health.test.js
├── .env.example
├── eslint.config.js
├── package.json
├── vitest.config.js
└── README.md
```

## Architecture

The template keeps the HTTP entry point separate from application logic:

```text
server.js
   |
   v
 app.js
   |
   v
 router
   |
   +--> controller
           |
           v
        service
```

### `server.js`

Owns process-level concerns:

- starting the HTTP server
- listening configuration
- shutdown signals

### `app.js`

Creates the HTTP server and protects the process boundary from uncaught request-handler errors.

### `http/router.js`

Maps HTTP method + URL to application controllers.

### `controllers/`

Translate HTTP requests into application calls and HTTP responses.

### `services/`

Contain business/application logic. Keep domain logic here rather than inside the HTTP router.

### `config/`

Contains validated runtime configuration and application constants.

### `utils/`

Contains cross-cutting utilities such as logging.

## Environment configuration

Environment variables are validated at startup with Zod.

| Variable | Required | Default | Description |
|---|---|---|---|
| `NODE_ENV` | No | `development` | Runtime environment |
| `HOST` | No | `127.0.0.1` | HTTP bind address |
| `PORT` | No | `3000` | HTTP port |
| `LOG_LEVEL` | No | `info` | Pino log level |

Do not commit `.env` files containing secrets.

## Testing

Run tests:

```bash
npm test
```

Watch tests:

```bash
npm run test:watch
```

Coverage:

```bash
npm run test:coverage
```

## Code quality

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## When to use this template

Use it for:

- lightweight HTTP APIs
- internal services
- webhooks
- automation servers
- background services with a small HTTP surface
- CLI-adjacent HTTP utilities
- prototypes that may later grow into a larger service

Do not use it merely because "Node.js" is involved. If you need middleware ecosystems, complex routing, authentication integrations, request validation middleware, or a large REST API, use the Express or TypeScript Express templates instead.

## Extending the template

For a real application, add capabilities as required:

```text
src/
├── modules/
│   ├── users/
│   ├── billing/
│   └── ...
├── repositories/
├── integrations/
├── jobs/
└── ...
```

Do not add databases, Redis, queues, authentication, or cloud SDKs until the application actually requires them.

## Production notes

Before deploying, consider:

- reverse proxy or load balancer
- process supervision/container orchestration
- structured log collection
- request correlation IDs
- rate limiting
- authentication and authorization
- input validation
- dependency auditing
- health/readiness semantics
- metrics and tracing
- graceful shutdown timeouts
- secrets management

This template provides the foundation, not every production capability.

## License

Add the license appropriate for your project.
