# Professional Node.js API Template

A lightweight, framework-free Node.js HTTP API foundation for the CWAD scaffolder.

This template is intentionally based on Node's built-in `node:http` module. It is useful when the project needs an API but does not need a full Express/Fastify/Nest abstraction.

## Stack

- Node.js
- Modern JavaScript / ESM
- Native `node:http`
- Zod
- Dotenv
- Pino
- Vitest
- Supertest
- ESLint
- Prettier

## Architecture

```text
src/
├── config/
│   └── env.js
├── controllers/
│   └── health.controller.js
├── http/
│   ├── request.js
│   └── response.js
├── routes/
│   └── index.js
├── services/
│   └── health.service.js
├── utils/
│   └── logger.js
├── app.js
└── server.js

tests/
└── health.test.js
```

## Run

```bash
npm install
```

Create `.env`:

```bash
copy .env.example .env
```

macOS/Linux:

```bash
cp .env.example .env
```

Development:

```bash
npm run dev
```

API:

```text
http://localhost:4000
```

Health endpoint:

```text
GET /api/v1/health
```

## Verification

```bash
npm run typecheck
```

This template is JavaScript-based, so there is no TypeScript typecheck command.

Use:

```bash
npm run lint
npm run format:check
npm test
```

## Response

```json
{
  "status": "ok",
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

## Why use this template?

Choose `node-api` when you want a small HTTP API with minimal framework overhead.

Choose `express-javascript` when you want middleware, routing, security middleware and the larger Express ecosystem preconfigured.

This template intentionally does not include a database, ORM, authentication, cache or framework-specific middleware. Those can be added by the scaffolder based on project requirements.
