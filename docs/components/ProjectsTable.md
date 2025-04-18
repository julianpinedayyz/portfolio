# ProjectsTable Component

The ProjectsTable component displays a comprehensive list of projects with their details and access requirements. It's designed to be both visually appealing and accessible, following WCAG guidelines.

## Access Requirement Indicators

The component uses a set of icons to indicate different access requirements for projects:

### 1. Canada-Only Access (🌍)
- **Visual Indicator**: Location pin icon
- **Meaning**: Project is only accessible from Canadian locations
- **Requirements**: VPN connection required for access outside Canada
- **Accessibility**: Screen readers announce "Canada site only. VPN required."

### 2. Authentication Required (🔑)
- **Visual Indicator**: Key icon
- **Meaning**: Project requires authentication
- **Requirements**: Internal access or login credentials needed
- **Accessibility**: Screen readers announce "Internal site or authentication required."

### 3. Confidential Project (🔒)
- **Visual Indicator**: Lock icon in red (#F46665)
- **Meaning**: Project is confidential
- **Requirements**: Special access permissions required
- **Accessibility**: Screen readers announce "Confidential Client"

## Accessibility Features

1. **Screen Reader Support**:
   - Icons container uses `role="list"` with descriptive `aria-label`
   - Each indicator is a `role="listitem"` for proper list navigation
   - SVG icons are marked as `aria-hidden="true"`
   - Tooltips use `role="tooltip"` with descriptive `aria-label`

2. **Keyboard Navigation**:
   - All interactive elements are focusable
   - Focus indicators are visible with high contrast
   - Tooltips are accessible via keyboard focus

3. **Visual Accessibility**:
   - High contrast colors for better visibility
   - Icons have sufficient size for clarity
   - Tooltips provide text alternatives for icons

## Usage

```astro
---
import ProjectsTable from '../components/sections/ProjectsTable.astro';
---

<ProjectsTable />
```

## Project Data Structure

Projects should follow this data structure in your projects data file:

```typescript
interface Project {
  project: string;
  link?: string;
  madeAt: string;
  serviceProvided: string[];
  year: number;
  canadaOnly?: boolean;
  authRequired?: boolean;
  confidential?: boolean;
}
```