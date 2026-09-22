# Professional Express + TypeScript Backend Template

Production-oriented Express foundation for the CWAD scaffolder.

## Stack

- Node.js
- TypeScript
- Express 5
- ESM
- Helmet
- CORS
- Express Rate Limit
- Compression
- Pino structured logging
- Zod configuration validation
- Vitest + Supertest
- ESLint + Prettier

## Architecture

```text
src/
├── config/
│   └── env.ts
├── controllers/
│   └── health.controller.ts
├── middlewares/
│   ├── errorHandler.ts
│   └── notFound.ts
├── routes/
│   ├── health.routes.ts
│   └── index.ts
├── services/
│   └── health.service.ts
├── utils/
│   └── logger.ts
├── app.ts
└── server.ts

tests/
└── health.test.ts
```

## Quick start

```bash
npm install
```

Create the environment file:

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

Build:

```bash
npm run build
```

Production:

```bash
npm start
```

## API

```text
GET /
GET /api/v1/health
```

Health response:

```json
{
  "status": "ok",
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

## Quality checks

```bash
npm run typecheck
npm run lint
npm run format:check
npm test
npm run build
```

## Environment

```env
NODE_ENV=development
PORT=4000
CORS_ORIGIN=http://localhost:5173
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
LOG_LEVEL=info
```

## Design principle

This template provides the common professional Express + TypeScript foundation. Database, authentication, Redis, queues, storage and other project-specific capabilities should be composed by the scaffolder only when selected or required.
