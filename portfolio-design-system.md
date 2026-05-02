# Portfolio Design System
### Inspired by Constance Souville · Tailored for You

> **How to use this doc:** This is your single reference file for building your portfolio. Every decision — colour, type, layout, motion — is documented here with rationale. Start at the top, work down. The colour section has all 4 palette options; the primary recommendation is marked ★.

---

## 01 · Design Philosophy

The Constance Souville approach can be distilled into one principle:

> **Restraint everywhere, intention in every exception.**

Everything is stripped back — neutral background, minimal colour, no decoration — so that when something *does* break the rules (a coloured nav card, a live clock, an oversized word), it carries enormous weight.

Your version follows the same logic, adapted for your identity as an **Aspiring Frontend Developer**. The editorial sophistication signals taste and craft. The lavender palette gives it a distinct, memorable voice that's still professional.

### Core principles to internalize:
- **Typography IS the layout.** Don't design around text — let text be the structure.
- **Colour has a job.** Every colour on the page must earn its place. No decoration.
- **Motion proves the skill.** Subtle, precise animation is your portfolio within the portfolio.
- **Less copy, more presence.** Don't explain yourself — let the design do the talking.
- **Details are the message.** A live clock, a loaded counter, selective italic letters — micro-details tell visitors you notice things others don't.

---

## 02 · Colour Palettes

Four options are documented below. Swap out the CSS variables in your project to switch between them instantly.

---

### ★ Palette 01 — Bold & Rich *(Primary Recommendation)*

Deep violet background, bright lavender accents, warm cream type. High contrast, dramatic, editorial. Stands out from the sea of dark-grey developer portfolios.

| Role | Name | Hex | Usage |
|---|---|---|---|
| Background | Deep Violet | `#1a0f2e` | Page background |
| Surface | Dark Plum | `#2d1f4a` | Cards, nav tiles |
| Primary Text | Warm Cream | `#f5f0e8` | All headings & body |
| Secondary Text | Lavender Mist | `#c4b5d9` | Meta info, captions |
| Accent 01 | Bright Lavender | `#9b72cf` | Nav card 01 · About |
| Accent 02 | Soft Violet | `#7c5cbf` | Nav card 02 · Projects |
| Accent 03 | Lilac Pop | `#d4b8f0` | Nav card 03 · Contact |
| Hairlines | Subtle Purple | `#3d2a5c` | Horizontal rules, dividers |

```css
/* Palette 01 — Bold & Rich */
:root {
  --color-bg:         #1a0f2e;
  --color-surface:    #2d1f4a;
  --color-text-main:  #f5f0e8;
  --color-text-meta:  #c4b5d9;
  --color-accent-1:   #9b72cf;
  --color-accent-2:   #7c5cbf;
  --color-accent-3:   #d4b8f0;
  --color-rule:       #3d2a5c;
}
```

**The vibe:** Walking into a gallery at night. Quiet luxury. The cream type on deep violet has the same editorial tension as white ink on dark paper — you don't see it often, which is exactly why it works.

---

### Palette 02 — Soft & Dusty

Muted lavender background, warm ivory surfaces, deep plum text. Closer to Constance's sage-grey approach but in the lavender family. Softer, more approachable.

| Role | Name | Hex | Usage |
|---|---|---|---|
| Background | Dusty Lavender | `#c8bfda` | Page background |
| Surface | Warm Ivory | `#f7f3ec` | Cards, nav tiles |
| Primary Text | Deep Plum | `#1e1228` | All headings & body |
| Secondary Text | Muted Mauve | `#6b5880` | Meta info, captions |
| Accent 01 | Dusty Rose | `#e8d5f0` | Nav card 01 · About |
| Accent 02 | Warm Berry | `#8b4a7e` | Nav card 02 · Projects |
| Accent 03 | Gold Wheat | `#d4a843` | Nav card 03 · Contact |
| Hairlines | Plum Rule | `#a090b8` | Horizontal rules |

```css
/* Palette 02 — Soft & Dusty */
:root {
  --color-bg:         #c8bfda;
  --color-surface:    #f7f3ec;
  --color-text-main:  #1e1228;
  --color-text-meta:  #6b5880;
  --color-accent-1:   #e8d5f0;
  --color-accent-2:   #8b4a7e;
  --color-accent-3:   #d4a843;
  --color-rule:       #a090b8;
}
```

**The vibe:** Closest to Constance's original. The dusty lavender background plays the same role as her sage grey — a specific, opinionated neutral that makes warm-dark text feel organic.

