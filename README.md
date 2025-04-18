# Julian Pineda Portfolio

This is the repository for my personal portfolio website, built with Astro and Tailwind CSS.

## Features

- 🚀 Built with Astro for optimal performance
- 🎨 Styled with Tailwind CSS
- 🌙 Light and dark mode toggle
- 📱 Fully responsive design
- 🧩 Component-based architecture
- ⚡ Fast loading and rendering

## Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/julianpinedayyz/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

**Note:** Due to the configuration for GitHub Pages deployment (`base: '/portfolio'`), the local development server serves the site at `http://localhost:3000/portfolio/`.

4. Open your browser and visit `http://localhost:3000`

## Building for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # UI components
│   │   └── sections/ # Website sections
│   ├── layouts/      # Page layouts
│   ├── pages/        # Pages
│   ├── styles/       # Global styles
│   └── utils/        # Utility functions
└── package.json
```

## Customization

- Edit content in the section components under `src/components/sections/`
- Modify styles in `src/styles/global.css` and Tailwind configuration in `tailwind.config.cjs`
- Update site metadata in `src/layouts/Layout.astro`

## License

MIT

---

Built with ♥ by Julian Pineda

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the `main` branch.