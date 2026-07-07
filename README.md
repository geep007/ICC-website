# Independent Creators Co. — Website

Astro site built from the [Figma design](https://www.figma.com/design/PfjoFt1GlKPCzwQZnFSi5g/Assignment-website--Copy-?node-id=0-72), with Sanity as the CMS so the client can edit all copy, images, and logos themselves.

## Stack

- **Astro 5** — static site, zero JS by default; small vanilla scripts for interactions
- **Sanity v3** — headless CMS (embedded studio in `studio/`)
- **Self-hosted fonts** — Poppins, Manrope, Poor Story via Fontsource

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |

## Project structure

```
src/
  components/     One .astro component per Figma section
    Nav, Hero, Ticker, GifSection, About1, About2,
    Services, Ecosystem, Brands, Contact, PhotoMarquee, Footer
  content/defaults.ts   All Figma content as typed fallback data
  lib/sanity.ts         Sanity client + per-field fallback merge
  layouts/Layout.astro  Fonts, meta, scroll-reveal observer
  styles/global.css     Design tokens, marquee/reveal animations
public/
  images/, icons/       Assets exported from Figma
studio/                 Sanity Studio (schema: singleton "Homepage")
```

## Animations

All motion is CSS-driven (no animation library), with `prefers-reduced-motion` support throughout:

- **Tickers** — seamless infinite marquee (duplicated track, `translateX(-50%)` loop)
- **Hero** — masked line reveal with stagger, nav drops in
- **Scroll reveals** — IntersectionObserver adds `.is-visible`; per-element delay via `--reveal-delay`
- **Services** — interactive tabs (active card turns yellow, panel crossfades)
- **Ecosystem** — bars scale up in sequence on scroll
- **Roster logos** — grayscale → color on hover
- **Photo marquee** — slow infinite photo strip

## Connecting Sanity (one-time setup)

The site renders fully from `src/content/defaults.ts` until Sanity is configured. To enable client editing:

1. ```bash
   cd studio
   npm install
   npx sanity init   # log in, create project "ICC", dataset "production"
   ```
   Note the project ID it prints.
2. In the repo root, copy `.env.example` to `.env` and set:
   ```
   PUBLIC_SANITY_PROJECT_ID=<project-id>
   PUBLIC_SANITY_DATASET=production
   ```
3. Run the studio: `cd studio && npm run dev` → open `localhost:3333`, fill in the **Homepage** document. Every field is optional — anything left empty falls back to the Figma content.
4. Add your deployed site's domain under **API → CORS origins** in [sanity.io/manage](https://www.sanity.io/manage).
5. To host the editing UI for the client: `cd studio && npx sanity deploy` (gives you `<name>.sanity.studio`).

Because the site is static, content changes need a rebuild — set up a Sanity webhook to trigger a deploy (Vercel/Netlify deploy hook) so publishing in the studio updates the live site automatically.

## Known gaps / next steps

- **GIF section** uses a static frame exported from Figma (`hands-glitch.png`). The original design uses a video/GIF — drop the real file into `public/images/` and update `GifSection.astro` (or extend the schema with a file field).
- **Contact form** posts nowhere yet — wire `action` to a form service (Formspree, Basin) or an API route.
- **Services tabs** share one case-study image; the schema can be extended to one image per service.
