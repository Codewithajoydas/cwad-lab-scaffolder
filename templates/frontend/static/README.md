# Professional Static HTML Template

A clean, lightweight static website foundation for the CWAD scaffolder.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Vite
- ESLint
- Prettier

No framework or runtime library is included.

## Architecture

```text
src/
├── assets/
│   └── .gitkeep
├── css/
│   ├── components.css
│   ├── global.css
│   └── variables.css
├── js/
│   ├── main.js
│   └── modules/
│       └── navigation.js
└── index.html

public/
└── .gitkeep
```

## Run

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

The production output is generated in:

```text
dist/
```

## Quality

```bash
npm run lint
npm run format
npm run format:check
```

## Included boilerplate

The starter includes:

- Responsive navigation
- Mobile menu
- Semantic HTML structure
- Accessible button state
- CSS custom properties
- Component-oriented CSS
- Responsive layout
- No external runtime dependency

## Design principle

This template stays deliberately small. A static HTML project should not carry React, a state manager, routing libraries or other application-framework dependencies unless the requirements actually need them.