---

### Palette 03 — Light & Airy

Pale lavender background, white card surfaces, dark purple text. Clean, spacious, modern. Works very well for showcasing colourful project work since the light background doesn't compete.

| Role | Name | Hex | Usage |
|---|---|---|---|
| Background | Pale Lavender | `#ede8f5` | Page background |
| Surface | Pure White | `#ffffff` | Cards, nav tiles |
| Primary Text | Dark Purple | `#2a1a4a` | All headings & body |
| Secondary Text | Cool Mauve | `#7a6890` | Meta info, captions |
| Accent 01 | Periwinkle | `#7b87d4` | Nav card 01 · About |
| Accent 02 | Deep Iris | `#5c4fa0` | Nav card 02 · Projects |
| Accent 03 | Soft Coral | `#e87c6a` | Nav card 03 · Contact |
| Hairlines | Light Violet | `#d0c8e0` | Horizontal rules |

```css
/* Palette 03 — Light & Airy */
:root {
  --color-bg:         #ede8f5;
  --color-surface:    #ffffff;
  --color-text-main:  #2a1a4a;
  --color-text-meta:  #7a6890;
  --color-accent-1:   #7b87d4;
  --color-accent-2:   #5c4fa0;
  --color-accent-3:   #e87c6a;
  --color-rule:       #d0c8e0;
}
```

**The vibe:** Fresh, approachable, easy to read. Less dramatic than Palette 01 but still distinctive. The coral accent on Contact card creates the same "unexpected pop" as Constance's amber gold.

---

### Palette 04 — Moody & Editorial

Dark slate background, lavender as the single accent colour. Closest to a traditional dark-mode developer portfolio but elevated with the lavender signature.

| Role | Name | Hex | Usage |
|---|---|---|---|
| Background | Dark Slate | `#141018` | Page background |
| Surface | Deep Charcoal | `#1f1a28` | Cards, nav tiles |
| Primary Text | Off White | `#ede9e4` | All headings & body |
| Secondary Text | Warm Grey | `#9e9aa8` | Meta info, captions |
| Accent 01 | Pale Lavender | `#b8a8d8` | Nav card 01 · About |
| Accent 02 | Mid Lavender | `#8b72c8` | Nav card 02 · Projects |
| Accent 03 | Bright Lavender | `#c4a0ff` | Nav card 03 · Contact |
| Hairlines | Dark Purple | `#2a2235` | Horizontal rules |

```css
/* Palette 04 — Moody & Editorial */
:root {
  --color-bg:         #141018;
  --color-surface:    #1f1a28;
  --color-text-main:  #ede9e4;
  --color-text-meta:  #9e9aa8;
  --color-accent-1:   #b8a8d8;
  --color-accent-2:   #8b72c8;
  --color-accent-3:   #c4a0ff;
  --color-rule:       #2a2235;
}
```

**The vibe:** Cinematic and focused. Works especially well if your projects are visually rich — the dark bg makes screenshots pop. The risk: it can read as "another dark dev portfolio." Mitigate with strong typography choices.

---

## 03 · Typography System

Two fonts, two completely different personalities. The clash between them is the design.

---

### Display Font — The Logotype

Used for your name at hero scale (100px+). This needs to be a **high-contrast editorial serif** with calligraphic qualities.

| Option | Font Name | Where to Get | Cost | Notes |
|---|---|---|---|---|
| ★ Best | **Canela** | Typefoundry (Commercial Type) | Paid | Closest match to Constance. Stunning hairlines. |
| Great | **Cormorant Garamond** | Google Fonts | Free | Very high contrast, elegant. Best free option. |
| Great | **Playfair Display** | Google Fonts | Free | Slightly heavier but very editorial. |
| Premium | **Freight Display** | Adobe Fonts / GarageFonts | Paid | Extremely refined. Pairs beautifully with grotesque. |
| Budget alt | **DM Serif Display** | Google Fonts | Free | Simpler contrast but clean and modern. |

**Recommendation if free:** Cormorant Garamond — it's genuinely excellent and used by serious designers.
**Recommendation if budget allows:** Canela — it's the real deal.

```css
/* Display — Google Fonts import (free) */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

.name-logotype {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: clamp(60px, 10vw, 140px);
  line-height: 0.9;
  letter-spacing: -0.02em;
}
```

