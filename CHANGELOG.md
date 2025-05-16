# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Apple touch icon precomposed variant for better compatibility with older iOS versions (8ab97c1).
- Utility functions for safer DOM manipulation (12caf99).

### Fixed

- **Security:**
  - Added Cross-Origin-Opener-Policy header to prevent clickjacking (e1f2e76).
  - Implemented Content-Security-Policy with frame-ancestors directive for enhanced security (e1f2e76).
  - Fixed CSP configuration to properly allow external fonts (12caf99).
  - Removed frame-ancestors directive from meta tag CSP (only works in HTTP headers) (12caf99).
  - Updated CSP to allow font-src with data: URI scheme for better font loading (6de83e0).

- **Performance:**
  - Implemented efficient cache policy for static assets with long TTL values (e1f2e76).
  - Optimized font loading to eliminate render-blocking resources (e1f2e76).
  - Removed render-blocking Google Fonts import from global CSS (e1f2e76).

- **Accessibility:**
  - Fixed H1UserAgentFontSizeInSection warning by using Tailwind classes instead of pixel values in Hero component (12caf99).
  - Fixed H1UserAgentFontSizeInSection warning by using responsive font sizes in 404 page (8188eb6).
- **JavaScript Robustness:**
  - Added defensive null checks to prevent potential errors in component scripts (d61b6c8).
  - Optimized accordion functionality in Experience component (d61b6c8).
  - Improved scrolling behavior with proper offset calculations (d61b6c8).
  - Enhanced accessibility for interactive elements (d61b6c8).
  - Added comprehensive null checks to Sandbox component to prevent classList errors (7c51f57).

## [1.5.6] - 2025-04-20
### Added
- Enhanced impact section in Experience component with visually distinct stat cards for each metric type
- Implemented different visualizations based on impact type:
  - Users: Donut chart with centered value and label below
  - Revenue: Value with line graph visualization
  - Percentage: Large percentage display with "+" prefix for positive values
  - Standard: Basic card with value and label

### Changed
- Repositioned the impact section below the image in the Experience component's left column
- Created a parent container "left-column" to encapsulate both the image and impact section
- Optimized impact card layout for different screen sizes with responsive grids

### Fixed
- Modified item-expander tag from self-closing `<div />` to properly closed `<div></div>`
- Fixed item-expanded CSS by removing `position: absolute` property for better cross-browser compatibility
- Enhanced responsive layout for impact cards with bottom-aligned labels on smaller screens
- Improved Chrome rendering consistency by refining HTML structure

## [1.5.5] - 2025-04-19
### Fixed
- Resolved hero section tagline animation positioning issue observed in Safari browsers by refactoring container structure and CSS height management (cfed8a0).

## [1.5.4] - 2025-04-19
### Removed
- Custom HTML/CSS tooltips from hero animation controls (`ScramblingTextScript.astro`).

### Fixed
- Rely on native browser `title` attribute for tooltips on hero animation controls for simplicity.

## [1.5.3] - 2025-04-19
### Added
- Scrambling text animation effect to the hero section tagline.
- Stop and restart controls for the hero section animation.
- Live region announcements and sr-only instructions for Experience and Services accordions (35c5532).
- Pronunciation hint (`aria-label`) for "Lab 829" in Experience accordion (35c5532).

### Fixed
- **Accessibility:**
  - Refactored Experience and Services accordions for improved screen reader experience (removed double reading, clarified labels using `aria-labelledby`, simplified announcements) (35c5532).
  - Ensured consistent focus styles (square, black/white rings, removed default outlines) across numerous elements (Accordions, Animation controls, Hamburger, Profile buttons, Project table, Footer links, Contact links, Skip link) (Various commits, see v1.5.1 details).
- **Accordion Functionality:**
  - Resolved double-click/focus listener issue in Experience accordion (2ac32ab).
- **Build/Dependencies:**
  - Corrected JavaScript scope issue causing build errors in `Experience.astro`.

### Changed
- Refactored accordion components (`Experience.astro`, `Services.astro`) accessibility implementation (35c5532).

### Removed
- Experimental accessibility testing setup (`@guidepup/virtual-screen-reader`, `puppeteer`, test script, test page) (da338ba).

