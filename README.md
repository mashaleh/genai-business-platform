# Generative AI for Business — SMB Program

The dedicated learning platform for TechTelligence's Generative AI for Business program, built for SMBs across the UAE & GCC.

## Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Pages

| Route | Description |
|---|---|
| `/` | Program overview — homepage |
| `/about` | Mission, values, co-founders |
| `/business` | Full platform — self-paced & instructor-led tracks |
| `/contact` | Contact form & program enquiries |

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

Push to GitHub, then import the repository in Vercel — zero-config deploy.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo>
git push -u origin main
```

## Project Structure

```
genai-business-platform/
├── app/
│   ├── layout.tsx          Root layout — navbar, footer, fonts
│   ├── page.tsx            Home (overview)
│   ├── about/page.tsx
│   ├── business/           Self-paced + instructor-led platform
│   ├── contact/page.tsx
│   ├── overview/           Overview client component
│   └── globals.css
├── components/
│   ├── layout/             GenAINavbar, GenAIFooter
│   └── ui/                 Button, Card, Badge, GradientText
├── lib/                    utils, constants
└── public/                 Logo, course assets
```

## Brand

- Background: `#06071a` (deep navy)
- Primary accent: `#22d3ee` (cyan)
- Secondary accent: `#a78bfa` (violet)
- Tertiary accent: `#f472b6` (pink)

---

© TechTelligence — All rights reserved.
