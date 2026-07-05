# Bernit Laundry — Marketing Website

Professional laundry & dry cleaning services delivered to your doorstep.
This is the customer-facing marketing site for **Bernit Laundry** (a Bernit Global Limited company):
Home, About, Services, an interactive Pricing calculator, and a Blog — built as the first slice of
the full smart laundry management platform.

> **Scope note:** this repo is the marketing front-end only. There is no database or auth yet —
> the newsletter form posts to a real API route (`/api/newsletter`) that validates input but doesn't
> persist anywhere. Booking, account creation, order tracking, and the admin/driver dashboards from
> the full product spec are natural next phases (see [Roadmap](#roadmap)).

## Tech stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animation
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint     # ESLint
```

Requires Node.js 20.9+ (see Next.js 16 requirements).

## Project structure

```
app/
  layout.tsx           # Root layout: fonts, theme provider, header/footer shell, SEO defaults
  page.tsx              # Home
  about/page.tsx
  services/page.tsx
  pricing/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  api/newsletter/route.ts   # Mock REST endpoint (validates + returns success)
  sitemap.ts / robots.ts / manifest.ts

components/
  layout/       # Header, Footer, Logo, Mobile nav
  theme/        # Light/dark theme provider + toggle
  shared/       # Container, SectionHeading, Reveal, GlassCard, Button, TrackingStrip, PageHeader, CtaBanner
  home/         # Section components used on the Home page
  about/        # Section components used on the About page
  services/     # Services catalog grid
  pricing/      # Interactive pricing calculator
  blog/         # Blog card + category filter

lib/
  data/         # Static content: services, testimonials, FAQ, blog posts, pricing config, nav, company info
  pricing.ts    # Pure pricing-estimate calculation used by the calculator
  fonts.ts      # next/font/google loaders (Sora, Manrope, JetBrains Mono)
  utils.ts      # cn() className helper
```

All page copy and content lives in `lib/data/` as typed arrays — update those files to change
services, pricing, FAQ, team bios, or blog posts without touching component code.

## Design system

- **Palette:** Deep Navy + Royal Blue with a restrained Gold accent (see CSS variables in
  `app/globals.css`). Light and dark themes are both fully defined; the toggle lives in the header.
- **Type:** Sora (display/headings), Manrope (body), JetBrains Mono (tracking IDs, prices, data).
- **Signature element:** the animated `TrackingStrip` component (`components/shared/tracking-strip.tsx`)
  represents the platform's core differentiator — live order tracking — and reappears across the Home
  page (hero, How It Works) rather than being a one-off hero graphic.
- No stock photography is used; visuals are built from gradients, icons (lucide-react) and the
  tracking-strip motif. Swap in real photography by adding images under `public/` and using
  `next/image`.

## Environment variables

None are required to run the site as-is. `.env.example` lists the variables the next phases
(bookings, auth, payments, file storage) will need, so the shape is ready when those land:

```bash
cp .env.example .env.local
```

## Roadmap

This site covers Home / About / Services / Pricing / Blog from the full platform spec. Natural
next phases, in rough order:

1. **Auth** — customer registration/login, email verification, OTP, Google/Facebook login.
2. **Booking flow** — pickup scheduling, address + Google Maps autocomplete, photo upload, instant
   booking confirmation with a real tracking ID + QR code.
3. **Customer dashboard** — order history, receipts/invoices, addresses, loyalty points, messaging.
4. **Admin dashboard** — order management, driver assignment, pricing/coupon management, analytics.
5. **Driver app surface** — assigned jobs, QR scanning, delivery proof, signature capture.
6. **Payments** — Paystack / Flutterwave / Stripe, wallet, coupons, gift cards.
7. **Notifications** — email, SMS, WhatsApp, push, in-app.
8. **File storage** — Google Drive API integration (OAuth 2.0) for uploads, receipts, documents.
9. **AI chatbot** — pricing/FAQ/tracking assistant with human escalation.

Each of these is a substantial feature in its own right — build and review them incrementally
rather than all at once.

## Deployment

The app is a standard Next.js project and deploys to any Next.js-compatible host (Vercel, or a
Node server via `npm run build && npm run start`). No special configuration is required for the
current marketing-site scope.
