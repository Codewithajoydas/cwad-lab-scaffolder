# Node.js TypeScript Template

A professional Node.js + TypeScript starter for services, internal APIs, automation systems, workers with an HTTP surface, and backend applications that do not require a full framework.

## Why this template exists

This template gives you the structure and type safety of TypeScript while keeping the runtime layer close to native Node.js.

It intentionally uses `node:http` instead of Express, Fastify, or NestJS.

Included:

- Native Node.js HTTP server
- TypeScript with strict compiler settings
- ES modules with NodeNext
- Zod environment validation
- Pino structured logging
- Controller/service separation
- Centralized routing
- Graceful shutdown
- Vitest tests and coverage
- ESLint with TypeScript support
- Prettier
- `tsx` development runner
- Production build to `dist/`

## Requirements

- Node.js 24+ (LTS recommended)
- npm 11+

Node.js 24 is used as the stable runtime baseline for this template.

## Installation

```bash
npm install
```

Create the environment file:

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

Server:

```text
http://127.0.0.1:3000
```

## Production build

Compile TypeScript:

```bash
npm run build
```

Start the compiled application:

```bash
npm start
```

The compiled files are written to:

```text
dist/
```

## API

### GET /

Returns application information.

### GET /api/v1/health

Returns service health and uptime information.

Example:

```json
{
  "status": "ok",
  "service": "node-typescript",
  "timestamp": "2026-09-22T00:00:00.000Z",
  "uptime": 12.34
}
```

## Project structure

```text
node-typescript/
├── src/
│   ├── config/
│   │   ├── constants.ts
│   │   └── env.ts
│   ├── controllers/
│   │   ├── health.controller.ts
│   │   └── root.controller.ts
│   ├── http/
│   │   └── router.ts
│   ├── services/
│   │   └── health.service.ts
│   ├── utils/
│   │   └── logger.ts
│   ├── app.ts
│   └── server.ts
├── tests/
│   └── health.test.ts
├── .env.example
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vitest.config.ts
└── README.md
```

## Architecture

```text
server.ts
   |
   v
 app.ts
   |
   v
 router
   |
   +--> controller
           |
           v
        service
```

### `server.ts`

Owns process-level concerns:

- starting the server
- runtime configuration
- graceful shutdown

### `app.ts`

Creates the HTTP server and provides the request-level error boundary.

### `http/router.ts`

Maps HTTP methods and URLs to controllers.

### `controllers/`

Translate HTTP concerns into application calls and responses.

### `services/`

Contain application/business logic.

As the project grows, keep business rules out of controllers and routing.

### `config/`

Contains validated runtime configuration and constants.

### `utils/`

Contains cross-cutting utilities.

## TypeScript configuration

The template enables strict compiler behavior including:

- `strict`
- `noUncheckedIndexedAccess`
- `noImplicitOverride`
- `noImplicitReturns`
- `noUnusedLocals`
- `noUnusedParameters`
- `verbatimModuleSyntax`
- `NodeNext` module resolution

The goal is to make incorrect assumptions visible during development rather than at runtime.

## Environment configuration

Environment variables are validated at startup using Zod.

| Variable | Required | Default | Description |
|---|---|---|---|
| `NODE_ENV` | No | `development` | Runtime environment |
| `HOST` | No | `127.0.0.1` | HTTP bind address |
| `PORT` | No | `3000` | HTTP port |
| `LOG_LEVEL` | No | `info` | Pino log level |

Never commit real secrets to `.env`.

## Testing

Run tests:

```bash
npm test
```

Watch tests:

```bash
npm run test:watch
```

Generate coverage:

```bash
npm run test:coverage
```

## Type checking

```bash
npm run typecheck
```

## Linting and formatting

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Recommended development workflow

Before committing:

```bash
npm run typecheck
npm run lint
npm run format:check
npm test
npm run build
```

## When to use this template

Good fit for:

- lightweight HTTP services
- internal APIs
- webhooks
- automation services
- backend utilities
- small-to-medium Node.js services
- applications where TypeScript is valuable but a framework is unnecessary

If you need middleware ecosystems, advanced routing, authentication integrations, multipart handling, a large REST API, or extensive framework conventions, use the Express TypeScript template instead.

## Scaling the architecture

For a larger application, evolve toward feature/module boundaries instead of putting everything into global folders.

For example:

```text
src/
├── modules/
│   ├── users/
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.repository.ts
│   │   ├── users.schema.ts
│   │   └── users.routes.ts
│   └── billing/
├── integrations/
├── jobs/
└── infrastructure/
```

Do not introduce these layers until the application needs them.

## Adding infrastructure

This template deliberately does not include:

- PostgreSQL
- MongoDB
- Redis
- queues
- authentication
- cloud SDKs
- ORM
- OpenTelemetry

Those are application capabilities, not requirements of every Node.js service.

Add them according to actual requirements.

## Production considerations

Before production deployment, evaluate:

- reverse proxy/load balancer
- authentication and authorization
- input validation
- rate limiting
- request IDs/correlation IDs
- metrics and tracing
- structured log collection
- secrets management
- health/readiness semantics
- graceful shutdown timeout
- dependency auditing
- container/process supervision

The template provides a clean foundation rather than pretending every production system has identical requirements.

## License

Add the license appropriate for your project.
