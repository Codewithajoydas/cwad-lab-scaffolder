# Professional Node.js CLI Template

A production-oriented TypeScript CLI foundation for the CWAD scaffolder.

## Stack

- Node.js
- TypeScript
- Commander
- Inquirer
- Chalk
- Ora
- Zod
- Vitest
- ESLint
- Prettier

## Architecture

```text
src/
├── commands/        # CLI commands
├── config/          # CLI configuration
├── services/        # Business logic
├── utils/           # Output and reusable helpers
├── validators/      # Input validation
└── index.ts         # CLI entrypoint

tests/
└── cli.test.ts
```

## Development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Run compiled CLI:

```bash
npm start
```

## Test

```bash
npm test
```

## Link CLI locally

After building:

```bash
npm link
```

Then:

```bash
cwad-cli --help
cwad-cli hello
cwad-cli hello Ajoy
```

Remove the local link:

```bash
npm unlink -g cwad-cli
```

## CLI examples

```bash
cwad-cli --help
cwad-cli --version
cwad-cli hello
cwad-cli hello Ajoy
```

The `hello` command demonstrates:

- Commander command registration
- positional arguments
- options
- validation
- colored output
- spinner/progress feedback

## Architecture principle

Commands should remain thin. Put actual application logic inside services and reusable utilities. This makes the CLI easier to test and allows commands to grow without turning `index.ts` into a large monolithic file.
