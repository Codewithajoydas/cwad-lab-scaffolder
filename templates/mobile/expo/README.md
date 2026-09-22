# Professional Expo Template

Production-oriented React Native + Expo foundation for Android, iOS, and web.

This template uses Expo SDK 57, React Native 0.86, React 19.2, TypeScript, and Expo Router. Expo SDK 57 targets React Native 0.86 and requires Node.js 22.13.x or newer. See the official Expo SDK reference for the current compatibility matrix.

## Stack

- Expo SDK 57
- React Native 0.86
- React 19.2
- TypeScript
- Expo Router
- Jest + jest-expo
- Prettier
- Metro

## Structure

```text
expo/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── settings.tsx
├── components/
│   └── ui/
│       └── Screen.tsx
├── constants/
│   └── theme.ts
├── hooks/
│   └── useAppTheme.ts
├── tests/
│   └── smoke.test.ts
├── assets/
│   └── .gitkeep
├── .env.example
├── app.json
├── babel.config.js
├── jest.config.js
├── metro.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Requirements

- Node.js 22.13.x or newer
- npm
- Android Studio for local Android builds
- Xcode for local iOS builds on macOS

Expo's current SDK documentation lists SDK 57 as the latest stable SDK and maps it to React Native 0.86 and React 19.2.3.

## Install

```bash
npm install
```

## Development

Start the Expo development server:

```bash
npm run start
```

Then use Expo Go or a development build.

Android:

```bash
npm run android
```

iOS:

```bash
npm run ios
```

Web:

```bash
npm run web
```

## Quality

```bash
npm run typecheck
npm run lint
npm test
npm run format:check
```

## Environment variables

Expo public variables use the `EXPO_PUBLIC_` prefix.

Example:

```env
EXPO_PUBLIC_API_URL=https://api.example.com
```

Do not put secrets in `EXPO_PUBLIC_*` variables because they are exposed to the client bundle.

## Routing

Expo Router uses the filesystem for routes:

```text
app/
├── _layout.tsx
├── index.tsx
└── settings.tsx
```

The included starter provides:

- `/`
- `/settings`

## Architecture principle

The template provides the mobile application foundation without forcing application-specific state management, networking, authentication, database, analytics, or native modules.

Add those capabilities when the project actually needs them.

## Testing

Tests use Jest with `jest-expo`:

```bash
npm test
```

## Important

Expo SDK 55 and later use React Native's New Architecture exclusively. This template therefore does not include a `newArchEnabled: false` configuration.

## Official documentation

- Expo documentation: https://docs.expo.dev/
- Expo SDK reference: https://docs.expo.dev/versions/latest/
- Create an Expo project: https://docs.expo.dev/get-started/create-a-project/
