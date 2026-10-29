# Signalist

A full-stack stock market application for tracking prices, managing watchlists, and receiving automated alerts. Signalist combines live market data with event-driven background workflows and AI-generated summaries, all behind secure user authentication.

**Live demo:** https://signalist-stock-app-jebisam12-3803s-projects.vercel.app

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-00A35C?logo=mongodb&logoColor=white)
![Inngest](https://img.shields.io/badge/Inngest-000000)
![Better Auth](https://img.shields.io/badge/Better_Auth-000000)

---

## Features

- **Stock dashboard:** track prices with interactive charts and historical data
- **Search:** find stocks quickly by symbol or company name
- **Watchlists:** build a personal watchlist of the stocks you follow
- **Price alerts:** set alert thresholds and receive email notifications
- **Company insights:** view key financials, recent news, and market data for each company
- **AI-powered summaries:** personalized market digests generated with Google Gemini
- **Background workflows:** scheduled and event-driven jobs for alerts, emails, and reports, powered by Inngest
- **Authentication:** secure sign-up and sign-in with Better Auth
- **Responsive UI:** accessible, customizable components built with shadcn/ui and Tailwind CSS

## Architecture

```
┌────────────────────────┐        ┌──────────────────────┐
│   Next.js (App Router) │ ─────▶ │   Finnhub API        │  market data, news
│   UI + server actions  │        └──────────────────────┘
│                        │        ┌──────────────────────┐
│                        │ ─────▶ │   MongoDB            │  users, watchlists, alerts
│                        │        └──────────────────────┘
│                        │        ┌──────────────────────┐
│   Better Auth          │ ─────▶ │   Inngest            │  background workflows
└────────────────────────┘        └──────────┬───────────┘
                                             │
                              ┌──────────────┴──────────────┐
                              ▼                             ▼
                     ┌────────────────┐           ┌────────────────┐
                     │  Gemini (AI)   │           │  Nodemailer    │
                     │  summaries     │           │  email delivery│
                     └────────────────┘           └────────────────┘
```

## Tech Stack

| Area | Technology |
|------|-----------|
| Framework | Next.js, React |
| Language | TypeScript |
| Styling and UI | Tailwind CSS, shadcn/ui |
| Authentication | Better Auth |
| Database | MongoDB |
| Background jobs | Inngest |
| Market data | Finnhub API |
| AI | Google Gemini |
| Email | Nodemailer |
| Hosting | Vercel |

## Project Structure

```
signalist_stock_app/
├── app/           # Next.js routes, layouts, and pages
├── components/    # Reusable UI components
├── database/      # MongoDB connection and data models
├── hooks/         # Custom React hooks
├── lib/           # Server actions, integrations, and shared utilities
├── scripts/       # Helper scripts
├── types/         # Shared TypeScript types
└── public/assets/ # Static assets
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- A [MongoDB](https://www.mongodb.com/products/platform/atlas-database) database (Atlas free tier works)
- A [Finnhub](https://finnhub.io/) API key
- A [Google Gemini](https://aistudio.google.com/) API key
- An email account that supports SMTP for Nodemailer

### 1. Clone and install

```bash
git clone https://github.com/jebickson/signalist_stock_app.git
cd signalist_stock_app
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Finnhub
NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# MongoDB
MONGODB_URI=

# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# Google Gemini
GEMINI_API_KEY=

# Nodemailer
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_BASE_URL` | Public URL of the app |
| `NEXT_PUBLIC_FINNHUB_API_KEY` / `FINNHUB_BASE_URL` | Finnhub credentials and API base URL |
| `MONGODB_URI` | MongoDB connection string |
| `BETTER_AUTH_SECRET` | Long random string used to sign sessions |
| `BETTER_AUTH_URL` | Base URL Better Auth runs on |
| `GEMINI_API_KEY` | Google Gemini API key for AI summaries |
| `NODEMAILER_EMAIL` / `NODEMAILER_PASSWORD` | Sender account for notification emails (use an app password) |

### 3. Run the app

Start the Next.js development server and the Inngest dev server in two terminals:

```bash
npm run dev
```

```bash
npx inngest-cli@latest dev
```

Open [http://localhost:3000](http://localhost:3000) for the app. The Inngest dev dashboard, where you can trigger and inspect workflows, runs at [http://localhost:8288](http://localhost:8288).

## Deployment

The app is deployed on [Vercel](https://vercel.com/). Add the same environment variables in your Vercel project settings, set `NEXT_PUBLIC_BASE_URL` and `BETTER_AUTH_URL` to your production URL, and connect the deployment to Inngest Cloud so scheduled workflows run in production.

## Security Notes

- Never commit `.env` files or API keys.
- Variables prefixed with `NEXT_PUBLIC_` are bundled into browser code and visible to users. Keep any key you want private, including paid-plan API keys, in a server-only variable and call the provider from server code.
- Use an app-specific password, not your main account password, for Nodemailer.

## Roadmap

- [ ] Automated tests for server actions and workflows
- [ ] CI pipeline with GitHub Actions
- [ ] Portfolio tracking with profit and loss
- [ ] Push and SMS notification channels

## Author

**Jebickson Samuel**
GitHub: [@jebickson](https://github.com/jebickson)

## Acknowledgments

Built while following a Next.js stock tracker course by JavaScript Mastery. Market data is provided by [Finnhub](https://finnhub.io/).
