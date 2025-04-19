# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.5.3] - YYYY-MM-DD
### Added
- Scrambling text animation effect to the hero section tagline.
- Stop and restart controls for the hero section animation, including tooltips.
- Live region announcements and sr-only instructions for Experience and Services accordions (35c5532).
- Pronunciation hint (`aria-label`) for "Lab 829" in Experience accordion (35c5532).
- Dedicated icon column with tooltips for confidential projects in the Projects table (3957737).
- Astro link in the footer (39e94a9).
- Mobile navigation opening/closing animations (277cc0c, 8d44b84).
- Custom color palette (gray, beige, brand-red) added to Tailwind theme (1fdadc4).

### Fixed
- **Accessibility:**
  - Refactored Experience and Services accordions for improved screen reader experience (removed double reading, clarified labels using `aria-labelledby`, simplified announcements) (35c5532).
  - Ensured consistent focus styles (square, black/white rings, removed default outlines) across numerous elements:
    - Accordion headers (Experience, Services) (35c5532, b1158b0, 5419dd7)
    - Animation control buttons & tooltips
    - Hamburger menu & close button
    - Profile buttons (Resume, LinkedIn, GitHub) (7366b55)
    - Project table links & Load More button (f4bc236, 1604f15)
    - Footer links (a0bc323, 5419dd7)
    - Contact links (84285d5)
    - Skip to content link (447fb60)
  - Added missing ARIA roles/labels for project requirement icons (5ff4388).
- **Accordion Functionality:**
  - Resolved double-click/focus listener issue in Experience accordion (2ac32ab).
  - Prevented potential JS error with null checks in Services accordion (0191d59).
- **Build/Dependencies:**
  - Corrected JavaScript scope issue causing build errors in `Experience.astro`.
  - Fixed import paths for moved components in Sandbox page (80a07af).
  - Removed usage of undefined experimental components in Sandbox page (f6ee5b3).
- **Styling/Layout:**
  - Updated project names for clarity (Fintech Product Architecture, System Design) (6b5e2ef).
  - Adjusted project table header padding (77c69e9).
  - Improved project table mobile view ('Made At' formatting, display service provided) (8700ceb, 801e803).
  - Updated project table text colors/fonts for readability (cf365a7).
  - Restored Experience component rendering on index page (d277a5e).

### Changed
- Refactored accordion components (`Experience.astro`, `Services.astro`) accessibility implementation (35c5532).
- Simplified "Load More" functionality in Projects table to use server-rendering and CSS toggling (df26450, 3957737).
- Optimized mobile navigation animations for performance and UX (135f397, 8d44b84).
- Replaced inline styles with Tailwind classes in About, Services, and Benefits sections (968f389).

### Removed
- Experimental accessibility testing setup (`@guidepup/virtual-screen-reader`, `puppeteer`, test script, test page) (da338ba).
- Unused `resume.txt` file (fc69c8f).
- Unused section components (Pricing, DualCards, StatsCards, Palette) moved to `src/experiments` (2046977).
- `experiments.astro` page moved out of `src/pages` to `src/experiments` (4831910).

## [1.5.2] - Previous Date
### Added/Fixed/Changed
- ... (Add details from previous releases here if known)

## [1.5.1] - Previous Date
- ...

## [1.5.0] - Previous Date
- ...

## [1.0.0] - Initial Release Date
- Initial project setup with Astro and Tailwind.
- Basic sections (Hero, About, Experience, Services, Contact).
- Light/Dark mode functionality.

[Unreleased]: https://github.com/julianpinedayyz/portfolio/compare/v1.5.3...HEAD
[1.5.3]: https://github.com/julianpinedayyz/portfolio/compare/v1.5.2...v1.5.3
[1.5.2]: https://github.com/julianpinedayyz/portfolio/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/julianpinedayyz/portfolio/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/julianpinedayyz/portfolio/compare/v1.0.0...v1.5.0
[1.0.0]: https://github.com/julianpinedayyz/portfolio/releases/tag/v1.0.0