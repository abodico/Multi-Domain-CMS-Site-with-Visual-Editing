# Multi-Tenant CMS Site (Current Version)

A multi-brand marketing website built with **Next.js** and **Payload CMS**, supporting multiple domains from a single codebase.  

> ⚠️ **Note:** This is the current version of the project. **Visual editing with Vercel Visual Editing has not been added yet.** This version serves content from Payload CMS but only supports the normal preview and draft workflow.

---

## Project Overview

This project demonstrates a **multi-domain CMS-driven website** for two brands:

- **Brand A** (`brand-a.local`): Blue theme, English content  
- **Brand B** (`brand-b.local`): Green theme, Arabic content with RTL layout  

Each brand has:

- Home page (`/`)  
- About page (`/about`)  
- Global navigation and footer  
- Content editable via **Payload CMS**  

> ⚠️ Note: The project uses **Material UI** instead of `shadcn/ui` for UI components and theming.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript  
- **CMS:** Payload CMS (self-hosted)  
- **UI Library:** Material UI + Emotion  
- **Styling:** TailwindCSS  
- **Data Fetching:** Axios  

**Dev Dependencies:**

- TypeScript  
- TailwindCSS + PostCSS  
- React & React DOM typings  

---

## Local Setup

### Payload CMS

- Admin: [http://localhost:3000/admin](http://localhost:3000/admin)  
  - Username: `payload@drhus.com`  
  - Password: `LZL4pAScK7L6K9`  

```bash
cd cms
npm install
npm run dev
```

Payload runs on http://localhost:3000.

Frontend (Next.js)
```
cd frontend
npm install
npm run dev
```

Frontend runs on http://localhost:3001.

Brand A: http://brand-a.localhost:3001/

Brand B: http://brand-b.localhost:3001/

Features (Current Version)
-Multi-domain support from a single codebase
-Brand-specific theming (colors, RTL for Brand B)
-Home and About pages per brand
-Shared components (navigation, footer)
-Editable content via Payload CMS (drafts can be previewed, visual editing not yet implemented)
-Responsive layout with Material UI & TailwindCSS

Scripts
```
# Run frontend in development mode
npm run dev

# Build frontend for production
npm run build

# Start production server
npm run start
```

Environment Variables
-Create a .env.local file in the frontend folder:
```
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3000
```

Notes / Decisions
-Material UI vs shadcn/ui: Material UI was chosen for its mature theming system, RTL support, and fast integration with Next.js + Tailwind.
-Visual Editing: Not implemented yet. Current version only supports draft previews from Payload CMS.
-Local multi-domain setup: Use brand-a.localhost:3001 or brand-b.localhost:3001 for brand-specific sites.

License
-MIT License

Resources
-Payload Starter Repo: https://github.com/drhus/payload-starter
-Vercel Template: https://vercel.com/registry-chain/payload-starter
