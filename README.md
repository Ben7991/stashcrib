# StashCrib

StashCrib is a fashion e-commerce application where customers discover and purchase considered wardrobe pieces—outerwear, knitwear, and shirting—with a calm, editorial shopping experience.

## Project idea

StashCrib is built as a direct-to-customer brand, not a generic marketplace. The product story centers on **what clothes are made from** and **how long they last**: customers can browse by cloth (wool, cotton drill, merino), read clear product detail (fit, size, materials), and understand policies around delivery, returns, and **free repair for the first two years**. The in-app copy and layout reflect a studio in Porto and a small, intentional catalogue rather than endless SKUs.

**Customer experience (frontend today):**

- **Landing** — hero storytelling, shop-by-cloth tiles, new arrivals, and repair as a brand promise.
- **Shop** — new-arrivals listing with category chips and refine controls (cloth, size, price, sort).
- **Product** — image gallery, cloth and size selection, quantity, add to bag, and “wear it with” pairings.

**Current scope:** This repository is a **monorepo frontend** with mock catalog data in `@repo/ui`. Checkout, payments, inventory, authentication, and a real cart API are not implemented yet—they are the natural next steps toward a full purchase flow.

## Repository layout

This project uses [Turborepo](https://turbo.build) with npm workspaces.

| Path | Role |
|------|------|
| [`apps/web`](apps/web) | Customer-facing React app (Vite): routes and page composition |
| [`packages/ui`](packages/ui) | Shared components, design tokens, and catalog types/data |
| [`packages/eslint-config`](packages/eslint-config) | Shared ESLint configuration |
| [`packages/typescript-config`](packages/typescript-config) | Shared TypeScript `tsconfig` bases |

Pages in `apps/web` compose UI from `@repo/ui`; presentation and reusable building blocks live in the UI package.

## Routes

| Path | Page |
|------|------|
| `/` | Landing |
| `/shop` | Listing (new arrivals) |
| `/products/:slug` | Product detail |

## Getting started

**Prerequisites:** Node.js `>=24.20.0`, npm (workspaces).

From the repository root:

```sh
npm install
npm run dev
```

Other scripts:

```sh
npm run build   # production build (Turbo)
npm run lint    # ESLint across packages
npm run format  # Prettier
```

The dev server runs the `web` app; open the URL Vite prints in the terminal (typically `http://localhost:5173`).

## Design

The storefront UI is implemented from the **StashCrib — Design System** file in [Paper](https://paper.design). CSS custom properties in [`packages/ui/styles/tokens.css`](packages/ui/styles/tokens.css) mirror the design tokens (typography, color, spacing) so the app stays aligned with the canvas.

## Tech stack

- Turborepo, npm workspaces
- React 19, Vite, TypeScript
- React Router
- Component-level CSS and shared design tokens (no Tailwind in this repo)
