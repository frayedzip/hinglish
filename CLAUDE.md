# glish — Hinglish subtitles homepage

## What this is

A production homepage for **glish** — a tool that generates Hinglish (romanized Hindi-English) subtitles for Indian Reels, Shorts, and YouTube videos. Design exported from Claude Design (claude.ai/design); Paper variation implemented here.

## Stack

- Vite 5 + React 18 (ES modules, JSX via `@vitejs/plugin-react`)
- Google Fonts: Bricolage Grotesque, Instrument Serif, Hanken Grotesk, JetBrains Mono

To run locally:
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve dist/
```

Deploy: push to GitHub and import in Vercel — Vite is auto-detected (build = `npm run build`, output = `dist`). No `vercel.json` needed.

## File structure

```
index.html                 Vite entry (loads /src/main.jsx)
package.json               scripts + deps
vite.config.js             Vite + React plugin
src/
  main.jsx                 ReactDOM mount + styles import
  Homepage.jsx             Paper homepage composition
  styles.css               global styles + responsive breakpoints
  theme.jsx                Paper palette, shared components (GlishLogo, Marigold, PaperTexture), useViewport hook
  homepage-top.jsx         Nav (mobile hamburger), Hero, LogosStrip, HowItWorks, PhoneMock, PhoneCaption
  homepage-mid.jsx         CaptionGallery, Languages, SocialProof
  homepage-usecases.jsx    UseCaseCarousel (Veed-style horizontal rail)
  homepage-bot.jsx         FounderStory, Pricing, FinalCTA, Footer
```

## Design spec

**Paper theme palette:**
- `--bg`: `#FBF3E2` (warm cream)
- `--bg-2`: `#F4EAD2`
- `--ink`: `#1A130C`
- `--accent`: `#D63A1A` (deep saffron)
- `--marigold`: `#F0B132`
- `--leaf`: `#5C6B3A`

**Typography:**
- Display/headlines: Bricolage Grotesque (variable, wdth 92)
- Italic accent: Instrument Serif italic
- Body: Hanken Grotesk
- Mono labels: JetBrains Mono

## Responsive breakpoints

| Breakpoint | Changes |
|---|---|
| < 1200px | Section padding reduces |
| < 1024px | Language grid: 4→2 cols; social proof: 4→2 cols; footer: 5→3 cols |
| < 900px | How-it-works: 3→1 col; phone gallery scrolls; pricing: 3→1 col; founder: 2→1 col |
| < 768px | Nav hamburger; hero fonts scale via clamp(); floating phrases hidden; header rows stack |
| < 640px | Footer: 2 col, brand full-width on top; logos hidden |

## Sections (top to bottom)

1. **Nav** — sticky, frosted glass, mobile hamburger drawer
2. **Hero** — big typographic headline, floating Hinglish phrases, paste-URL box, 3-phone preview
3. **Logos strip** — social proof brand logos
4. **How it works** — 3-step cards
5. **Caption gallery** — 5 phone mocks showing viral caption styles
6. **Use cases carousel** — Veed-style horizontal rail of 5 content-type cards
7. **Languages** — 8-language grid with code-switching demo
8. **Social proof** — 4 testimonial cards with stats
9. **Founder story** — dark background, sticky notes collage
10. **Pricing** — 3 rupee-first tiers (Free / Creator / Studio)
11. **Final CTA** — big ghost type background
12. **Footer** — 5-column grid

## Known limitations

- All interactions (nav links, buttons) are non-functional UI only — no routing or backend
- Phone mock videos are CSS gradient placeholders — replace with real creator footage
