# EarlyRoads 🛣️

A job board built exclusively for early-career job seekers in New Zealand — internships, graduate roles, and junior positions (0–2 years experience). No noise from senior roles. Just the opportunities that actually matter when you're starting out.

---

## Features

- 🔍 **Browse & Filter Jobs** — filter by employment type, work arrangement, industry, and role level
- 📍 **Smart Location Filtering** — Remote shows all NZ-wide roles; Hybrid and Onsite let you pick a specific city
- 📝 **Post a Job** — employers can list roles directly on the platform
- 🗂️ **Role Levels** — Internship, Graduate, and Junior roles only

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | SCSS Modules |
| Backend / DB | Supabase (PostgreSQL) | Node.js + Express
| Routing | React Router |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
git clone https://github.com/Michellelo123/earlyroads.git
cd earlyroads
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Route-level pages
│   ├── Home/
│   ├── BrowseJobs/
│   ├── JobDetail/
│   └── PostJob/
├── styles/           # Global SCSS variables and tokens
└── main.jsx
```

---

## Author

**Michelle Lo** — [@Michellelo123](https://github.com/Michellelo123)
