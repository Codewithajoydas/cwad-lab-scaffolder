# npm Library Template

A professional TypeScript starter for building, testing, packaging, and publishing reusable JavaScript/TypeScript libraries to npm.

The template is intentionally small at runtime: it has no runtime dependencies and focuses on a clean public API, generated declaration files, tests, package exports, and a safe publishing workflow.

## Requirements

- Node.js 24+ (LTS recommended)
- npm 11+

## Installation

```bash
npm install
```

## Development

Run TypeScript in watch mode:

```bash
npm run dev
```

Run type checking:

```bash
npm run typecheck
```

## Build

```bash
npm run build
```

The generated package is placed in:

```text
dist/
├── index.js
├── index.d.ts
├── index.js.map
└── ...
```

## Test

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

## Lint and format

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Verify the npm package

Before publishing, inspect exactly what npm will package:

```bash
npm run pack:check
```

To create a local tarball:

```bash
npm run pack
```

This creates an `.tgz` package that can be installed into another project for local verification.

## Publishing

Authenticate with npm:

```bash
npm login
```

Then publish:

```bash
npm publish
```

For a scoped public package:

```bash
npm publish --access public
```

The `prepublishOnly` script automatically runs:

1. clean
2. typecheck
3. tests
4. build
5. package dry-run

This prevents publishing when the package cannot pass its basic quality gates.

## Project structure

```text
npm-library/
├── src/
│   ├── greeting.ts
│   └── index.ts
├── tests/
│   └── greeting.test.ts
├── .npmignore
├── .prettierrc
├── eslint.config.js
├── LICENSE
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
└── vitest.config.ts
```

## Public API

The package exposes its public API through:

```text
src/index.ts
```

Current example:

```ts
import { createGreeting } from '@cwad/npm-library';

const message = createGreeting({
  name: 'Ajoy',
});

console.log(message);
```

Output:

```text
Hello, Ajoy!
```

The important design rule is:

> Only export APIs from `src/index.ts` that you intentionally want consumers to depend on.

Internal modules should not become accidental public APIs.

## Package metadata

The template configures:

- ESM package format
- `main`
- `module`
- `types`
- `exports`
- published file allowlist
- Node.js engine requirement
- package version
- MIT license

The `exports` map intentionally exposes only the package root:

```json
{
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.js"
  }
}
```

As the library grows, add explicit subpath exports rather than exposing the entire source tree.

Example:

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    },
    "./validators": {
      "types": "./dist/validators/index.d.ts",
      "import": "./dist/validators/index.js"
    }
  }
}
```

## Library architecture

For a small package:

```text
src/
├── index.ts
├── feature-a.ts
└── feature-b.ts
```

For a larger library:

```text
src/
├── index.ts
├── core/
├── features/
│   ├── feature-a/
│   │   ├── index.ts
│   │   ├── types.ts
│   │   └── implementation.ts
│   └── feature-b/
├── utilities/
└── types/
```

Keep `index.ts` as the public API boundary.

## API stability

Once a package is published and other projects depend on it, exported APIs become contracts.

Before changing an exported function, type, class, or behavior, consider:

- backward compatibility
- semantic versioning
- deprecation strategy
- migration documentation
- generated declaration changes
- runtime behavior changes

## Versioning

Use semantic versioning:

```text
MAJOR.MINOR.PATCH
```

Typical interpretation:

```text
MAJOR  breaking API changes
MINOR  backward-compatible features
PATCH  backward-compatible fixes
```

Example:

```bash
npm version patch
npm version minor
npm version major
```

Review the generated version commit/tag behavior before using these commands in an automated release workflow.

## Recommended release workflow

For a production package:

```text
Implement
   |
   v
Typecheck
   |
   v
Test
   |
   v
Build
   |
   v
Pack inspection
   |
   v
Local consumer test
   |
   v
Publish
   |
   v
Tag release
```

Do not rely only on `npm test`. A library can have passing tests while still publishing the wrong files or broken declaration metadata.

## Local consumer verification

After:

```bash
npm run pack
```

install the generated tarball in a temporary consumer project:

```bash
npm install ../path/to/package.tgz
```

Then verify both runtime imports and TypeScript types.

## CI recommendations

For a real public package, add CI checks for:

- supported Node.js versions
- type checking
- linting
- tests
- build
- package contents
- consumer installation
- release workflow

Publishing should normally happen only from a controlled release workflow.

## Runtime dependencies

This template has no runtime dependencies.

If the library needs a dependency, decide whether it belongs in:

- `dependencies` — required by consumers at runtime
- `peerDependencies` — consumer is expected to provide it
- `optionalDependencies` — runtime dependency that may be unavailable
- `devDependencies` — development/build/test only

Avoid placing runtime dependencies in `devDependencies`.

## What this template deliberately does not include

It does not force:

- tsup
- Rollup
- Vite
- Babel
- Changesets
- semantic-release
- documentation generators
- monorepo tooling
- runtime dependencies

A library should use a build tool when its distribution requirements justify one.

This baseline uses TypeScript directly because it keeps the publishing model easy to understand.

## License

The template includes an MIT license. Replace the copyright holder information before publishing.
