# CWAD Lab Scaffold

A production-ready TypeScript CLI for generating reusable project scaffolds across APIs, web apps, mobile apps, desktop apps, and monorepos.

## Features

- Interactive project selection
- Project name validation and normalization
- API, web, mobile, desktop, and monorepo generators
- Dry-run support
- Dependency installation and Git initialization
- Type-safe central configuration
- Extensible generator pattern

## Quick start

```bash
npm install
npm run build
npm link
cwad-lab-scaffold
```

## Commands

```bash
cwad-lab-scaffold
cwad-lab-scaffold create api my-api
cwad-lab-scaffold create web my-web --web-variant next
cwad-lab-scaffold --dry-run
cwad-lab-scaffold --help
```

## Architecture

- `src/core` for configuration and validation
- `src/prompts` for interactive UX
- `src/generators` for project-specific generation
- `src/templates` for template rendering helpers
- `src/commands` for CLI execution and runner flow

## Testing

```bash
npm test
```
