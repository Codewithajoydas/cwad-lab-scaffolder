# Empty Template

A deliberately minimal CWAD project foundation.

This template is for projects where the scaffolder should create the project directory, package metadata, source entry point, environment example, and documentation without imposing a framework or application architecture.

## Structure

```text
empty/
├── src/
│   └── index.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Setup

```bash
npm install
```

There are currently no external dependencies.

## Run

```bash
npm run dev
```

or:

```bash
npm start
```

Expected output:

```text
CWAD empty template is ready.
```

## Environment

Copy `.env.example` to `.env` when environment variables are needed.

This template intentionally does not include a dotenv dependency because an empty template should not force a runtime dependency before it is required.

## Why this template is intentionally minimal

Use this template when you want complete architectural freedom.

It does not include:

- Express
- React
- Next.js
- TypeScript
- Database clients
- Testing frameworks
- Linters
- Formatters
- Build tools

Add those technologies according to the actual project requirements.
