# Professional Electron + React + TypeScript Template

A secure desktop application foundation for the CWAD scaffolder.

## Stack

- Electron
- React
- TypeScript
- Vite
- Secure preload bridge
- Context isolation
- Node integration disabled
- Vitest
- ESLint
- Prettier

## Architecture

```text
src/
├── main/
│   ├── main.ts          # Electron main process
│   └── window.ts        # BrowserWindow creation
├── preload/
│   └── preload.ts       # Secure renderer bridge
├── renderer/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
└── shared/
    └── types.ts

tests/
└── app.test.tsx
```

## Development

```bash
npm install
npm run dev
```

This starts Vite and Electron together.

## Production build

```bash
npm run build
npm start
```

## Security model

The template uses:

```text
contextIsolation: true
nodeIntegration: false
sandbox: true
```

The renderer cannot directly access Node.js APIs.

Renderer-to-main communication should be exposed through the preload bridge using a small, explicit API.

## Example IPC bridge

The preload exposes:

```text
window.electronAPI.ping()
```

The renderer uses the bridge instead of importing Node.js/Electron APIs directly.

## Testing

```bash
npm test
npm run test:watch
npm run test:coverage
```

## Code quality

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Packaging

This starter intentionally does not force a packaging/distribution framework into every Electron project.

For applications that need installers, code signing and auto-update, the scaffolder can add a dedicated packaging profile such as Electron Forge or electron-builder.
