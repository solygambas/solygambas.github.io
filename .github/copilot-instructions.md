# Copilot Instructions for Solygambas Portfolio

## Project Overview

This is a **Next.js 16 static portfolio site** (SSG with `output: "export"`) built with React 19 and TypeScript. It's a multilingual showcasing platform for case studies and featured projects with language detection.

## Architecture

### Core Structure

- **Framework**: Next.js 16 (static export only, no API/middleware)
- **Internationalization**: 7 languages (de, en, es, fr, hi, it, pt) via `next-i18next`
- **Routing**: Pages router with dynamic `[locale]` segment capturing language in URLs
- **Styling**: CSS Modules per component + global `styles/globals.css`
- **Static Content**: All project/case study data lives in translation files

### Content Types

Two main portfolio sections with pre-generated dynamic pages:

1. **Featured Projects**: `pages/[locale]/featured-projects/[project]/` - constrained to hardcoded keys (on-business-plan, projectin, watchello)
2. **Case Studies**: `pages/[locale]/case-studies/[caseStudy]/` - similar pattern

### Language Handling Pattern

Every page that needs i18n:

```tsx
// 1. Define static paths for all locale+content combinations
export const getStaticPaths: GetStaticPaths = () => {
  const paths = i18nextConfig.i18n.locales.flatMap((locale) =>
    contentKeys.map((key) => ({ params: { locale, key } }))
  );
  return { paths, fallback: false };
};

// 2. Load translations using serverSideTranslations
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const i18nProps = await serverSideTranslations(params.locale as string, [
    "common",
  ]);
  return { props: { ...i18nProps /* content params */ } };
};
```

## Key Developer Workflows

### Adding a New Featured Project

1. Add key to `featuredProjectKeys` in `pages/[locale]/featured-projects/[project]/index.tsx`
2. Add translation object to `public/locales/[locale]/common.json` under `featuredProjects.[key]`
3. Add project image (PNG) to `public/featured-projects/[key].png`
4. Ensure `title`, `subtitle`, `paragraphs` (array), `url` fields exist in each locale

### Adding a New Language

1. Add locale to `i18nextConfig.i18n.locales` in `next-i18next.config.js`
2. Create new JSON files in `public/locales/[newLocale]/` (copy structure from existing)
3. Update translations in all locale files

### Development & Build Commands

- **Dev**: `npm run dev` - starts Next.js dev server
- **Build**: `npm run build` - generates static site to `/out` (takes time due to all locale+content combinations)
- **Type Check**: `npm run type-check` - validates TypeScript with strict mode
- **Format**: `npm run format` - formats all files with Prettier
- **Lint**: `npm run lint` - checks code, `npm run lint:fix` - auto-fixes lintable issues
- **Validate**: `npm run validate` - runs the full validation pipeline (type-check + lint + build)
- **Serve Built Site**: `npx serve@latest out` - serves the static export locally

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

```tsx
import { useTranslation } from "next-i18next";

const { t } = useTranslation("common");
const projectData = t("featuredProjects.watchello", {
  returnObjects: true,
}) as FeaturedProjectData;
```

### TypeScript Patterns

- **Strict mode enabled**: No `any` types, explicit parameter typing required
- **Dynamic params**: Always cast `params?.key as string` or use type guards with discriminated unions
- **Content keys**: Use `const key: FeaturedProjectKey` with `keyof typeof` objects for type-safe lookups

### CSS Modules

Components use CSS Modules (`import styles from "../styles/ComponentName.module.css"`), not global styles except `globals.css`. Class names are accessed as `styles.className`.

## Critical Integration Points

1. **Language Detection** (`lib/languageDetector.ts`): Runs on root pages to redirect to detected language
2. **Static Props Helper** (`lib/getStatic.ts`): `makeStaticProps(ns)` wraps SSR translation loading
3. **Image Optimization**: Images use `unoptimized: true` because of static export

## TypeScript Strict Mode Notes

- Query & params are typed as `ParsedUrlQuery` → **must cast** `params?.locale as string`
- Component props require explicit interfaces (no inline `Record<string, any>`)
- Use `returnObjects: true` with `t()` when fetching structured translation data

## Important Constraints

- **No API routes** - static export only, all data in JSON translations or public assets
- **No middleware** - language routing via pages + useRedirect hook
- **SSG only** - fallback: false everywhere, all paths pre-generated at build time
