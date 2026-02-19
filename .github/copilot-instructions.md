# Copilot Instructions for Solygambas Portfolio

## Project Overview

This is a **Next.js 16 static portfolio site** (SSG with `output: "export"`) built with React 19 and TypeScript. It's a multilingual showcase platform for case studies and featured projects with client-side language detection.

## Architecture

### Core Structure

- **Framework**: Next.js 16 App Router (static export only, no API/middleware)
- **Internationalization**: 7 languages (de, en, es, fr, hi, it, pt) via custom i18next setup
- **Routing**: App Router with dynamic `[locale]` segment capturing language in URLs
- **Styling**: CSS Modules per component + global `styles/globals.css`
- **Static Content**: All project/case study data lives in translation JSON files

### Content Types

Two main portfolio sections with pre-generated dynamic pages:

1. **Featured Projects**: `app/[locale]/featured-projects/[project]/` - 3 projects (on-business-plan, projectin, watchello)
2. **Case Studies**: `app/[locale]/case-studies/[caseStudy]/` - 3 case studies (adevinta, credit-agricole-group-infrastructure-platform, ho36-hostels)

### i18n Architecture (Custom Setup)

**Server Components** use `getT()` for async translation loading:

```tsx
import { getT } from "../i18n";
import type { Locale } from "../i18n/settings";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getT(locale, "common");
  return <h1>{t("title")}</h1>;
}
```

**Client Components** use `useT()` hook with automatic locale detection:

```tsx
"use client";
import { useT } from "../app/i18n/client";

export function MyComponent() {
  const { t } = useT("common"); // auto-detects locale from URL params
  return <p>{t("description")}</p>;
}
```

**Translation files** live in `app/i18n/locales/[locale]/[namespace].json` (not `public/locales/`).

### Static Generation Pattern

All dynamic routes use `generateStaticParams()` with `dynamicParams = false`:

```tsx
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(contentKeys).map((key) => ({ locale, key }))
  );
}
```

### Language Detection & Routing

1. Root page (`app/page.tsx`) detects browser language on client-side
2. Checks `localStorage.i18nextLng` first, then `navigator.language`
3. Redirects to `/{locale}` using Next.js router
4. All subsequent navigation uses `LinkComponent` to preserve locale

## Key Developer Workflows

### Adding a New Featured Project

1. Add key to `featuredProjectKeys` object in `app/[locale]/featured-projects/[project]/page.tsx`
2. Add translation object to `app/i18n/locales/[locale]/common.json` under `featuredProjects.[key]`
3. Add project image (PNG) to `public/featured-projects/[key].png`
4. Ensure `title`, `subtitle`, `paragraphs` (array), `url` fields exist in each locale

### Adding a New Language

1. Add locale to `locales` array in `app/i18n/settings.ts`
2. Create new directory `app/i18n/locales/[newLocale]/` with `common.json` and `footer.json`
3. Copy structure from existing locale and translate all content

### Development & Build Commands

- **Dev**: `npm run dev` - starts Next.js dev server at http://localhost:3000
- **Build**: `npm run build` - generates static site to `/out` (takes time due to all locale+content combinations)
- **Type Check**: `npm run type-check` - validates TypeScript with strict mode
- **Format**: `npm run format` - formats all files with Prettier
- **Lint**: `npm run lint` - checks code, `npm run lint:fix` - auto-fixes lintable issues
- **Validate**: `npm run validate` - runs the full validation pipeline (type-check + lint + build)
- **Serve Built Site**: `npm start` (alias for `npx serve@latest out`) - serves the static export locally

## Agent Workflow (MANDATORY)

This project enforces a strict "Fortress" workflow for any agent-operated changes. Follow these steps for every task and local change before marking work as complete:

1. **Run formatting and quick fixes**:
   - `npm run format` — formats all files with Prettier
   - `npm run lint:fix` — auto-fix lintable issues

2. **Run the full validation pipeline (this is the Golden Rule)**:
   - `npm run validate` — must succeed (this runs type-check, linting, and a production build)

3. **If `npm run validate` fails, do NOT mark the task complete**. Fix the issues and re-run until it passes.

## Code Patterns & Conventions

### Locale-Aware Linking

Use the custom `Link` component (not Next.js `Link` directly) to preserve locale routing:

```tsx
<LinkComponent href="/featured-projects/watchello">View Project</LinkComponent>
// Automatically becomes /{locale}/featured-projects/watchello
```

### Translation Usage

Server components:

```tsx
import { getT } from "../i18n";
const t = await getT(locale, "common");
const title = t("title");
```

Client components:

```tsx
import { useT } from "../app/i18n/client";
const { t } = useT("common");
const title = t("title");
```

For structured data (objects/arrays):

```tsx
const projectData = t("featuredProjects.watchello", {
  returnObjects: true,
}) as FeaturedProjectData;
```

### TypeScript Patterns

- **Strict mode enabled**: No `any` types, explicit parameter typing required
- **Async params**: Page components receive `params` as a Promise - always await it: `const { locale } = await params;`
- **Content keys**: Use `const key: FeaturedProjectKey` with `keyof typeof` objects for type-safe lookups
- **Locale type**: Import `type { Locale }` from `app/i18n/settings` for all locale-related typing

### CSS Modules

Components use CSS Modules (`import styles from "../styles/ComponentName.module.css"`), not global styles except `globals.css`. Class names are accessed as `styles.className`.

## Critical Integration Points

1. **Language Detection** (`app/page.tsx`): Client-side redirect to detected language based on localStorage/navigator
2. **Server i18n** (`app/i18n/index.ts`): `getT()` function creates isolated i18next instances for server components
3. **Client i18n** (`app/i18n/client.ts`): `useT()` hook with automatic locale detection from URL params
4. **Locale-aware routing** (`components/Link.tsx`): Auto-prefixes locale to all internal URLs
5. **Image optimization**: Images use `unoptimized: true` because of static export

## TypeScript Strict Mode Notes

- Params are now Promise-based → **must await**: `const { locale } = await params;`
- Component props require explicit interfaces (no inline `Record<string, any>`)
- Use `returnObjects: true` with `t()` when fetching structured translation data
- All translation data must be typed with explicit interfaces

## Important Constraints

- **No API routes** - static export only, all data in JSON translations or public assets
- **No middleware** - language routing via client-side redirect at root + locale-aware Link component
- **SSG only** - `dynamicParams: false` everywhere, all paths pre-generated at build time
- **Translation files location**: `app/i18n/locales/`
