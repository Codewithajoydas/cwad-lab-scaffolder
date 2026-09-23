# CWAD Lab Scaffolder

A professional TypeScript CLI for generating production-ready project structures from reusable templates.

CWAD Lab Scaffolder is designed to eliminate repetitive project setup. Instead of manually creating folders, configuring TypeScript, installing dependencies, initializing Git, and repeating the same boilerplate for every project, you can generate a standardized project with a single command.

---

## Features

* Interactive CLI experience
* Reusable project templates
* Project name validation
* Project type selection
* Template selection
* TypeScript-based implementation
* Dependency installation
* Automatic Git repository initialization
* Git remote configuration
* Public/private repository support
* Dry-run generation support
* Centralized configuration
* Type-safe project generation
* Modular generator architecture
* Extensible template system
* Structured logging
* CLI spinners and terminal feedback
* Zod-based validation
* Support for modern JavaScript/TypeScript projects

---

## Why CWAD Lab Scaffolder?

Starting a new project usually involves repeating the same work:

```text
Create directory
    ↓
Create package.json
    ↓
Create source directories
    ↓
Configure TypeScript
    ↓
Install dependencies
    ↓
Configure tooling
    ↓
Initialize Git
    ↓
Create Git repository
    ↓
Configure remote
    ↓
Start development
```

CWAD Lab Scaffolder turns that repetitive process into:

```bash
npx cwad-lab-scaffolder
```

Choose a template, provide the project name, and let the scaffolder handle the setup.

---

# Installation

## Using npm

Run the package directly with `npx`:

```bash
npx cwad-lab-scaffolder
```

This is the recommended way to use the CLI without installing it globally.

## Global installation

You can also install it globally:

```bash
npm install -g cwad-lab-scaffolder
```

Then run:

```bash
cwad-lab-scaffolder
```

---

# Quick Start

Run:

```bash
npx cwad-lab-scaffolder
```

The CLI will guide you through the project creation process.

A typical workflow looks like:

```text
CWAD LAB SCAFFOLDER

Project Type
    ↓
Template
    ↓
Project Name
    ↓
Generation
    ↓
Dependency Installation
    ↓
Git Initialization
    ↓
Git Repository Setup
    ↓
Project Ready
```

---

# Example

For example:

```bash
npx cwad-lab-scaffolder react_apps react-vite
```

The scaffolder generates the selected template in the requested location and prepares the project for development.

After generation:

```bash
cd my-project
npm run dev
```

The exact available commands depend on the generated template.

---

# Project Generation

CWAD Lab Scaffolder separates the concepts of:

* Project type
* Template
* Generator
* Template files
* Post-generation setup

This allows templates to evolve independently from the CLI itself.

A simplified generation flow is:

```text
CLI
 │
 ├── Validate project type
 │
 ├── Validate template
 │
 ├── Validate project name
 │
 ├── Load template
 │
 ├── Generate files
 │
 ├── Install dependencies
 │
 ├── Initialize Git
 │
 └── Configure repository
```

---

# Supported Project Categories

The scaffolder is designed to support multiple categories of applications.

Current project configuration includes templates for technologies such as:

* React
* Vite
* Next.js
* Express
* Node.js APIs
* Electron
* Expo
* Monorepos

The template collection is intended to grow over time.

---

# Templates

Templates are stored inside the repository's template system.

Conceptually:

```text
templates/
├── backend/
├── frontend/
├── mobile/
├── desktop/
└── monorepo/
```

Each template represents a reusable project starting point.

A template should contain everything required to create a consistent project:

```text
template/
├── package.json
├── src/
├── configuration/
├── scripts/
└── ...
```

The goal is to keep generated projects standardized while allowing individual templates to have their own tooling and dependencies.

---

# Git Integration

CWAD Lab Scaffolder can prepare a generated project for Git-based development.

The Git workflow can include:

```text
Generate project
      ↓
git init
      ↓
Create initial repository state
      ↓
Configure remote
      ↓
Push project
```

Repository visibility can be configured as:

```text
public
private
```

This allows the scaffolder to be used not only as a local project generator but also as a starting point for repository creation workflows.

---

# Dependency Installation

After generating a project, the scaffolder can install the dependencies required by the generated template.

Instead of manually running:

```bash
npm install
```

after every project creation, the scaffolder can perform the installation as part of the generation workflow.

This keeps the generated project closer to a ready-to-develop state.

---

# Dry Run

The scaffolder supports dry-run functionality.

A dry run allows the generation process to be inspected without actually creating the final project.

This is useful when:

* Developing new templates
* Testing the generator
* Debugging generation logic
* Verifying project configuration

Example:

```bash
cwad-lab-scaffolder --dry-run
```

---

# Architecture

The project follows a modular architecture.

