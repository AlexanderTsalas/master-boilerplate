# Master Boilerplate 🚀

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

The ultimate "Golden Stack" foundation for high-performance, premium web applications. Built for agencies and engineers who refuse to settle for mediocrity and demand zero technical debt. Free and open-source under the MIT License.

## The "Golden Stack"

This boilerplate is strictly configured with the modern premium stack:
- **Framework:** Next.js 15 (App Router)
- **Language:** Strict TypeScript
- **Styling:** Tailwind CSS v4 + 8px Spatial Grid System
- **Components:** Shadcn/UI (Atomic design)
- **Database & Auth:** Supabase SSR
- **ORM:** Drizzle ORM
- **Animations:** Framer Motion
- **Icons:** Phosphor Icons

## Features

- 🔒 **Secure by Default:** Full Supabase SSR integration via `middleware.ts` for route protection and session management.
- ⚡ **Turbo-charged Performance:** Pre-configured for maximum PageSpeed metrics and semantic SEO.
- 🎨 **Premium UI/UX:** Built with "Glassmorphism," smooth spring animations, and a strict 8px developer design system.
- 🧱 **Scalable Architecture:** Pre-structured directories for isolated UI components, distinct sections, and isolated server/client boundaries.
- 📝 **100% Type-Safe:** End-to-end type safety from the database schema to the front-end components.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/master-boilerplate.git my-app
cd my-app
```

### 2. Install dependencies

```bash
npm install
# or yarn install / pnpm install
```

### 3. Environment Variables

Rename `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=your_supabase_postgres_connection_string
```

### 4. Database Setup (Drizzle ORM)

Push your initial database schema to Supabase:

```bash
npx drizzle-kit push
```

*Note: The schema is located at `src/db/schema.ts`.*

### 5. Start the Development Server

```bash
npm run dev
```

Your app will be running at [http://localhost:3000](http://localhost:3000).

---

## Architectural Guidelines

To maintain the integrity of this boilerplate, please adhere to the following rules:

### Directory Structure
- `src/app/`: Next.js layouts, pages, and API routes.
- `src/components/ui/`: Reusable, atomic components built with Shadcn.
- `src/components/sections/`: Large logical blocks (Hero, Navbar, Footer). Always import these into your pages.
- `src/lib/supabase/`: Supabase client configurations (`server.ts`, `client.ts`, `middleware.ts`).
- `src/db/`: Database configuration and ORM schemas.
- `src/types/`: Global TypeScript definitions, including `database.ts`.

### Styling Rules
- Adhere to the **8px Grid** for padding/margins (e.g., `p-4`, `p-8`, `gap-8`).
- Use `text-balance` and `tracking-tight` on headings for a premium presentation.
- Use the `glass` utility class for sleek, frosted-glass components.

---

## Contributing

Contributions are always welcome! Feel free to open an issue or submit a pull request if you want to improve the boilerplate.

## License

This project is free and open-source software licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software for any purpose, including commercial applications.
