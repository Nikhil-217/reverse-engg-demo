# Rapid Website Reverse-Engineering Notes: The GATE Grind
**Target**: [https://thegategrind.online/](https://thegategrind.online/)  
**Date**: October 2026  
**Investigator**: Antigravity REA Agent  

---

## 1. What Was Observed Directly

### 1.1 Architecture & Tech Stack Evidence
- **Framework & Bundler**: Vite + React SPA.
  - Manifest scripts observed in HTML head:
    - `/assets/index-JTmGFAA4.js`
    - `/assets/jsx-runtime-B-8nPM94.js`
    - `/assets/listColors-DTzDw3hU.js`
    - `/assets/index-DgDUOT9-.css`
- **Fonts Loaded via Google Fonts CDN**:
  - `JetBrains Mono:ital,wght@0,400;0,500;0,600;0,700;1,500`
  - `Jersey 10` (used for the retro pixel text "ORGANIZED.")
  - `Inter Tight:wght@500`
  - `Caveat:wght@600;700` (used for handwritten-style sticky note cues and annotations)
- **Root Mount**: `<div id="root">` with light/dark theme flash-prevention script inside `<head>` inspecting `localStorage.getItem('pyq-gate-theme') === 'dark'`.
- **CSS Architecture**:
  - Utility/Tailwind-like layer `@layer base`.
  - Body default color `#7f7f7f` or `#444`, background `#fff`.
  - Dark mode activated via class `html.dark` with body background `#111` or `#111111` and theme-color meta `#111111`.

### 1.2 Layout & Visual Hierarchy
1. **Header & Navigation Bar**:
   - Left brand: `THE GATE GRIND_` (monospace with yellow/accent terminal cursor prompt).
   - Center navigation pills: `Home`, `PYQs`, `Syllabus`, `Tests`, `Aptitude`, `Plan`, `Lists`. Active item has high-contrast inverted pill highlight.
   - Right utility items: Dual toggle switch (`LIGHT` / `DARK`) with animated toggle thumb, followed by rounded border `SIGN IN` button.
2. **Hero Section (Visual Punch)**:
   - Deep charcoal/black (`#111111`) dot matrix background (`radial-gradient` dots).
   - Floated, tilted folder icons on left flank:
     - Blue folder `PYQs` (~ -12deg rotation)
     - Indigo folder `Mock Tests` (~ -6deg rotation)
     - Cyan folder `Checkpoints` (~ -8deg rotation)
   - Headline: Monospace/Inter `Everything you need for` + vibrant cyan `Aerospace, ` + pixelated 8-bit `ORGANIZED.` (using `Jersey 10` font).
   - Subtitle: Clean two-line monospace statement: *"PYQs, syllabus, checkpoints, test series for all branches, aptitude and a study plan, all in one place. Free, no sign-up."*
   - CTA Buttons:
     - Primary: `START PRACTISING ->` (solid white button, black text, bold pill border).
     - Secondary: `▶ WATCH THE DEMO 85 SEC` (dark pill, white text & outline).
   - Stats row: `15,130 QUESTIONS · 230 PAPERS · 2010-2026`.
   - Branch ticker line: `AE / AG / AR / BM / BT / CE / CH / CS / CY / DA / EC / EE / ES / IN / MA / ME / MN / MT / PH / PI / ST / XH2 / XH5`.
3. **Mid-page Manifesto & Interactive Sticky Notes**:
   - Two-column split layout on light background:
     - Left column: 5-step preparation philosophy (1. Find what matters, 2. Learn it from your own resource, 3. Clear the checkpoint, 4. Practise the PYQs, 5. Your own weak points).
     - Right column: "Notebook / Graph paper" bordered container with drop shadow containing 6 colorful pastel sticky notes:
       - `01 Previous-year questions` (Lavender `#e9d8fd`)
       - `02 Checkpoints` (Sky Blue `#bee3f8`)
       - `03 Test centre` (Mint Green `#c6f6d5`)
       - `04 Aptitude` (Pastel Pink `#fed7e2`)
       - `05 Weak points` (Soft Yellow `#fefcbf`)
       - `06 Your plan` (Peach `#feebc8`)
       - Caption: `TAP A NOTE TO JUMP IN`.
4. **Previous Years (`/pyq`) & Branch Directory**:
   - Header: `PREVIOUS YEARS`.
   - Toggle buttons: `[BY PAPER]` vs `[BY SUBJECT]`.
   - Live Search: Search bar with `Search all questions` and `[ SEARCH ]` trigger.
   - Alphabetical jump filters: `A  B  C  D  E  I  M  P  S`.
   - 2-Column Branch Cards: High-contrast wireframe cards with branch badge (`[ CS-IT ]`, `[ DA ]`, `[ EC ]`), branch name, papers count (`27 PAPERS · 2010-2026`), and arrow `->`.
   - Yellow Callout Note: `NEW Done with the PYQs? Take a timed subject test... [TRY ONE ->]`.
5. **Question & Solver View (`/pyq/CS/2024/1`)**:
   - Breadcrumb navigation (`Home > Previous year questions > GATE 2024 CS (CS1) > Question 1`).
   - Question header with metadata tags (Subject, Topic, Mark, Question Type).
   - Question stem with options (A, B, C, D).
   - "Practise this question in The GATE Grind ->" button.
   - Collapsible Accordion: `▶ Show answer and explanation` expanding to reveal correct key and clear worked step-by-step reasoning.
6. **Mascot & Delight Features**:
   - 8-bit retro crab guide: "Gritty, the crab guide" in bottom corner with interactive dialogue bubble and skip/next controls.

---

## 2. What Was Inferred

- **State Management**: Client-side routing with React Router, lightweight state handling (likely React `useState` / `useEffect` + LocalStorage for branch preferences, completed test scores, and theme selection).
- **Backend Architecture**: The site operates primarily as a static frontend consuming structured JSON datasets of past questions, subjects, and papers. The metadata and questions can be served statically without requiring a heavy relational database backend for basic practice.
- **Responsive Strategy**: Fluid container with `max-width: 1200px` for catalog views and `760px` for focused reading/question practice views, collapsing to single-column flex/grid on mobile viewports (<768px).

---

## 3. What Remains Unknown

- Exact backend endpoint for tracking user progress or account syncing (the banner mentions "Want it remembered? An account keeps your branch...").
- Exact total question count in database (headline states 11,000+ or 15,130 questions).
- Complete set of timed mock exam rules (timer penalties, negative marking scoring algorithms).
- These unknowns do not block building an authentic, high-fidelity frontend prototype.

---

## 4. How Observations Influence the Prototype Implementation

1. **Aesthetic Fidelity**:
   - Exact monospace typography via `JetBrains Mono` combined with pixelated font for the retro badge/hero accent.
   - Dual theme support: Dark mode (matrix dot grid, `#111` background, vibrant cyan highlights) and Light mode (crisp `#ffffff` / `#fbfbfa` with dark border accents).
   - Sticky note color palette and graph paper grid styling.
2. **Selected Core Functional Interactions (3 to 5 Features)**:
   1. **Interactive Theme Switcher**: Instant switch between Light and Dark mode with persistence in `localStorage`.
   2. **Live Branch Search & Alphabet Filtering**: Real-time filtering of the 20+ engineering branches by keyword and alphabet chips (`A`, `B`, `C`, etc.).
   3. **View Navigation & Interactive Sticky Notes**: Seamless switching between the Hero Overview, "Previous Years" Branch Catalog, and Question Solver. Clicking sticky notes jumps directly to the corresponding module.
   4. **Interactive Question Practice Engine**: Real GATE question with interactive option selection, immediate evaluation, collapsible step-by-step worked explanation, and Next/Previous navigation.
   5. **Interactive "Gritty, the Crab Guide"**: Interactive retro mascot widget with tour dialogues, toggleable visibility, and step progression.
