# Professional Chrome Extension Template

A Manifest V3 Chrome extension foundation for the CWAD scaffolder.

## Stack

- Chrome Extension Manifest V3
- TypeScript
- React
- Vite
- Chrome extension service worker
- Content script
- Popup UI
- Options page
- Typed Chrome APIs
- Vitest
- ESLint
- Prettier

## Architecture

```text
src/
├── background/
│   └── service-worker.ts
├── content/
│   └── content.ts
├── popup/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── options/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
└── shared/
    └── messages.ts

public/
├── icons/
└── manifest.json
```

## Build

```bash
npm install
npm run build
```

The production extension is generated in:

```text
dist/
```

## Load into Chrome

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Select **Load unpacked**
4. Choose the generated `dist` directory.

## Development workflow

```bash
npm run dev
```

For extension development, rebuild after source changes and reload the unpacked extension from Chrome Extensions.

## Included extension pieces

### Popup

A React popup UI with a working message to the extension service worker.

### Service worker

Handles:

```text
popup -> service worker -> response
```

### Content script

Injected into pages and adds a small verification marker.

### Options page

Provides the standard extension settings entry point.

## Permissions

The starter intentionally uses a minimal permission set.

Current permissions:

```text
storage
```

Host permissions are limited to the sites needed by the starter content script. Expand permissions only when the actual extension requirements need them.

## Quality

```bash
npm run lint
npm run format:check
npm test
npm run build
```

## Design principle

Manifest V3 extensions should keep privileged operations inside the service worker and expose only the minimum required behavior to popup/content scripts.