```text
cwad-lab-scaffolder/
│
├── cmd/
├── generator/
├── git/
├── templates/
├── utils/
├── validator/
│
├── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## `cmd/`

Contains CLI command-related functionality.

Responsibilities include:

* Command registration
* CLI argument handling
* Command execution flow

---

## `generator/`

Contains the core project-generation logic.

Responsibilities include:

* Template discovery
* Template selection
* Project creation
* File generation
* Generation workflow

---

## `git/`

Contains Git-related functionality.

Responsibilities include:

* Git initialization
* Git command execution
* Repository configuration
* Remote setup
* Repository visibility handling

---

## `templates/`

Contains the reusable project templates.

This is the heart of the scaffolding system.

Templates should remain independent from the CLI implementation wherever possible.

---

## `utils/`

Contains shared utility functionality used throughout the application.

Examples include:

* Logging
* File utilities
* Configuration helpers
* Common CLI utilities

---

## `validator/`

Contains validation logic.

Validation keeps invalid input away from the generation layer.

Examples:

```text
Project name
Project type
Template name
Configuration values
```

---

# Technology Stack

## Runtime

* Node.js

## Language

* TypeScript

## CLI

* Commander
* Inquirer

## Validation

* Zod

## Terminal UI

* Chalk
* Ora
* Log Symbols

## Logging

* Pino
* Pino Pretty

## Development

* TypeScript
* TSX
* Node.js test runner

The current package configuration defines these dependencies and development tools.

---

# Development Setup

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

---

# Build

Compile the TypeScript project:

```bash
npm run build
```

The compiled output is generated into the configured distribution directory.

---

# Development Mode

Run the TypeScript entry point directly:

```bash
npm run start
```

The project uses `tsx` to execute TypeScript during development.

---

# Testing

Run the test suite:

```bash
npm test
```

The project uses Node's test runner together with `tsx`.

---

# Creating a New Template

When adding a new template, keep the template self-contained.

A good template should provide:

```text
Template
├── package.json
├── source code
├── configuration
├── development scripts
└── documentation
```

The template should avoid putting project-specific logic into the core scaffolder unless that logic is genuinely required by multiple templates.

This keeps the scaffolder maintainable as the number of templates grows.

---

# Template Registry

Templates should be registered through the central configuration/registry rather than being hard-coded throughout the application.

Conceptually:

```ts
{
  id: "express-typescript",
  path: "backend/express-typescript",
  version: "1.0.0"
}
```

This provides a single place to understand which templates are available and where they are stored.

---

# Design Principles

CWAD Lab Scaffolder follows several important principles.

### 1. Templates should be reusable

A template should be usable repeatedly without modifying the source template.

### 2. Generators should remain modular

Generation logic should be divided into small responsibilities rather than one large function.

### 3. Validation should happen early

Invalid project names, project types, and template selections should be rejected before file generation begins.

### 4. CLI logic should remain separate from business logic

Interactive prompts should not contain the actual project-generation implementation.

### 5. Generated projects should be predictable

The same template and configuration should produce the same project structure.

### 6. Automation should reduce repetitive work

Every repeated setup step is a candidate for automation.

---

# Typical Workflow

A developer can use CWAD Lab Scaffolder like this:

```text
                    CWAD LAB
                       │
                       ▼
                 Select category
                       │
                       ▼
                 Select template
                       │
                       ▼
                  Project name
                       │
                       ▼
                  Validate input
                       │
                       ▼
                Generate project
                       │
                       ▼
              Install dependencies
                       │
                       ▼
                  Git setup
                       │
                       ▼
                  Project ready
```

---

# CLI Examples

Interactive mode:

```bash
npx cwad-lab-scaffolder
```

Generate a specific template:

```bash
npx cwad-lab-scaffolder react_apps react-vite
```

Display help:

```bash
npx cwad-lab-scaffolder --help
```

Dry run:

```bash
npx cwad-lab-scaffolder --dry-run
```

---

# Future Improvements

Potential areas for future development include:

* More frontend templates
* More backend templates
* Full-stack templates
* Database-ready templates
* Authentication-ready templates
* Docker-ready templates
* CI/CD templates
* Environment variable generation
* Package-manager selection
* npm / pnpm / yarn / Bun support
* Template versioning
* Remote template repositories
* Template update mechanism
* Better generation previews
* Rollback support
* Plugin architecture
* Improved automated testing
* Template validation
* Template dependency management

---

# Contributing

Contributions are welcome.

Before adding a new feature, consider whether it belongs in:

```text
CLI
Generator
Template
Git integration
Validation
Utility
```

Keep responsibilities separated and avoid adding project-specific behavior to the core generator when the same result can be achieved through a template.

---

# Repository

GitHub:

https://github.com/Codewithajoydas/cwad-lab-scaffolder

---

# Author

Created and maintained by **Ajoy Das**.

GitHub:

https://github.com/Codewithajoydas

---

# License

See the `LICENSE` file in this repository for licensing information.

---

## Status

CWAD Lab Scaffolder is actively evolving.

The project is intended to become a reusable development foundation for quickly creating standardized, production-oriented applications without repeatedly rebuilding the same project setup from scratch.
