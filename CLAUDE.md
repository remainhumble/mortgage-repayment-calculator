# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## AI Assistant Behavior

This project uses AGENTS.md as the source of truth for AI assistant behavior. See ./AGENTS.md for detailed instructions on how to provide guidance appropriate for this Frontend Mentor learning challenge.

## Development Commands

```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run deploy   # Build and deploy to GitHub Pages
```

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** - dev server and build tool
- **Tailwind CSS 4** - styling with custom CSS theme variables in `src/index.css`
- **react-hook-form** - form state management

## Architecture

```
src/
├── main.tsx        # Entry point, renders App into #root
├── App.tsx         # Root component, lays out Calculator + Results side-by-side
├── Calculator.tsx  # Mortgage input form with react-hook-form
├── Results.tsx     # Displays calculation results (currently empty state)
└── index.css       # Global styles, Tailwind imports, CSS custom properties
```

### Component Structure

- **App.tsx**: Flex container that arranges Calculator and Results horizontally on desktop (lg breakpoint), vertically on mobile
- **Calculator.tsx**: Form with mortgage amount, term, interest rate, and mortgage type (repayment vs interest-only) radio buttons
- **Results.tsx**: Shows empty state illustration; will display calculated monthly/total repayments

### Styling Approach

Custom CSS theme variables are defined in `src/index.css` using Tailwind v4's `@theme` directive:
- Colors: white, slate variants (100, 300, 500, 700, 900), lime (accent)
- Font: Plus Jakarta Sans (500, 700 weights)

Components use a mix of Tailwind utility classes and custom CSS classes defined in `index.css` (e.g., `.left-addon`, `.right-addon`, `.calculate-btn`).

## Design Specifications

See `style-guide.md` for:
- Breakpoints: Mobile 375px, Desktop 1440px
- Color palette (HSL values)
- Typography specs

Design previews available in `design/` folder (JPG format).