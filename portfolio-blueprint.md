# 🗂️ Portfolio Website Blueprint
**Target Role:** Junior Frontend Developer  
**Stack:** React  
**Aesthetic:** Clean & Minimal  
**Profile:** Computer Engineering student (near-graduate)

---

## 🎯 Goals
- Present yourself as a capable, job-ready frontend developer
- Showcase projects with real code and problem-solving context
- Feel polished and professional — let the simplicity speak for your taste
- Easy for a recruiter to scan in under 60 seconds

---

## 🏗️ Project Structure

```
my-portfolio/
├── public/
│   └── assets/           # profile photo, project screenshots, favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Skills.jsx
│   │   ├── WorkExperience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js       # project list as an array of objects
│   │   ├── skills.js         # skills grouped by category
│   │   └── experience.js     # work/internship timeline
│   ├── hooks/
│   │   └── useScrollReveal.js  # optional: fade-in on scroll
│   ├── styles/
│   │   └── globals.css       # CSS variables, resets, base styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

---

## 📐 Design System

### Typography
| Role | Font | Source |
|------|------|--------|
| Display / Name | `DM Serif Display` | Google Fonts |
| Body / UI | `DM Sans` | Google Fonts |

### Color Palette (Light Theme)
```css
:root {
  --bg:          #F9F8F6;   /* warm off-white background */
  --surface:     #FFFFFF;   /* cards, panels */
  --border:      #E5E3DF;   /* subtle dividers */
  --text-primary:   #1A1916; /* near-black */
  --text-secondary: #6B6860; /* muted labels */
  --accent:      #2563EB;   /* blue — links, CTAs, highlights */
  --accent-light:#EFF4FF;   /* accent background tint */
}
```

### Spacing Scale
Use a consistent 8px base unit: `8, 16, 24, 32, 48, 64, 96px`

### Motion
- Subtle `opacity + translateY` fade-ins on scroll (staggered per section)
- Hover transitions on cards: `box-shadow` lift + slight scale
- No heavy animations — keep it understated

---

## 📄 Sections

### 1. Navbar
- Fixed top, transparent → white on scroll
- Left: your name/logo initials
- Right: anchor links — About, Projects, Skills, Experience, Contact
- Mobile: hamburger menu (slide-down or drawer)

---

### 2. Hero

**Purpose:** First impression. Establish who you are in 3 seconds — clean, confident, no fluff.

**Layout:** Left-aligned, full viewport height (`100vh`), text anchored to the left with generous padding. Editorial feel — like a magazine opener.

**Content structure:**
```
[Your Name]
Aspiring Frontend Developer
Computer Engineering Graduate
```

**Copy notes:**
- **Name** — display font (`DM Serif Display`), large (clamp ~48–80px). This is the anchor.
- **"Aspiring Frontend Developer"** — body font (`DM Sans`), medium weight, accent color or muted text
- **"Computer Engineering Graduate"** — same font, lighter weight, secondary text color. Grounds your credibility quietly.
- No CTAs, no photo. The text does all the work.

**Animation — word-by-word reveal:**
- Use `framer-motion` with `staggerChildren` on a wrapper `motion.div`
- Each word is a `motion.span` with `opacity: 0 → 1` + `y: 10 → 0`
- Stagger delay: `0.08s` per word
- Ease: `easeOut`, duration `0.4s`
- Name animates first, title second (slight pause between), "Portfolio" last

```jsx
// Animation variant pattern
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}
const word = {
  hidden: { opacity: 0, y: 10 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

// Usage: split string by " " → map each word to <motion.span>
```

**Background:** Plain `--bg` color (`#F9F8F6`). No gradients, no noise. The restraint is the statement.

**Responsive:**
- Desktop: padding-left `10–15vw`, text left-aligned
- Mobile: padding `24px`, same left-aligned layout, font scales down via `clamp()`

---

### 3. About Me

**Purpose:** A quick, human introduction — personal story first, then a soft call to connect.

**Layout:** Single column, left-aligned, consistent with the Hero. No photo. Clean and readable.

**Content structure:**

```
About Me

[2–3 sentences — personal story]
Drafted template:
"I'm a Computer Engineering graduate with a passion for the visual
and interactive side of the web. I'm drawn to frontend because of
the intersection of design and code — where good UI/UX thinking
meets clean implementation. I've had hands-on experience through
[internship / org work / part-time], and I'm now looking to grow
as a frontend developer in a team environment."

→ Fill in your own internship/org details here.
→ Keep it honest and natural — write how you'd introduce yourself
   to a recruiter over coffee, not in a cover letter.

Contact

[your.email@gmail.com]     [LinkedIn ↗]     [GitHub ↗]
```

**Copy guidelines:**
- 2–3 sentences max — respect the reader's time
- Lead with your degree + what drew you to frontend (UI/UX & design)
- Mention real-world exposure (internship, org, part-time) in one phrase — no need to elaborate here, that's what Work Experience is for
- End with a natural forward-looking line (looking to grow, excited to contribute, etc.)

**Contact block:**
- Inline row of three links: Email, LinkedIn, GitHub
- Use `lucide-react` icons (`Mail`, `Linkedin`, `Github`) beside each label
- On hover: accent color + underline
- Opens in new tab for LinkedIn and GitHub; `mailto:` for email

**Animation:**
- Section fades in on scroll using `react-intersection-observer`
- Contact links stagger in after the paragraph (`0.1s` delay each)

---

### 4. Projects

Split into two sub-sections: **Featured Projects** and **Photo Gallery**.

---

#### 4a. Featured Projects

**Purpose:** Your two best technical works — the ones you can confidently talk about in an interview.

**Layout:** 2-column card grid, side by side on desktop, stacked on mobile.

**Card anatomy:**
```
┌──────────────────────────┐
│                          │
│     Screenshot / Cover   │
│                          │
├──────────────────────────┤
│  Project Title           │
│  Short description       │  ← 1–2 sentences max
│                          │
│  [⚛] [🎨] [🔥]          │  ← Tech stack icons (clickable → modal)
└──────────────────────────┘
```

**Data shape:**
```js
// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Project One",
    shortDescription: "A brief one-liner about what it does.",
    image: "/assets/project-one.png",
    techStack: [
      { name: "React",    icon: "react.svg" },
      { name: "Tailwind", icon: "tailwind.svg" },
      { name: "Firebase", icon: "firebase.svg" },
    ],
    details: {
      overview:   "Full description of the project — problem, approach, outcome.",
      role:       "What you specifically built or contributed.",
      challenges: "One interesting problem you solved.",
      liveUrl:    "https://...",
      repoUrl:    "https://github.com/...",
    }
  },
  {
    id: 2,
    title: "Project Two",
    shortDescription: "A brief one-liner about what it does.",
    image: "/assets/project-two.png",
    techStack: [ /* same shape */ ],
    details: { /* same shape */ }
  }
]
```

**Tech stack icons:**
- Displayed as small icons (24px) in a row at the bottom of the card
- On hover: icon scales up slightly + tooltip shows the tech name
- On click: opens the **Project Detail Modal**

**Project Detail Modal:**
- Triggered by clicking any tech icon OR the card itself
- Overlay with centered modal panel
- Contains: project title, full overview, your role, a challenge you solved, live demo + GitHub links
- Close via `✕` button or clicking outside
- Animation: `framer-motion` scale + fade in (`scale: 0.95 → 1`, `opacity: 0 → 1`)

---

#### 4b. Photo Gallery

**Purpose:** Show personality — your photo editing hobby. Breaks up the technical content and makes you memorable.

**Layout:** Masonry grid (Pinterest-style, varied heights), 3 columns on desktop, 2 on tablet, 1 on mobile. Use `react-masonry-css` for this.

**Behavior:**
- Images load with a soft fade-in as they enter the viewport
- On hover: slight brightness overlay + optional caption label
- On click: lightbox opens (full-size image view)
- Use `yet-another-react-lightbox` — lightweight, zero config

**Data shape:**
```js
// src/data/gallery.js
export const gallery = [
  { id: 1, src: "/assets/gallery/photo-1.jpg", caption: "Optional caption" },
  { id: 2, src: "/assets/gallery/photo-2.jpg", caption: "" },
  // ...add as many as you want
]
```

**Section header:**
```
On the Side

A small collection of photos I've edited for fun.
```

**Libraries needed:**
- `react-masonry-css` — masonry grid layout
- `yet-another-react-lightbox` — lightbox viewer

---

### 5. Skills

**Purpose:** Quick scannable proof of your tech range. Organized to lead with frontend-relevant skills, with broader engineering depth shown below — signals you're more than just a UI dev.

**Data shape:**
```js
// src/data/skills.js
export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "C++", "SQL", "HTML", "CSS"]
  },
  {
    category: "Web & Desktop",
    items: ["React", "Tailwind CSS", "Vite", "Electron"]
  },
  {
    category: "AI & Automation",
    items: ["LLM API Integration (Gemini)", "Prompt Engineering", "N8N", "TensorFlow", "YOLO", "OpenCV"]
  },
  {
    category: "Hardware & Systems",
    items: ["IoT", "Embedded Systems", "PCB Design", "THT Board Assembly"]
  },
  {
    category: "Tools & Creative",
    items: ["Git", "GitHub", "VS Code", "Adobe Photoshop", "Adobe Premiere Pro", "Microsoft Office"]
  }
]
```

**Layout:** Category label + row of pill/badge tags per group. Each category is its own row — label left, pills wrapping right.

**Pill style:** Rounded badge, border + subtle background tint, small text. On hover: accent color border + text.

**Ordering note:** Languages → Web & Desktop → AI & Automation → Hardware → Tools. This order tells a story — frontend first, then shows depth. Recruiters for junior frontend roles will be impressed by the AI/hardware range without being confused by it.

**What to drop for a purely frontend-focused resume/portfolio:**
- Hardware & Systems can be hidden behind a "Show more" toggle if you want to keep the section tight
- Keep AI & Automation visible — LLM API integration is increasingly valued in frontend roles

---

### 6. Work Experience

**Purpose:** Show real-world exposure and professionalism. Two solid internships — lead with Globe since it's more recent and more relevant to software/frontend.

**Layout:** Vertical timeline — left line with dots, entries stacked chronologically (newest first). Animate in on scroll with staggered fade.

**Data shape:**
```js
// src/data/experience.js
export const experience = [
  {
    id: 1,
    role: "Intern — Network Department (Software Developer)",
    company: "Globe Telecom, Inc. — Technical Group",
    location: "Bacolod City, NIR",
    duration: "August 2024",
    highlights: [
      "Built the Worst Cell Tool — processes Excel files to calculate key network performance metrics and outputs a structured table to identify underperforming network sites.",
      "Built the Shout Tool — computes Shout Scores for network sites using coordinates and site data to help the company prepare for potential network issues.",
      "Delivered two production-ready internal tools used by the network operations team.",
    ]
  },
  {
    id: 2,
    role: "Intern — UITC",
    company: "Technological University of the Philippines – Visayas",
    location: "Bacolod City, NIR",
    duration: "July 2023 – August 2023",
    highlights: [
      "Assisted in preventive maintenance of school server racks — cleaning, securing, and verifying hardware components.",
      "Supported faculty in configuring printer drivers and peripheral devices.",
      "Helped diagnose and repair malfunctioning PCs, routers, and office equipment.",
    ]
  }
]
```

**Timeline card anatomy:**
```
●  Globe Telecom, Inc.                          August 2024
   Intern — Network Department
   Bacolod City, NIR

   · Built the Worst Cell Tool — processes Excel files to...
   · Built the Shout Tool — computes Shout Scores for...
   · Delivered two production-ready internal tools...

●  TUP Visayas                          Jul 2023 – Aug 2023
   Intern — UITC
   ...
```

**Notes:**
- The Globe internship is your strongest — it shows you shipped real software used by a real team. Lead with that framing.
- "Software Developer" is your actual task label, not just "Intern" — use it in the role title to stand out.
- Keep bullet points short and action-verb led: Built, Designed, Delivered, Assisted, Supported.

---

### 7. Contact
**Purpose:** Make it dead simple to reach you.

**Content:**
```
Let's work together.
I'm open to junior roles, internships, and freelance projects.

[your.email@gmail.com]
[LinkedIn]  [GitHub]  [Twitter/X (optional)]

[ Contact Form ]
  Name ___________
  Email __________
  Message ________
  [Send Message]
```

**Form handling options:**
- [Formspree](https://formspree.io) — free, no backend needed
- [EmailJS](https://emailjs.com) — sends directly from client

---

### 8. Footer
- Your name + © 2025
- Repeat social icon links
- Optional: "Designed & built by [Your Name]"

---

## 📦 Recommended Libraries

| Purpose | Library |
|---------|---------|
| Animations | `framer-motion` |
| Icons | `lucide-react` |
| Form handling | `react-hook-form` |
| Scroll reveal | `react-intersection-observer` |
| Email/contact | `emailjs-com` or Formspree |
| Routing (if multi-page) | `react-router-dom` |

---

## 🚀 Deployment

| Platform | Notes |
|----------|-------|
| **Vercel** | Recommended — free, instant deploy from GitHub |
| Netlify | Also great, drag-and-drop deploy option |
| GitHub Pages | Free, slightly more config with React |

**Custom domain tip:** `yourname.dev` or `yourname.me` look far more professional than a `.vercel.app` URL on a resume.

---

## ✅ Pre-Launch Checklist

- [ ] All project links are working (live demo + GitHub)
- [ ] CV/resume PDF download link is working
- [ ] Contact form tested and sends correctly
- [ ] Mobile responsive (test on 375px, 768px, 1280px)
- [ ] Meta tags set (title, description, og:image for link previews)
- [ ] Favicon set
- [ ] No placeholder text ("Lorem ipsum") anywhere
- [ ] Page loads fast — compress images, lazy load where needed
- [ ] Spell-check all copy
- [ ] Deployed and live on a custom or clean URL

---

## 💡 Tips for a Junior Portfolio

1. **Quality over quantity on projects** — 3 polished projects beat 7 half-finished ones
2. **Write good READMEs** — recruiters click your GitHub links; a well-documented repo stands out
3. **Describe impact, not just features** — "Built a dashboard that visualizes X" > "Made a dashboard"
4. **Keep it updated** — stale projects with broken links hurt more than help
5. **Your portfolio IS a project** — treat it like one: good code, good commit history, good README