**The italic vowel trick (Constance's signature move):**
```html
<!-- Apply italic selectively to certain letters in your name -->
<h1 class="name-logotype">
  Your<em>N</em>ame <!-- italicise vowels or a specific letter -->
</h1>
```
```css
.name-logotype em {
  font-style: italic;
  font-weight: 400;
}
```

---

### Body / UI Font — The Grotesque

Used for everything else: the descriptor headline, nav labels, meta info, body copy. Must be a **geometric or humanist grotesque** — optically even strokes, wide proportions, works at both large display and small caption sizes.

| Option | Font Name | Where to Get | Cost | Notes |
|---|---|---|---|---|
| ★ Best | **Neue Haas Grotesk** | Linotype | Paid | What Constance likely used. The standard. |
| Great | **GT America** | Grilli Type | Paid | Wide, confident, incredible at display scale. |
| Great | **Inter** | Google Fonts | Free | Extremely well-made. Best free grotesque. |
| Great | **DM Sans** | Google Fonts | Free | Slightly more geometric, pairs well with serifs. |
| Premium | **ABC Diatype** | ABC Dinamo | Paid | Very contemporary. Used by top studios. |

**Recommendation if free:** Inter — it's a professional-grade typeface used everywhere from Apple to Linear.
**Recommendation if budget allows:** GT America — wide, bold, and magnificent at 100px+.

```css
/* UI Grotesque — Google Fonts import (free) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');

/* For the large descriptor: "Aspiring Frontend Developer" */
.descriptor-headline {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: clamp(48px, 8vw, 110px);
  line-height: 0.92;
  letter-spacing: -0.03em;
  text-transform: none; /* unlike Constance, keep mixed case — it's softer */
}

/* For meta / status bar */
.meta-bar {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```

---

### Type Scale

```css
/* Complete type scale */
--type-display:    clamp(60px, 10vw, 140px);  /* name logotype */
--type-headline:   clamp(48px, 8vw, 110px);   /* French / Frontend / Developer */
--type-title:      clamp(20px, 3vw, 32px);    /* section headings */
--type-body:       16px;                       /* about text, project descriptions */
--type-meta:       10px;                       /* status bar, labels, nav numbers */
--type-caption:    13px;                       /* project years, client names */
```

---

## 04 · Layout System

### The Constance Grid — How It Works

The layout is built on **horizontal rules + full-viewport type**, not a traditional column grid. Think of it as a newspaper, not a web app.

```
┌─────────────────────────────────────────────────────┐
│  [NAME LEFT]                    [NAME RIGHT]         │  ← Display serif, ~120px
├─────────────────────────────────────────────────────┤  ← hairline rule
│  ROLE · STUDIO · EMAIL · CITY  TIME                 │  ← meta bar, 10px caps
├─────────────────────────────────────────────────────┤  ← hairline rule
│                                                      │
│  [Nav Card 01]   ASPIRING          [Nav Card 02]     │
│                  FRONTEND                            │
├──────────────────────────────────────────────────────┤  ← hairline rule
│  DEVELOPER                                           │
├──────────────────────────────────────────────────────┤  ← hairline rule
│  [Nav Card 03]              IN [YOUR CITY]           │
└──────────────────────────────────────────────────────┘
```

### Navigation Cards

The nav tiles float over the large type. Each has:
- A label bottom-left (About / Projects / Contact)
- A number bottom-right (01 / 02 / 03)
- A distinct background colour (from your accent palette)
- Rounded corners (~14px radius)
- White or dark text depending on the card colour

```css
.nav-card {
  position: absolute;  /* or CSS Grid placement */
  border-radius: 14px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.nav-card:hover {
  transform: scale(0.97);
}

.nav-card--about    { background: var(--color-accent-1); color: var(--color-text-main); }
.nav-card--projects { background: var(--color-accent-2); color: var(--color-text-main); }
.nav-card--contact  { background: var(--color-accent-3); color: var(--color-bg); }
```

### Horizontal Rules

```css
.rule {
  width: 100%;
  height: 0.5px;  /* hairline — never 1px */
  background: var(--color-rule);
  margin: 0;
}
```

---

## 05 · Motion & Animation

> Animation is where you prove you're a frontend developer. Every transition should feel like it was considered for exactly as long as it takes the user to notice it and feel good about noticing it.

### The Load Counter (Constance's "0%" → "100%") — React

```jsx
// components/LoadCounter.jsx
import { useState, useEffect } from 'react';

export default function LoadCounter({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 100) {
      onComplete?.();
      return;
    }
    const timeout = setTimeout(() => setCount(c => c + 1), 18); // ~1.8s total
    return () => clearTimeout(timeout);
  }, [count, onComplete]);

  return (
    <div className="load-screen">
      <span className="load-counter">{count}%</span>
    </div>
  );
}
```

```jsx
// App.jsx — wire it up
import { useState } from 'react';
import LoadCounter from './components/LoadCounter';
import Hero from './components/Hero';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadCounter onComplete={() => setLoaded(true)} />}
      {loaded && <Hero />}
    </>
  );
}
```

---

### GSAP + React — the right pattern

Install: `npm install gsap`

In React, always put GSAP inside `useEffect` and use a ref to target elements — never query the DOM directly.

```jsx
// hooks/useGsapReveal.js — reusable reveal hook
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: options.y ?? 40,
        opacity: 0,
        duration: options.duration ?? 0.9,
        ease: options.ease ?? 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      });
    }, el);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return ref;
}
```

```jsx
// components/Hero.jsx — hero entrance with GSAP
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const nameRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Name logotype — stagger letters in from below
      gsap.from('.char', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.04,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Nav cards — float up after name
      gsap.from('.nav-card', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 1.4,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero">
      <h1 ref={nameRef} className="name-logotype">
        {/* Split name into individual spans for stagger */}
        {'Your'.split('').map((char, i) => (
          <span key={i} className="char">{char}</span>
        ))}
        <em className="char italic">N</em>
        {'ame'.split('').map((char, i) => (
          <span key={i} className="char">{char}</span>
        ))}
      </h1>

      <div ref={cardsRef} className="nav-cards">
        <NavCard label="About" number="01" href="#about" variant="about" />
        <NavCard label="Projects" number="02" href="#projects" variant="projects" />
        <NavCard label="Contact" number="03" href="#contact" variant="contact" />
      </div>
    </section>
  );
}
```

```jsx
// components/NavCard.jsx
export default function NavCard({ label, number, href, variant }) {
  return (
    <a href={href} className={`nav-card nav-card--${variant}`}>
      <span className="nav-card__label">{label}</span>
      <span className="nav-card__number">{number}</span>
    </a>
  );
}
```

```jsx
// components/ProjectItem.jsx — uses the reusable reveal hook
import { useGsapReveal } from '../hooks/useGsapReveal';

export default function ProjectItem({ name, client, year, index }) {
  const ref = useGsapReveal({ y: 40, duration: 0.9 });

  return (
    <div ref={ref} className="project-item">
      <span className="project-number">0{index + 1}</span>
      <span className="project-name">{name}</span>
      <span className="project-client">{client}</span>
      <span className="project-year">{year}</span>
    </div>
  );
}
```

---

### Live Clock — React

```jsx
// components/LiveClock.jsx
import { useState, useEffect } from 'react';

export default function LiveClock({ timezone = 'your/timezone' }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return <span className="meta-clock">{time}</span>;
}
```

```jsx
// Usage in your meta bar
<div className="meta-bar">
  <span>ASPIRING FRONTEND DEVELOPER</span>
  <span>OPEN TO WORK</span>
  <a href="mailto:you@email.com">EMAIL</a>
  <span>YOUR CITY <LiveClock timezone="Asia/Manila" /></span>
</div>
```

> **Timezone tip:** Replace `"Asia/Manila"` with your actual timezone string. Full list at [Wikipedia IANA tz list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

---

### Respecting `prefers-reduced-motion`

Always wrap GSAP animations in a motion check:

```javascript
// utils/motion.js
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

```javascript
// In your useEffect
if (!prefersReducedMotion()) {
  gsap.from('.char', { y: 80, opacity: 0, ... });
}
```

---

### Timing Principles

| Animation type | Duration | Easing |
|---|---|---|
| Hero entrance | 1.0–1.4s | `power3.out` |
| Nav card hover | 0.3s | `ease` |
| Section reveals | 0.8–1.0s | `power2.out` |
| Page transitions | 0.6s | `power2.inOut` |
| Micro interactions | 0.15–0.25s | `ease` |

---

## 06 · Page Sections Reference

### Hero
- Full viewport height
- Name logotype split across left and right (like Constance — "Constance" left, "Souville" right)
- Horizontal rule below name
- Meta bar (role · employer/aspiring · email · city · live local time)
- Large descriptor type filling 3 rows
- Nav cards floating over descriptor type

### About
- Two-column: left = large typographic statement ("I build with attention to detail"), right = bio prose + career/education timeline
- Technologies list — keep it as a comma-separated sentence, not bullet points
- Keep it personal and direct. No "I am passionate about…" — show, don't tell.

### Projects
- List format, not grid cards
- Each row: Project name (large, serif) / Client or context / Year
- Hover reveals a project thumbnail that follows the cursor or appears in a fixed preview area
- Number each project (01, 02, 03…)

### Contact
- Minimal: one direct line of copy, then three large link items (Email / LinkedIn / GitHub)
- Live time or timezone optional
- No form — just links. Forms are for clients; portfolios are for connections.

### Footer
- Single line: Back to top / Design credit (if applicable) / Year
- Keep it invisible — 10px, low opacity

---

## 07 · Voice & Copy Guidelines

Your portfolio is editorial. That means copy is sparse, precise, and slightly understated.

**Do:**
- "I build interfaces with a quiet obsession for detail."
- "Aspiring frontend developer. Currently learning in the open."
- Short sentences. Let them land.

**Don't:**
- "I am a passionate and dedicated aspiring frontend developer who loves…"
- Long paragraphs in the hero
- Explaining what frontend development is

**For the descriptor headline (your version of "French Frontend Developer Based in Montreal"):**
Fill in the blanks for your own identity — your nationality, city, or a specific descriptor that makes it personal and specific.

---

## 08 · Tech Stack — React

| Layer | Technology | Notes |
|---|---|---|
| Framework | **React + Vite** | Fastest React setup. `npm create vite@latest` → select React |
| Routing | **React Router v6** | For smooth page transitions between sections |
| Styling | **SCSS modules** + CSS custom properties | `npm install sass` — use the CSS vars from Section 02 |
| Animation | **GSAP** + ScrollTrigger | Always inside `useEffect` with `gsap.context()` for cleanup |
| Page transitions | **Framer Motion** | Pairs well with React Router for between-page fades/slides |
| CMS (optional) | **Notion API** or **Contentful** | Add/edit projects without touching code |
| Deployment | **Vercel** | Best for React — zero config, free tier, instant deploys |
| Fonts | Google Fonts (free) or Fontshare | Import in `index.css` — see Section 03 |

### Recommended project structure

```
src/
├── components/
│   ├── Hero.jsx            ← name logotype + nav cards
│   ├── NavCard.jsx         ← individual nav tile
│   ├── LoadCounter.jsx     ← 0% → 100% entrance
│   ├── LiveClock.jsx       ← ticking local time
│   ├── MetaBar.jsx         ← top status row
│   ├── About.jsx
│   ├── ProjectList.jsx
│   ├── ProjectItem.jsx
│   └── Contact.jsx
├── hooks/
│   ├── useGsapReveal.js    ← reusable scroll reveal
│   └── useSplitText.js     ← split name into .char spans
├── utils/
│   └── motion.js           ← prefersReducedMotion helper
├── styles/
│   ├── tokens.css          ← all CSS custom properties (palettes)
│   ├── typography.css      ← font imports + type scale
│   ├── layout.css          ← grid, rules, spacing
│   └── components/         ← per-component SCSS modules
├── App.jsx
└── main.jsx
```

### Vite setup — quick start

```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
npm install gsap framer-motion sass react-router-dom
npm run dev
```

### Font import in `index.css`

```css
/* index.css — import fonts first, then tokens */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;700&display=swap');
@import './styles/tokens.css';
@import './styles/typography.css';
@import './styles/layout.css';

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background-color: var(--color-bg);
  color: var(--color-text-main);
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}
```

### Framer Motion page transitions

```jsx
// App.jsx — wrap sections with AnimatePresence
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}
```

---

## 09 · Checklist — Before You Launch

- [ ] Name logotype has the selective italic letter treatment
- [ ] All 3 nav card colours are distinct and accessible (check contrast ratio at [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker))
- [ ] Meta bar includes live local time via `LiveClock` component
- [ ] Load counter animation works on first visit, cleans up correctly on unmount
- [ ] `gsap.context()` used in every `useEffect` — no memory leaks
- [ ] Horizontal rules are `0.5px` (not `1px`)
- [ ] No bullet points anywhere on the page
- [ ] Project hover state shows image preview
- [ ] All animations check `prefersReducedMotion()` before running
- [ ] Mobile responsive — type scales down gracefully with `clamp()`
- [ ] `npm run build` produces no errors
- [ ] Deployed to Vercel — custom domain connected if you have one
- [ ] Footer has build credit + year

---

*Document version 1.1 — React edition.*
*Primary palette: Bold & Rich (Palette 01). Swap CSS variables in `tokens.css` to try others.*
