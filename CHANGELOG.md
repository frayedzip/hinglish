# Changelog

## 2026-05-15 — Vite + React migration

**Moved off the CDN/Babel-in-browser setup to a real build pipeline so `npm run dev` works locally and the site can deploy to Vercel without config.**

### Added
- `package.json` — Vite 5, React 18, `@vitejs/plugin-react`; scripts: `dev`, `build`, `preview`
- `vite.config.js` — minimal config, just the React plugin
- `.gitignore` — `node_modules`, `dist`, `.vercel`, `.DS_Store`, etc.
- `src/main.jsx` — new entry; `ReactDOM.createRoot` mount inside `<React.StrictMode>`, imports `./styles.css`
- `src/Homepage.jsx` — replaces root `homepage.jsx`; default-exports `Homepage`

### Changed
- All section files moved to `src/` and converted from script-tag globals to ES modules:
  - Each file gained `import React from 'react'` (so existing `React.useState` / `React.useEffect` calls keep working)
  - Cross-file dependencies now use explicit `import { … } from './…jsx'`
  - Trailing `Object.assign(window, { … })` blocks replaced with `export` on each component
- `styles.css` moved to `src/styles.css` (imported by `main.jsx`, no `<link>` tag needed)
- `index.html` reduced to a Vite shell — single `<script type="module" src="/src/main.jsx">`; CDN React/ReactDOM/Babel `<script>` tags removed

### Removed
- Root `app.jsx`, `homepage.jsx`, `theme.jsx`, `homepage-top.jsx`, `homepage-mid.jsx`, `homepage-usecases.jsx`, `homepage-bot.jsx`, `styles.css` (superseded by `src/`)

### Deploy
- Vercel auto-detects Vite — no `vercel.json` needed (build `npm run build`, output `dist`)

## 2026-05-14 — Initial implementation

**Paper homepage implemented from Claude Design export.**

### Added
- `index.html` — entry point, loads React 18 + Babel via CDN
- `styles.css` — full responsive CSS with fluid typography (`clamp()`), mobile-first breakpoints, grid layout helpers
- `theme.jsx` — Paper palette CSS variables, `GlishLogo`, `Marigold`, `PaperTexture`, `useViewport` hook
- `homepage-top.jsx` — `Nav` (sticky + mobile hamburger drawer), `Hero` (floating phrases, paste box, 3-phone row), `LogosStrip`, `HowItWorks` (3-step cards), `PhoneMock`, `PhoneCaption`
- `homepage-mid.jsx` — `CaptionGallery` (5-phone scrollable row), `Languages` (8-lang grid + code-switch demo), `SocialProof` (testimonials)
- `homepage-usecases.jsx` — `UseCaseCarousel` (horizontal scroll rail, 5 content-type cards, Veed-style)
- `homepage-bot.jsx` — `FounderStory` (dark section, sticky notes), `Pricing` (3 rupee tiers), `FinalCTA` (ghost type), `Footer`
- `homepage.jsx` — Paper-only composition
- `app.jsx` — `ReactDOM.createRoot` mount
- `CLAUDE.md` — project documentation
- `CHANGELOG.md` — this file

### Fixed
- Paste box URL text had inline `display: flex` overriding CSS `display: none` media query — moved display/alignment to CSS class `.gl-paste-url-text`; added `.gl-paste-drop` class so "or drop a file" text is also hidden on mobile (< 600px)

### Design decisions
- Paper variation only (cream `#FBF3E2` background, deep saffron `#D63A1A` accent)
- Ink variation (dark theme) excluded per user request
- Design canvas / tweaks panel removed — renders as standalone responsive website
- `width: 1440px` fixed canvas → `width: 100%` with `clamp()` fluid typography
- Nav becomes sticky with frosted-glass effect; hamburger drawer on mobile
- Floating hero phrases hidden on mobile (`< 768px`) to avoid clutter
- Phone gallery sections use `overflow-x: auto` scroll on small screens
- Pricing cards stack to single column on `< 900px`; featured card loses Y-translate offset
- Founder notes reflow from absolute-positioned collage to flex row on mobile
