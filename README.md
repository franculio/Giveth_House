# Giveth House — Website

Official website for **Giveth House**, a community-driven Web3 hub in Barcelona’s Sants neighborhood. The site explains what the house is, how to visit or stay, how to support it, and how to get in touch.

**Live concept:** A shared home, coworking space, and gathering place for builders and communities in the decentralized ecosystem.

## What’s in the repo

- **Home** — Hero, “What is Giveth House”, activities, and CTAs (Visit, Host, Support).
- **About** — Story, community, values, stewardship, and support.
- **Visit** — How to stay at the house or come for coworking; both paths go through the contact form.
- **FAQs** — Accordion of common questions (what it is, who it’s for, stays, events, funding).
- **Support** — Donation platforms and campaigns (e.g. Giveth, CrowdWalrus) with clear CTAs.
- **Contact** — Contact form for visits, stays, and general inquiries.

The design is minimal and responsive, with a consistent layout (header, main, footer) across pages.

## Tech stack

- **[Astro](https://astro.build)** — Static site generation and routing.
- **[React](https://react.dev)** — Used for interactive bits (e.g. scroll reveal).
- **[Tailwind CSS](https://tailwindcss.com)** — Styling and layout.
- **[Framer Motion](https://www.framer.com/motion/)** — Scroll and transition animations.

Icons: [Tabler Icons](https://tabler.io/icons) via `astro-icon`.

## Getting started

**Prerequisites:** Node.js 18+ and npm (or pnpm/yarn).

1. **Clone and install**

   ```bash
   git clone <this-repo-url>
   cd astro-base
   npm install
   ```

2. **Run locally**

   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321).

3. **Build for production**

   ```bash
   npm run build
   ```

   Output is in `./dist/`. Preview with `npm run preview`.

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start dev server (port 4321)   |
| `npm run build`   | Build static site to `./dist/` |
| `npm run preview` | Serve the production build     |
| `npm run astro`   | Astro CLI (e.g. `astro check`) |

## Project structure (high level)

```
src/
├── components/   # Header, Footer, Hero, CTA, Features, etc.
├── layouts/      # Base layout (meta, global shell)
├── pages/        # Routes: index, about, visit, faqs, support, contact
├── styles/       # Global CSS and Tailwind
└── config/       # Site metadata (e.g. title, description, url)
```

Content and copy for the About page can be aligned with `src/pages/about_context.md`; donation links and campaigns are configured on the Support page.

## License

This project is open source and available under the MIT License.

---

**Giveth House** — A home for Web3 builders and communities.  
[Barcelona · Sants](https://giveth.io/es/project/giveth-house) · [X @GivethHouse](https://x.com/GivethHouse)
