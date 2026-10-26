# Reverse-Engineering Learning Notes: The GATE Grind Demo

This guide explains how an AI coding agent analyzes, reverse-engineers, and reconstructs a high-fidelity frontend prototype of an existing website (**[The GATE Grind](https://thegategrind.online/)**) within a fast 60-minute time budget.

---

## 1. How the Website Was Inspected

The reverse-engineering workflow followed a disciplined, non-destructive, phased pipeline:

1. **Initial Protocol Probe & Static Discovery**:
   - Used `read_url_content` to fetch the live document from `https://thegategrind.online/`.
   - Extracted key metadata from `<head>`: Vite bundler asset hashes (`/assets/index-*.js`, `/assets/index-*.css`), Google Fonts declarations (`JetBrains Mono`, `Jersey 10`, `Caveat`, `Inter Tight`), and the theme flash-prevention script inspecting `localStorage.getItem('pyq-gate-theme')`.
2. **Visual & Behavioral Inspection via Browser Automation**:
   - Deployed the `browser_subagent` to open `https://thegategrind.online/` in an actual Chrome browser instance.
   - Captured full-resolution reference screenshots of:
     - The top hero layout (dark theme, tilted folder badges, dot-matrix pattern, retro pixel badge `ORGANIZED.`, brand logo with blinking terminal cursor `_`).
     - Scrolled section (split 5-step preparation manifesto + neo-brutalist graph paper containing 6 pastel sticky notes).
     - The `/pyq` catalog view (two-column branch cards, alphabet filters `A B C D E I M P S`, search bar, yellow callout sticky).
     - The interactive question solver view (breadcrumb hierarchy, question stem, options, and collapsible step-by-step worked explanation).
3. **Synthesis & Evidence Documentation**:
   - Created `docs/reverse-engineering-notes.md` categorizing direct observations, inferences, unknowns, and implementation decisions before writing any prototype code.

---

## 2. Tools & MCP Servers Used

| Tool / MCP Resource | Role in the Workflow | Why It Was Chosen |
| :--- | :--- | :--- |
| `read_url_content` | Rapid HTTP extraction of raw HTML, scripts, metadata, and fonts | Fast, lightweight, zero headless browser overhead for initial DOM discovery |
| `browser_subagent` | Interactive visual navigation, clicking, DOM inspection, screenshot capture | Allows observing rendered CSS, animations, hover states, accordion clicks, and taking visual reference proofs |
| `reverse-engineer-anything` (REA Skill) | Systematic reverse-engineering methodology | Establishes the rule of evidence: separate observed facts from inferences, maintain an evidence trail |
| `run_command` | Local runtime verification and background daemon server hosting | Runs Python's built-in `http.server` daemon on `http://localhost:3000` with zero external dependencies |
| `view_file` & `write_to_file` | Codebase inspection, image binary viewing, and file generation | Rapid creation of modular HTML, CSS, JavaScript, and JSON datasets |

---

## 3. Converting Observations into Code

### Visual Tokens & Typography
- **Monospace Core**: The target website uses `JetBrains Mono` for body text, headers, and UI controls. We imported `JetBrains Mono` directly from Google Fonts.
- **Retro Pixel Accent**: The iridescent pixel word `ORGANIZED.` was matched using the `Jersey 10` Google Font combined with a linear rainbow pastel gradient clipped to text (`-webkit-background-clip: text; -webkit-text-fill-color: transparent`).
- **Terminal Aesthetics**: The logo `THE GATE GRIND_` features a blinking terminal cursor styled via a CSS `@keyframes` step animation.
- **Neo-Brutalist & Graph Paper**: The graph paper container was constructed using dual linear-gradient CSS grid patterns (`16px 16px`) with high-contrast borders and solid offset box shadows (`8px 8px 0px #18181b`).

### Interactive Architecture
- **CSS Variable Design Tokens**: All colors (`--bg-page`, `--bg-surface`, `--text-main`, `--border-strong`, `--shadow-brutal`) switch dynamically when `html.dark` is toggled.
- **Dynamic Branch Filtering**: Filter algorithm handles simultaneous alphabet chip selection (`A`, `B`, `C`, etc.) and fuzzy text search across branch names, codes, and subject descriptions.

---

## 4. Code Structure & Key Files

The prototype is organized cleanly with zero bloated dependencies:

```
d:/projects/rea/
├── index.html                  # Semantic structure (Header, Hero, Manifesto, Catalog, Solver, Mascot, Footer)
├── styles.css                  # Custom CSS design system, dark/light theme tokens, animations, responsive layout
├── app.js                      # Application controller: theme toggle, search/filtering, solver engine, mascot tour
├── server.py                   # Lightweight local HTTP server (Python 3 http.server with CORS & no-cache headers)
├── package.json                # Project metadata & npm scripts
├── data/
│   ├── branches.json           # Catalog of 22 GATE engineering branches (AE, CS-IT, DA, EC, EE, ME, etc.)
│   └── questions.json          # Authentic solved GATE questions with step-by-step worked explanations
└── docs/
    ├── reverse-engineering-notes.md # Systematic observations, inferences, and architectural mapping
    └── learning-notes.md            # This educational reverse-engineering walkthrough
```

---

## 5. Working Features vs. Mocked Elements

| Component / Feature | Implementation Status | Behavior Details |
| :--- | :--- | :--- |
| **Theme Switcher** | **Fully Functional** | Instant toggle between Light and Dark mode with `localStorage` persistence and sliding toggle animation. |
| **Branch Search & Alphabet Filter** | **Fully Functional** | Real-time filtering of 22 branch cards by search query or alphabet chip (`All`, `A`, `B`, `C`, `D`, `E`, etc.). |
| **Interactive Question Solver** | **Fully Functional** | Clickable options (A, B, C, D) with immediate answer grading (green/red feedback), Next/Prev navigation across multiple real GATE questions, and collapsible worked explanation accordion. |
| **Hero Branch Selector & Ticker** | **Fully Functional** | Clicking branch ticker items or the hero branch headline cycles branches dynamically across the page. |
| **Interactive Mascot ("Gritty")** | **Fully Functional** | 8-bit retro crab guide with multi-step interactive onboarding tour, Next, Skip, and Hide/Show toggles. |
| **Interactive Sticky Notes** | **Fully Functional** | Hover animations (lift and translate) and click-to-jump navigation to corresponding modules. |
| **User Authentication / Syncing** | **Mocked / Demo Modal** | Clicking "Sign In" opens a modal explaining device sync without requiring a backend database. |
| **Full 15,000 Question Corpus** | **Curated Sample (3 questions)** | Realistic solved sample dataset covering General Aptitude, Binary Search Trees, and Semaphores. |

---

## 6. How You Can Run and Modify the Prototype

### Running Locally
The prototype is currently running at:
```
http://localhost:3000/
```
You can also launch it anytime using either:
```bash
# Option A: Python HTTP server
python server.py

# Option B: Any static file server or opening directly
start index.html
```

### Extending or Customizing
1. **Add More Questions**:
   Open [data/questions.json](file:///d:/projects/rea/data/questions.json) and add another question object containing `id`, `paper`, `subject`, `text`, `options`, `correct`, and `explanation`.
2. **Add New Branches**:
   Open [data/branches.json](file:///d:/projects/rea/data/branches.json) to add new disciplines or adjust paper count metadata.
3. **Adjust Aesthetics or Themes**:
   Edit CSS variables at the top of [styles.css](file:///d:/projects/rea/styles.css) (`:root` for Light mode, `html.dark` for Dark mode).
