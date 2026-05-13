# Cumaxx Agency Website

**Digitale Produkte, die wirken.** — Studio aus Potsdam für Webentwicklung, E-Commerce & Automatisierung.

## Tech Stack

- **Next.js 16** (App Router, React Server Components, TypeScript)
- **Tailwind CSS v4** (CSS-first, `@theme` directive)
- **shadcn/ui** (canary) + custom components
- **Framer Motion** + **GSAP ScrollTrigger** for animations
- **Lenis** for smooth scrolling
- **next-intl** for i18n (de / en / tr)
- **React Hook Form** + **Zod** for forms
- **Resend** for email delivery
- **MDX** for blog content

## Getting Started

```bash
npm install
cp .env.example .env.local
# Add your RESEND_API_KEY to .env.local
npm run dev
```

Open [http://localhost:3000/de](http://localhost:3000/de).

## Project Structure

```
app/[locale]/          — Locale pages (de, en, tr)
components/
  ui/                  — shadcn/ui primitives
  layout/              — Header, Footer, LanguageSwitcher, ThemeToggle
  sections/            — Page sections (Hero, Services, Work, Process, etc.)
  animations/          — Animation wrappers (Lenis, GSAP, Framer Motion)
lib/                   — Utilities, validations, fonts, email, SEO
messages/              — Translation keys (de.json, en.json, tr.json)
content/blog/          — MDX blog posts per locale
public/images/         — Static images and grain.svg
```

## Build

```bash
npm run build
```

## Deployment

Configured for Vercel. Set `RESEND_API_KEY` in environment variables.

## License

All rights reserved.
