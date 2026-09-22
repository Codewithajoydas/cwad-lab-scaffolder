# Professional Next.js + TypeScript Template

A production-oriented Next.js App Router foundation for the CWAD scaffolder.

## Stack

- Next.js 16
- React 19
- TypeScript
- App Router
- Server Components by default
- Route Handler example
- Zod
- Vitest
- ESLint
- Prettier

The template uses the current Next.js 16.3.5 and React 19.3.0 package releases at generation time. citeturn1search3turn1search0

## Architecture

```text
src/
├── app/
│   ├── api/
│   │   └── health/
│   │       └── route.ts
│   ├── dashboard/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       └── StatusCard.tsx
├── config/
│   └── env.ts
├── lib/
│   └── utils.ts
└── types/
    └── api.ts

tests/
└── smoke.test.ts
```

## Run

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production

```bash
npm run build
npm start
```

## Quality

```bash
npm run typecheck
npm run lint
npm run format:check
npm test
```

## Included boilerplate

The generated app includes:

- Server-rendered homepage
- Dashboard route
- Loading UI
- Error boundary
- Not-found page
- Health API route
- Typed API response
- Zod environment validation
- Shared UI component
- Global styling
- Basic test setup

Health endpoint:

```text
GET /api/health
```

Response:

```json
{
  "status": "ok",
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

## Environment

Create `.env.local` from `.env.example`.

```env
NEXT_PUBLIC_APP_NAME=CWAD Next App
```

## Architecture principle

Next.js provides both UI and server capabilities. Keep server-only data access, secrets and business logic on the server; use Client Components only where browser interactivity is required.

Project-specific capabilities such as authentication, ORM/database, Redis, payments, object storage and background jobs should be composed by the scaffolder according to requirements rather than included in every generated application.