## [1.5.2] - 2025-04-18
### Fixed
- Increased underline offset on project links in the Projects table for better visual separation (a161645).

## [1.5.1] - 2025-04-18
### Added
- Project table icon column with tooltips for confidential projects (3957737).
- Astro link in the footer (39e94a9).
- Mobile navigation opening/closing animations (277cc0c, 8d44b84).
- Custom color palette (gray, beige, brand-red) added to Tailwind theme (1fdadc4).
- CNAME file for custom domain deployment (6eee2f0).

### Fixed
- **Accessibility:** Numerous improvements to focus styles across components (skip link, footer, contact, profile buttons, project links, service accordion) (Various commits: 447fb60, a0bc323, 84285d5, 5419dd7, b1158b0, 7366b55, 1604f15, f4bc236). Enhanced screen reader support for icons/tooltips (5ff4388).
- Updated project details for clarity (TD Canada Trust System Design) (4ead1b5).
- Improved external link icon alignment (0791506).
- Corrected resume PDF file path (7d117a5).
- Prevented potential JS errors in Services accordion and Projects table (0191d59, a590819).
- Resolved build/dependency issues related to moved/experimental components and import paths (f6ee5b3, 80a07af).
- Restored Experience component rendering on index page (d277a5e).
- Various styling fixes in Projects Table (text colors, fonts, padding) (cf365a7, 77c69e9).

### Changed
- Refactored project table loading logic (server-render all, CSS toggle) (df26450, 3957737).
- Optimized mobile navigation animations (135f397, 8d44b84).
- Replaced inline styles with Tailwind classes (About, Services, Benefits) (968f389).
- Updated project names (Fintech Product Architecture, System Design) (6b5e2ef).
- Configured project for GitHub Pages deployment (site URL, base path) (b7dcfb2, 7f7a249).

### Removed
- Unused `resume.txt` file (fc69c8f).
- Unused section components moved to `src/experiments` (Pricing, DualCards, StatsCards, Palette) (2046977).
- `experiments.astro` page moved out of `src/pages` to `src/experiments` (4831910).

## [1.5.0] - 2025-04-18
### Added
- GitHub Actions workflow for automatic deployment to GitHub Pages (fc93bcf).
- Favicon assets and web manifest links (1f8c934, 47e1d90, 740e188).
- Career highlights stats cards component (experimental) (bc99197).
- External data files for Experience and Benefits data (48d96d5, 6d44be6).

### Changed
- Set Astro build output mode to `static` for deployment (0afdc47).
- Refactored Experience data import (95903fa).
- Enhanced Services section accessibility and interactivity (6eb3dfd).
- Updated Benefits section styling (79e4f33).
- Refactored Benefits data import (468cacc).

### Fixed
- Ensured focus remains on "Load More" button correctly (13af224).
- Removed unnecessary aria-labels from social links (6f0e011).
- Improved accessibility focus styles for navigation links and buttons (655f682).
- General accessibility improvements (eea0584, be8c575).

### Removed
- Projects section component and associated data (f432648).
- `projects.astro` page (d78bb47).

### Performance
- Optimized font loading in Layout (3b353ed).

## [1.0.0] - 2025-04-17
### Added
- Initial project setup with Astro and Tailwind.
- Basic sections (Hero, About, Experience, Services, Contact).
- Light/Dark mode functionality.

[Unreleased]: https://github.com/julianpinedayyz/portfolio/compare/v1.5.6...HEAD
[1.5.6]: https://github.com/julianpinedayyz/portfolio/compare/v1.5.5...v1.5.6
[1.5.5]: https://github.com/julianpinedayyz/portfolio/compare/v1.5.4...v1.5.5
[1.5.4]: https://github.com/julianpinedayyz/portfolio/compare/v1.5.3...v1.5.4
[1.5.3]: https://github.com/julianpinedayyz/portfolio/compare/v1.5.2...v1.5.3
[1.5.2]: https://github.com/julianpinedayyz/portfolio/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/julianpinedayyz/portfolio/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/julianpinedayyz/portfolio/compare/v1.0.0...v1.5.0
[1.0.0]: https://github.com/julianpinedayyz/portfolio/releases/tag/v1.0.0