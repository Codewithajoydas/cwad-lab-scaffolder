# CWAD Lab Scaffolder

A TypeScript CLI for generating projects from reusable templates.

## Installation

### Using npx

Run the scaffolder without installing it globally:-

```bash
npx cwad-lab-scaffolder
```

### Global installation

Install the package globally:

```bash
npm install -g cwad-lab-scaffolder
```

Then run:

```bash
cwad-lab-scaffolder
```

## Usage

Run the CLI:

```bash
cwad-lab-scaffolder
```

The package exposes the CLI through the `cwad-lab-scaffolder` command.

The CLI entry point is:

```text
index.ts
  ↓
core/generate.core.ts
```

The project uses a template-based generation system. The templates are included in the published npm package.

## Project Name Validation

Project names are validated before generation.

The current validation rules are:

* Minimum length: `1`
* Maximum length: `50`
* Empty names are rejected
* Allowed characters:

  * `a-z`
  * `A-Z`
  * `0-9`
  * `_`
  * `.`

The validation is implemented with Zod.

Examples of valid names:

```text
my-project
my_project
my.project
project123
```

The current validator does not allow `-`, despite it being a common project-name character.

## Template System

Project templates are distributed with the npm package.

The package configuration explicitly includes:

```text
dist/
templates/
README.md
LICENSE
```

in the published package contents.

This allows the CLI to access its templates after installation.

## Git Integration

The project contains Git-related functionality as part of the scaffolding workflow.

Git setup is handled by the project's source code rather than being manually implemented by each generated template.

## Dependency Installation

The scaffolder contains functionality for installing dependencies for generated projects.

This allows dependency installation to be handled as part of the project-generation process.

## CLI Options

The CLI provides standard command-line functionality through Commander.

For the currently supported command-line interface, use:

```bash
cwad-lab-scaffolder --help
```

## Development

Clone the repository:

```bash
git clone https://github.com/Codewithajoydas/cwad-lab-scaffolder.git
```

Move into the project:

```bash
cd cwad-lab-scaffolder
```

Install dependencies:

```bash
npm install
```

### Development mode

Run the TypeScript entry point with:

```bash
npm run dev
```

The `dev` script uses `tsx` to execute the TypeScript entry point.

### Build

Build the TypeScript project:

```bash
npm run build
```

The build script is:

```text
tsc -p tsconfig.json && tsc-alias
```

### Run the built CLI

After building:

```bash
npm start
```

The package's `start` script executes:

```text
node dist/index.js
```

## Project Structure

The current repository is organized into the following main areas:

```text
cwad-lab-scaffolder/
├── commands/
├── core/
├── promts/
├── services/
├── templates/
├── types/
├── ui/
├── utils/
├── validator/
├── index.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── LICENSE
```

### `core/`

Contains the core scaffolding flow.

The root `index.ts` delegates execution to:

```text
core/generate.core.ts
```

### `commands/`

Contains command-oriented operations used by the scaffolding process.

### `services/`

Contains service-level functionality used by the application.

### `templates/`

Contains the reusable project templates used by the scaffolder.

### `promts/`

Contains the prompt-related functionality used by the interactive CLI.

### `types/`

Contains TypeScript types used throughout the project.

### `ui/`

Contains terminal user-interface functionality.

### `utils/`

Contains reusable utility functionality.

### `validator/`

Contains input validation.

For example, project-name validation is implemented here using Zod.

## Technology Stack

### Runtime

* Node.js

### Language

* TypeScript

### CLI

* Commander
* `@inquirer/prompts`

### Validation

* Zod

### Terminal UI

* Chalk
* Ora
* Log Symbols

### Logging

* Pino
* Pino Pretty

### Development

* TypeScript
* TSX
* tsc-alias

These packages are defined in the current `package.json`.

## Package Information

| Property      | Value                 |
| ------------- | --------------------- |
| Package       | `cwad-lab-scaffolder` |
| Version       | `1.0.0`               |
| Language      | TypeScript            |
| Module system | ESM                   |
| License       | MIT                   |
| CLI command   | `cwad-lab-scaffolder` |
| Entry point   | `dist/index.js`       |

The package metadata is defined in `package.json`.

## npm Package

The package is published as:

```text
cwad-lab-scaffolder
```

Install it with:

```bash
npm install -g cwad-lab-scaffolder
```

or run it directly:

```bash
npx cwad-lab-scaffolder
```

## Repository

GitHub:

https://github.com/Codewithajoydas/cwad-lab-scaffolder

## Author

Ajoy Das

GitHub:

https://github.com/Codewithajoydas

## License

This project is licensed under the MIT License.

See the `LICENSE` file for the complete license text.
