# Sean Dai — Portfolio

A Next.js 14 portfolio and tutoring site.

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form email setup (optional)

The form POSTs to `/api/contact`. To actually send emails:

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Create an API key
3. Copy `.env.local.example` to `.env.local` and fill in `RESEND_API_KEY`
4. Uncomment the Resend block in `app/api/contact/route.js`
5. Run `npm install resend`
6. In Vercel, add `RESEND_API_KEY` under Settings → Environment Variables

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Vercel auto-detects Next.js — just click Deploy
4. Add any env vars under Settings → Environment Variables

## Project structure

```
app/
  layout.jsx          — root HTML shell + metadata
  page.jsx            — assembles all sections
  globals.css         — all styles
  api/contact/
    route.js          — contact form API endpoint
components/
  Nav.jsx
  Hero.jsx
  ParticleSphere.jsx  — interactive WebGL-style canvas sphere
  About.jsx
  Music.jsx
  Tutoring.jsx
  Contact.jsx
  ClientInit.jsx      — scroll fade-in observer
```
