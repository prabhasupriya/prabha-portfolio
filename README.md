# Prabha Supriya Bandaru — Portfolio

Personal portfolio site showcasing projects, skills, and contact information. Built as a single-page React application with responsive layout, scroll-driven motion, and accessibility-minded defaults.

## Live site

**Deployment URL:** _Add your Vercel or Netlify URL here after first deploy._

Example: `https://your-project.vercel.app`

## Tech stack

- [React 18](https://react.dev/) — UI
- [Vite 5](https://vite.dev/) — dev server & production build
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [Framer Motion](https://www.framer.com/motion/) — scroll-linked parallax and viewport animations
- [Lucide React](https://lucide.dev/) — icons

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm (comes with Node)

## Run locally

```bash
git clone https://github.com/YOUR_USERNAME/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

## Build for production

```bash
npm run build
npm run preview
```

The `dist/` folder contains static files ready for any static host.

## Resume PDF

Place your CV at **`public/resume.pdf`** so the **Download Resume** button opens it. Anything in **`public/`** is served from the site root (e.g. `/resume.pdf`).

## Customize content

Edit **`src/constants.js`** for:

- Bio, headline, and social links (`PROFILE`)
- Skill badges (`SKILLS`)
- Project titles, descriptions, tags, and GitHub URLs (`PROJECTS`)

Replace the placeholder email in `PROFILE.email` with a real `mailto:` address before deploying.

## Assignment checklist (quick reference)

- Responsive navigation with mobile menu  
- Sections: Hero, About, Skills, Projects, Contact, Footer  
- Parallax on decorative background (`ParallaxDecor`)  
- Multiple `whileInView` / stagger animations  
- `prefers-reduced-motion` in global CSS + Framer `useReducedMotion`  

## License

Contents are personal portfolio material; adjust as you prefer for coursework submission.
