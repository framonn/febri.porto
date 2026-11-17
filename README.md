# Muhammad Kevin Febrian (Febri) — Creative Developer Portfolio

A modern, interactive, and visually impressive personal portfolio website for **Muhammad Kevin Febrian (Febri)**, a Software Engineering (RPL) graduate and Fullstack Web Developer based in Jabodetabek, Indonesia.

Inspired by high-craft digital studio portfolios (Linear, Framer, Vercel), featuring fluid micro-interactions, an obsidian & electric blue aesthetic, bilingual translation architecture, and a modular image slot system.

---

## 🌟 Key Features

1. **Bilingual Language Switcher (EN / ID):**
   - Interactive smooth-animated toggle pill (`EN` | `ID`) in the sticky glass navbar.
   - Dynamic instantaneous switching between English and Bahasa Indonesia across all sections, modals, and badges without page reloads (via `src/data/translations.ts` and React Context).
2. **Interactive Project Case Study Modal:**
   - Multi-image screenshot carousel with next/prev arrows, index counter, and thumbnail selection.
   - Comprehensive **Problem & Solution** breakdown in both English and Indonesian.
   - Role, Corporate Partner, Tech Stack badges, Key Architecture checklist, and GitHub / Live Demo links.
3. **Dedicated Experience Showcase (Distinct Separation):**
   - Clearly separates **Final Capstone Project (Tugas Akhir)** in collaboration with **PT. Kokoh Inti Arebama** from **Internship (PKL)** at **PT. Mahakam Berkah Bersama**.
   - Interactive filtering by milestone type (`All`, `Capstone`, `Internship`).
4. **Curated Project Showcase & Filters:**
   - Filter tabs: `All Works`, `Industry & Capstone`, `Web Applications`, and `UI/UX & Mobile`.
   - 16:9 responsive thumbnails with interactive glowing borders and hover depth.
5. **Categorized Skills Matrix:**
   - Clean proficiency pill tags (`Mastery`, `Advanced`, `Proficient`) across Frontend, Backend & Database, UI/UX & Design Systems, and Tools & DevOps without cliché percentage bars.
6. **Developer & GitHub Presence (`@framonn`):**
   - Terminal-style identity card with link to `github.com/framonn` and featured repository showcases.
7. **Interactive Contact & Functional Form:**
   - Direct quick-copy email button with instant toast feedback.
   - Interactive message form with validation and celebratory confetti feedback.
8. **Easy Asset & Photo Replacement Architecture:**
   - All image paths point to structured slots in `public/images/`.
   - Graceful fallback pipeline: `.jpg` ➜ `.svg` ➜ bespoke vector UI mockups, ensuring the website never shows broken image frames.

---

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (Custom Deep Midnight Navy `#050814` & Electric Blue `#2563EB`/`#38BDF8` design system)
- **Animations:** Framer Motion (Staggered reveals, layout spring transitions, floating badges)
- **Icons:** Lucide React + Bespoke Brand SVGs
- **Celebration Effects:** Canvas-Confetti

---

## 📁 Project Structure

```text
febri-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── profile-febri.svg (and .jpg slot)
│       ├── README.md (Drop-in instructions)
│       └── projects/
│           ├── wms-kia-1.svg (and .jpg slot)
│           ├── wms-kia-2.svg
│           ├── mbb-finance-1.svg
│           ├── mbb-finance-2.svg
│           ├── presensi-1.svg
│           ├── presensi-2.svg
│           ├── kanto-1.svg
│           ├── batik-sweety-1.svg
│           ├── laundry-1.svg
│           └── borrowing-1.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Icons.tsx (GitHub, Instagram, Figma)
│   │   │   ├── ProjectImage.tsx (Resilient fallback component)
│   │   │   └── SpotlightCursor.tsx (Subtle ambient cursor follower)
│   │   ├── About.tsx (Bento Grid)
│   │   ├── Contact.tsx (Interactive form + Quick copy)
│   │   ├── Experience.tsx (PKL vs Tugas Akhir milestones)
│   │   ├── Footer.tsx (Quick links + Back to top)
│   │   ├── GithubSection.tsx (Developer hub)
│   │   ├── Hero.tsx (Asymmetric designer hero + floating badges)
│   │   ├── Navbar.tsx (Sticky glassmorphic + EN/ID toggle)
│   │   ├── ProjectModal.tsx (Case study gallery modal)
│   │   ├── Projects.tsx (Filter tabs + 16:9 cards)
│   │   └── Skills.tsx (Categorized matrix)
│   ├── context/
│   │   └── LanguageContext.tsx (Bilingual EN/ID state)
│   ├── data/
│   │   ├── portfolioData.ts (Single source of truth for projects & profile)
│   │   └── translations.ts (Full English & Indonesian dictionary)
│   ├── types/
│   │   └── index.ts (Strict TypeScript contracts)
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
└── package.json
```

---

## 🛠️ Quick Start & Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://127.0.0.1:5173/` in your browser.

3. **Production Build:**
   ```bash
   npm run build
   ```

---

## 🖼️ How to Replace Profile Photo & Screenshots

All asset slots are pre-configured:
1. Place your real profile picture at:
   `public/images/profile-febri.jpg`
2. Place project screenshots at:
   `public/images/projects/<project-name>-1.jpg`
3. Edit links, biography, or skills anytime in:
   `src/data/portfolioData.ts` and `src/data/translations.ts`
