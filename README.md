# Soapyland

One-page portfolio. Vue 3 + Vite + TypeScript, no UI framework.

```bash
npm install
npm run dev      # local dev
npm run build    # type-check + production build in dist/
```

## Editing

- Project names, links and web-layer tools: `src/data/content.ts`
- All visible text, in both languages: `src/i18n/en.ts` and `src/i18n/fr.ts`
  (TypeScript flags any key missing in either file)
- Language state (browser detection, saved choice, `<html lang>`): `src/i18n/index.ts`
- Colors and type scale: `src/styles/tokens.css`
- Hero project browser (keyboard: ↑↓ / j k, Enter): `src/components/TuiWindow.vue`

## Adding a project

1. Add `{ id, name, kind, links }` to `projects` in `src/data/content.ts`.
2. Add an entry under the same `id` in `projects` in both locale files.
   `links` there holds one label per URL, in the same order.

## Deploy on Vercel

Framework preset: Vite. Build command `npm run build`, output `dist`.
