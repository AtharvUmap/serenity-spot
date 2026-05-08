# The Serenity Spot, Site Template

A multi-page static website template for a Social Action capstone project on a campus greenspace + student mental health initiative. Built with plain HTML and Tailwind CSS (Play CDN), no build step.

## Pages

| File              | Page                       | Purpose                                                                 |
| ----------------- | -------------------------- | ----------------------------------------------------------------------- |
| `index.html`      | Home                       | Mission, hook, project summary, stats                                   |
| `issue.html`      | The Issue                  | Mental-health research, Nature Deficit, data, media repository (modals) |
| `framework.html`  | Social Change Framework    | 8Cs grid, Social Change Wheel, Roles in Ecosystem                       |
| `action.html`     | The Action Plan            | Semester timeline, partner orgs, before/after photos, insights          |
| `involved.html`   | Get Involved               | Three CTAs (modals), 8-step Starter Kit (accordion), local resources    |
| `reflection.html` | Reflection                 | Personal blog-style entries + meaning-making                            |

Plus shared assets:
- `assets/styles.css`, colors, fonts, decoration, modal & timeline styling
- `assets/main.js`, mobile nav, modal open/close, active nav highlighting

## How to use

### 1. Preview locally
The site is fully static. The simplest way to preview:
```bash
cd /Users/atharvumap/Documents/Projects/social-action-hub
python3 -m http.server 8000
```
Then visit <http://localhost:8000>.

(Opening `index.html` directly in a browser via `file://` also works, but a local server avoids edge cases with relative paths.)

### 2. Fill in the placeholders
Anywhere you see square brackets `[like this]` is a slot for your content. The placeholders are intentionally specific, each one tells you what kind of thing to put there (a stat, a quote, a partner name, a paragraph). Two patterns to watch for:

- `[Insert your example, e.g. ...]`, replace with your project's specific story
- `<span class="placeholder-label">…</span>`, image placeholders. Drop an `<img>` in place of the `placeholder-leaf` div, or upload your photos into `/assets/img/` and reference them.

### 3. Project name
The template uses **The Serenity Spot** throughout. To rename, find-and-replace `The Serenity Spot` across all `.html` files.

### 4. Customize colors / fonts
Edit the `tailwind.config` block in each page's `<head>`, or, for shared decoration, edit `assets/styles.css`. Current palette:

| Token  | Hex       | Where used                            |
| ------ | --------- | ------------------------------------- |
| sage   | `#718355` | primary brand color                   |
| earth  | `#926c44` | accent, callouts                      |
| sky    | `#a8dadc` | soft accent, calm sections            |
| cream  | `#f8f9fa` | page background                       |

Headings: **Cormorant Garamond** (serif) · Body: **Inter** (sans).

## Tips for filling it in well

- **Frameworks page (`framework.html`)** is the one that shows depth of engagement with the course material. Be specific: name the partner, name the moment, name the role-holder. The placeholder text gives examples of the *kind* of specificity to aim for.
- **Action Plan timeline** works best when each entry has a concrete artifact (a photo, a quote, a number). Vague summaries read as if the work didn't happen.
- **Reflection** is meant to be uneven and honest. Don't tidy it up too much, the value is in showing thought, not polish.

## Deployment

Any static host will do, GitHub Pages, Netlify drop, Vercel, your campus web server. Drag the folder in.

## Accessibility notes

- Skip-to-content link on every page
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`)
- Modals trap focus, close on Esc, and restore focus on close
- Focus-visible outlines on all interactive elements
- Color contrast tested for the sage / cream / earth combinations used on text

## Footer mental-health resources

The footer links to: 988 Lifeline, NAMI, Active Minds, The Jed Foundation, Crisis Text Line. Add or swap as appropriate for your campus and region.
