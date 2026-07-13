# Sang-Druk Tibetan Herbal Clinic

Sang-Druk Tibetan Herbal Clinic is a responsive website for sharing information about Tibetan medicine, Sowa Rigpa healing traditions, clinic services, herbal products, and patient contact options.

The project is built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui components, and React Router.

## Features

- Responsive homepage for Sang-Druk Tibetan Herbal Clinic
- About pages for clinic background, Tibetan medicine history, Four Tantras, Medicine Buddha, and related topics
- Services and treatment information
- Product pages for skincare, health drinks, and incense
- Contact page and WhatsApp inquiry support
- Reusable UI components with Tailwind CSS and shadcn/ui
- Client-side routing with React Router

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui and Radix UI
- React Router DOM
- TanStack React Query
- Vitest
- ESLint

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed on your machine.

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

After starting the dev server, open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Builds the project for production.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

```bash
npm run test
```

Runs the test suite with Vitest.

## Project Structure

```text
src/
  assets/        Static images and media
  components/    Shared UI and page sections
  hooks/         Custom React hooks
  lib/           Utility functions
  pages/         Route pages
  pages/products Product category pages
```

## Main Routes

- `/` - Home
- `/about-sangdruk` - About Sang-Druk
- `/tibetan-medicine` - Tibetan medicine overview
- `/services-treatments` - Services and treatments
- `/contact` - Contact page
- `/about/who-we-are` - Who we are
- `/about/why-choose-us` - Why choose us
- `/about/history-tibetan-medicine` - History of Tibetan medicine
- `/about/development-in-exile` - Development in exile
- `/about/four-tantras` - Four Tantras
- `/about/medicine-buddha` - Medicine Buddha
- `/products/skincare` - Skincare products
- `/products/drinks` - Health drinks
- `/products/incense` - Incense products

## Build

To create a production build:

```bash
npm run build
```

The generated files will be placed in the `dist` folder.

## License

This project is private and maintained for Sang-Druk Tibetan Herbal Clinic.

