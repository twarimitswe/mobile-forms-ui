# Mobile Forms UI

A sleek React Native app built with **Expo**, **TypeScript**, and **React Navigation** that demonstrates a full‑featured contact form.

## Features
- **DRY & KISS** codebase – minimal abstraction, reusable component.
- Form fields: Name, Email, Phone, Date picker, File upload.
- Simple validation with friendly alerts.
- Navigation stack ready for additional screens.
- Visual style: navy‑blue header, soft gray boxes, rounded inputs, no shadows.
- Built with **pnpm** (fast installs) and **Expo** (cross‑platform).

## Getting Started
```bash
# Clone the repo (skip if already cloned)
git clone git@github.com:twarimitswe/mobile-forms-ui.git
cd mobile-forms-ui

# Install dependencies (pnpm required)
pnpm install

# Run on your device / simulator
pnpm run ios   # macOS only
pnpm run android
pnpm run web
```

## Architecture Highlights
- **App.tsx** – sets up `NavigationContainer` and a native stack.
- **src/screens/FormScreen.tsx** – pure UI component, no business logic leakage.
- All styling lives in the component via `StyleSheet.create`, keeping CSS‑in‑JS minimal.

## License
MIT – feel free to fork, modify, and extend.
