# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Note for Claude**: This project is a starter template. When the user starts building their own application on top of it, you should update this CLAUDE.md to reflect the actual project — rename it, remove template-specific references (demo page, example store, etc.), and document the real architecture as it evolves. Don't keep describing it as a "template" once it has become a real product.

## About

A Next.js starter template pre-configured with shadcn/ui, Tailwind CSS v4, next-intl (i18n), Zustand (state management), and next-themes (dark mode). Designed for rapid project scaffolding.

**Tech stack**: Next.js 15 · React 19 · TypeScript 5 · Tailwind CSS 4 · shadcn/ui · Zustand 5 · next-intl · next-themes

## Commands

- `pnpm dev` - Start dev server with Turbopack (port 3000)
- `pnpm build` - Production build with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm dlx shadcn@latest add [component]` - Add shadcn/ui component

## Architecture

### Layout Hierarchy

The app uses a nested layout structure:

1. **Root Layout** (`src/app/layout.tsx`): `ThemeProvider` + `StoreProvider` (global)
2. **Locale Layout** (`src/app/[locale]/layout.tsx`): `NextIntlClientProvider` (per-locale)

This ensures theme/state providers are available globally while i18n is scoped to locale routes.

### Internationalization (next-intl)

- **Routing config**: `src/i18n/routing.ts` — supported locales (`en`, `zh`) and default
- **Request handler**: `src/i18n/request.ts` — locale resolution
- **Navigation**: `src/i18n/navigation.ts` — locale-aware `Link`, `redirect`, `useRouter`, `usePathname`
- **Translations**: `messages/en.json`, `messages/zh.json`
- **Middleware**: `src/middleware.ts` — automatic locale detection/redirect
- **Next.js plugin**: `next.config.ts` uses `createNextIntlPlugin()`

**Important**: Always use navigation utilities from `@/i18n/navigation` instead of `next/navigation`.

### State Management (Zustand)

Vanilla store pattern for SSR compatibility:

- **Store**: `src/stores/store.ts` — `AppState`, `AppActions`, `createAppStore` factory
- **Provider**: `src/providers/store-provider.tsx` — creates store per request via `useRef`
- **Usage**: `import { useAppStore } from "@/providers/store-provider"`

### Theme System

- `next-themes` with `attribute="class"`, `defaultTheme="system"`
- Provider wrapper: `src/providers/theme-provider.tsx`
- `suppressHydrationWarning` on `<html>` tag

### shadcn/ui

- Style: `new-york` · Base color: `zinc` · CSS variables enabled
- Components: `src/components/ui/` (auto-installed via CLI)
- Radix primitives via unified `radix-ui` package
- Config: `components.json`
- Utilities: `cn()` from `@/lib/utils`

### Path Aliases

- `@/*` → `./src/*` (tsconfig.json)

## Extending

### Add a language
1. Add locale to `src/i18n/routing.ts`
2. Create `messages/[locale].json`

### Extend Zustand store
1. Add to `AppState` / `AppActions` types in `src/stores/store.ts`
2. Update `defaultInitState` and implement in `createAppStore`
