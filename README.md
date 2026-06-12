# Crystal's Portfolio — Next.js + Tailwind

A personal portfolio website for Kyi Kyi Naing (Crystal), built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Composes all sections
│   └── globals.css      # Tailwind base + custom utilities
├── components/
│   ├── Navbar.tsx       # Sticky nav with mobile menu
│   ├── Hero.tsx         # Hero with typed animation + stats
│   ├── Skills.tsx       # Skills grid by category
│   ├── Experience.tsx   # Work timeline
│   ├── Projects.tsx     # Project cards
│   ├── Education.tsx    # Education cards
│   ├── Contact.tsx      # Contact links + summary
│   └── Footer.tsx
├── lib/
│   └── data.ts          # ← ALL your content lives here
└── public/
    └── fonts/           # Optional: local JetBrains Mono
```

## Customizing Your Content

**All content is in one file: `lib/data.ts`**

- Update `personal.github` and `personal.linkedin` with your real URLs
- Add a profile photo: place `photo.jpg` in `/public/` and add `<Image>` to `Hero.tsx`
- Add or remove sections by editing the arrays in `data.ts`

## Deploying to GitHub Pages

1. Create repo named `yourusername.github.io`
2. Add to `next.config.mjs`:
   ```js
   const nextConfig = {
     output: 'export',
     basePath: '', // or '/repo-name' if not root
     images: { unoptimized: true },
   };
   ```
3. Run `npm run build` — outputs to `/out`
4. Push the `/out` folder contents to your GitHub repo

## Deploying to Vercel (easier)

```bash
npx vercel
```
Free, zero-config, auto-deploys on every push.

## Fonts

The layout references `JetBrains Mono` as a local font from `/public/fonts/`.
Either:
- Download it from [jetbrains.com/lp/mono](https://www.jetbrains.com/lp/mono/) and place the `.woff2` in `/public/fonts/`
- Or switch to the Google Fonts import in `layout.tsx` (already includes a fallback)
