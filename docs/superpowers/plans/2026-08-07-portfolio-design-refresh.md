# Portfolio Design Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aplicar o visual/layout do design de referência (dark + lime + Fraunces) no portfolio Next.js, preservando Firebase e EmailJS.

**Architecture:** Reescrever componentes em `pages/components/` de forma modular; tokens CSS + Tailwind 3; helpers leves (`Section`, `SectionLabel`, `useInView`); sem Vite e sem shadcn.

**Tech Stack:** Next.js 13.2.4, React 18, Tailwind CSS 3, lucide-react, Firebase Firestore, EmailJS

## Global Constraints

- Stack: Next.js 13 + Tailwind 3 — sem migrar para Vite/Tailwind 4
- Marca na navbar: texto `Dre.dev` (não logo PNG, não `AF.dev`)
- Primary: `#c8ff47`; background: `#080808`
- Projetos: Firestore via `getProjectsAction()` — sem mocks
- Contato: EmailJS com campos `user_name`, `user_phone`, `user_email`, `subject`, `message`
- Spec: `docs/superpowers/specs/2026-08-07-portfolio-design-refresh.md`
- Ícones UI/redes: `lucide-react`
- Este repo não tem suite de testes; verificação = `npm run build` + smoke visual no browser

---

## File map

| File | Responsibility |
|------|----------------|
| `package.json` | Add `lucide-react` |
| `tailwind.config.js` | Map CSS tokens to Tailwind colors/fonts |
| `styles/globals.css` | Tokens, fonts import, base, scrollbar |
| `pages/_document.js` | Google Fonts (Fraunces, Plus Jakarta, JetBrains Mono) |
| `pages/_app.js` | Navbar + Footer shell |
| `pages/index.js` | Section order without About |
| `pages/components/Section.jsx` | Shared section padding wrapper |
| `pages/components/SectionLabel.jsx` | Mono label + divider |
| `pages/components/useInView.js` | IntersectionObserver hook |
| `pages/components/Navbar.jsx` | Redesign |
| `pages/components/Main.jsx` | Hero redesign |
| `pages/components/Skills.jsx` | Categorized chips |
| `pages/components/Projects.jsx` | Firebase cards |
| `pages/components/Education.jsx` | Timeline (new) |
| `pages/components/Contact.jsx` | Form layout + EmailJS |
| `pages/components/Footer.jsx` | Copyright + socials (new) |
| Delete or stop importing: `pages/components/About.jsx` | Removed from flow |

---

### Task 1: Theme foundation (tokens, fonts, lucide)

**Files:**
- Modify: `package.json`
- Modify: `tailwind.config.js`
- Modify: `styles/globals.css`
- Modify: `pages/_document.js`

**Interfaces:**
- Produces: CSS vars `--background`, `--foreground`, `--card`, `--primary`, `--primary-foreground`, `--muted-foreground`, `--border`, `--input-background`; Tailwind colors `background`, `foreground`, `card`, `primary`, `primary-foreground`, `muted`, `muted-foreground`, `border`; font families `sans` (Plus Jakarta), `display` (Fraunces), `mono` (JetBrains Mono)

- [ ] **Step 1: Install lucide-react**

```bash
npm install lucide-react@0.487.0
```

Expected: dependency added; lockfile updated.

- [ ] **Step 2: Replace `tailwind.config.js` contents**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./services/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Fraunces'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 3: Replace `styles/globals.css` contents**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #080808;
  --foreground: #f0ede6;
  --card: #111111;
  --primary: #c8ff47;
  --primary-foreground: #080808;
  --muted: #1c1c1c;
  --muted-foreground: #888888;
  --border: rgba(255, 255, 255, 0.07);
  --input-background: #1a1a1a;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(200, 255, 71, 0.3);
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(200, 255, 71, 0.6);
}

@layer base {
  body {
    @apply bg-background text-foreground font-sans antialiased tracking-wide;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-bold;
  }
}
```

- [ ] **Step 4: Update `pages/_document.js` font link**

```jsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

- [ ] **Step 5: Verify build still compiles**

```bash
npm run build
```

Expected: build succeeds (warnings ok; no module errors).

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json tailwind.config.js styles/globals.css pages/_document.js
git commit -m "chore: add design tokens, fonts, and lucide-react"
```

---

### Task 2: Shared layout primitives

**Files:**
- Create: `pages/components/Section.jsx`
- Create: `pages/components/SectionLabel.jsx`
- Create: `pages/components/useInView.js`

**Interfaces:**
- Produces: `Section({ id, children, className })` → `<section id={id} className="px-6 md:px-12 lg:px-24 ...">`
- Produces: `SectionLabel({ children })` → mono uppercase label + horizontal rule
- Produces: `useInView(threshold = 0.15)` → `{ ref, inView }`

- [ ] **Step 1: Create `pages/components/useInView.js`**

```js
import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}
```

- [ ] **Step 2: Create `pages/components/Section.jsx`**

```jsx
export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </section>
  );
}
```

- [ ] **Step 3: Create `pages/components/SectionLabel.jsx`**

```jsx
export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add pages/components/useInView.js pages/components/Section.jsx pages/components/SectionLabel.jsx
git commit -m "feat: add shared section primitives and useInView"
```

---

### Task 3: Navbar redesign

**Files:**
- Modify: `pages/components/Navbar.jsx` (full rewrite)

**Interfaces:**
- Consumes: `lucide-react` (`Mail`, `Menu`, `X`)
- Produces: links targeting `#hero`, `#skills`, `#projects`, `#educacao`, `#contact`
- Brand text: `Dre.dev`

- [ ] **Step 1: Rewrite `Navbar.jsx`**

Replace file with:

```jsx
import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Sobre", id: "hero" },
  { name: "Skills", id: "skills" },
  { name: "Projetos", id: "projects" },
  { name: "Educação", id: "educacao" },
  { name: "Contato", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-16">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="font-mono text-sm tracking-widest uppercase text-primary hover:opacity-90 transition-opacity"
        >
          Dre.dev
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="mailto:andrefersouza@gmail.com"
          className="hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded bg-primary text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail size={14} />
          Contato
        </a>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href="mailto:andrefersouza@gmail.com"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded bg-primary text-primary-foreground w-fit"
          >
            <Mail size={14} />
            Contato
          </a>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Smoke check**

```bash
npm run dev
```

Open `/` — navbar shows `Dre.dev`, links e CTA; menu mobile funciona. Pare o servidor após o check.

- [ ] **Step 3: Commit**

```bash
git add pages/components/Navbar.jsx
git commit -m "feat: redesign navbar with Dre.dev brand"
```

---

### Task 4: Hero (Main.jsx)

**Files:**
- Modify: `pages/components/Main.jsx` (full rewrite)

**Interfaces:**
- Consumes: `Section`, `useInView`, lucide icons
- Produces: `#hero` anchor; exports optionally remove old `buttons` array — move social URLs inline (Contact/Footer will redefine their own)

Social URLs (keep):
- GitHub `https://github.com/dredeco`
- LinkedIn `https://www.linkedin.com/in/andrefersouza/`
- Instagram `https://instagram.com/dredeco.dev`
- Facebook `https://www.facebook.com/dredeco/`

- [ ] **Step 1: Rewrite `Main.jsx`**

```jsx
import { Github, Linkedin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import useInView from "./useInView";

const socials = [
  { icon: Github, href: "https://github.com/dredeco", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/andrefersouza/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/dredeco.dev", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/dredeco/", label: "Facebook" },
];

export default function Main() {
  const { ref, inView } = useInView(0.05);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="hero" ref={ref}>
      <Section id="hero-inner" className="pt-36 pb-28 md:pt-44 md:pb-36">
        <div
          className="transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 text-xs mb-10 tracking-widest uppercase text-primary font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Disponível para projetos
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-none tracking-tight mb-6 font-extrabold">
            André
            <br />
            <span className="text-primary">Fernandes</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-8 font-light">
            Full-stack Developer — React · Next.js · Node
          </p>

          <p className="max-w-xl text-base text-muted-foreground leading-relaxed mb-12">
            Criando sites responsivos e aplicações web modernas com foco em
            performance e experiência do usuário. Aprendizado contínuo,
            raciocínio lógico e atenção aos detalhes.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Ver Projetos
              <ArrowUpRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded border border-border hover:border-foreground transition-colors"
            >
              Fale comigo
            </button>
          </div>
        </div>

        <div
          className="mt-20 flex items-center gap-6 transition-all duration-700 delay-200"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>
      </Section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add pages/components/Main.jsx
git commit -m "feat: redesign hero section"
```

---

### Task 5: Skills chips

**Files:**
- Modify: `pages/components/Skills.jsx` (full rewrite)

**Interfaces:**
- Consumes: `Section`, `SectionLabel`, `useInView`
- Anchor: `#skills`

- [ ] **Step 1: Rewrite `Skills.jsx`**

```jsx
import Section from "./Section";
import SectionLabel from "./SectionLabel";
import useInView from "./useInView";

const skills = {
  Frontend: [
    "HTML", "CSS", "JavaScript", "TypeScript", "React",
    "Next.js", "Angular", "Vue", "Nuxt", "Tailwind",
  ],
  Backend: [
    "Node.js", "Nest.js", "MySQL", "SQLite", "PostgreSQL",
    "MongoDB", "Firebase", "Hasura",
  ],
  Ferramentas: ["Git", "GitHub"],
};

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <div className="h-px bg-border mx-6 md:mx-12 lg:mx-24" />
      <Section id="skills" className="py-24 md:py-32">
        <div
          className="transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <SectionLabel>01 — Tecnologias</SectionLabel>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-mono text-xs tracking-widest uppercase mb-5 text-muted-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium font-mono border border-border bg-card rounded transition-colors hover:border-primary/50 hover:text-primary cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add pages/components/Skills.jsx
git commit -m "feat: redesign skills as categorized chips"
```

---

### Task 6: Projects from Firebase

**Files:**
- Modify: `pages/components/Projects.jsx` (full rewrite)

**Interfaces:**
- Consumes: `getProjectsAction` from `../../services/actions/ProjectActions`
- Consumes: `Section`, `SectionLabel`, `useInView`, lucide (`Github`, `ArrowUpRight`, `ExternalLink`)
- Maps: `name`→title, `description`, `link`; optional `year`, `tech`
- No project thumbnails in v1

- [ ] **Step 1: Rewrite `Projects.jsx`**

```jsx
import { useEffect, useState } from "react";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import getProjectsAction from "../../services/actions/ProjectActions";
import Section from "./Section";
import SectionLabel from "./SectionLabel";
import useInView from "./useInView";

function normalizeTech(tech) {
  if (!tech) return [];
  if (Array.isArray(tech)) return tech;
  if (typeof tech === "string") {
    return tech.split(",").map((t) => t.trim()).filter(Boolean);
  }
  return [];
}

export default function Projects() {
  const { ref, inView } = useInView();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await getProjectsAction();
        if (!cancelled) setProjects(data || []);
      } catch (err) {
        if (!cancelled) setError("Não foi possível carregar os projetos.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="h-px bg-border mx-6 md:mx-12 lg:mx-24" />
      <Section id="projects" className="py-24 md:py-32">
        <div
          className="transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <SectionLabel>02 — Projetos</SectionLabel>

          {loading && (
            <p className="text-sm text-muted-foreground">Carregando projetos…</p>
          )}
          {error && <p className="text-sm text-muted-foreground">{error}</p>}
          {!loading && !error && projects.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Nenhum projeto para exibir.
            </p>
          )}

          <div className="space-y-4">
            {projects.map((project, i) => {
              const tech = normalizeTech(project.tech);
              const title = project.name || project.title || "Projeto";
              const href = project.link || "#";

              return (
                <a
                  key={`${title}-${i}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-start justify-between gap-6 p-6 md:p-8 border border-border rounded bg-card transition-all duration-300 hover:border-primary/30"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {project.year ? (
                        <span className="font-mono text-xs text-muted-foreground">
                          {project.year}
                        </span>
                      ) : null}
                      {project.year ? (
                        <span className="w-1 h-1 rounded-full bg-border" />
                      ) : null}
                      <span className="font-mono text-xs text-primary">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight">
                      {title}
                    </h3>
                    {project.description ? (
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-lg">
                        {project.description}
                      </p>
                    ) : null}
                    {tech.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-xs px-2 py-0.5 rounded text-primary bg-primary/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all group-hover:border-primary group-hover:bg-primary/10">
                      <ExternalLink
                        size={14}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://github.com/dredeco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={16} />
              Ver todos no GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
```

- [ ] **Step 2: Smoke — projetos carregam**

```bash
npm run dev
```

Scroll até Projetos: lista do Firestore aparece (ou empty/error muted). Pare o servidor.

- [ ] **Step 3: Commit**

```bash
git add pages/components/Projects.jsx
git commit -m "feat: redesign projects section with Firebase data"
```

---

### Task 7: Education section

**Files:**
- Create: `pages/components/Education.jsx`

**Interfaces:**
- Anchor: `#educacao`
- Consumes: `Section`, `SectionLabel`, `useInView`

- [ ] **Step 1: Create `Education.jsx`**

```jsx
import Section from "./Section";
import SectionLabel from "./SectionLabel";
import useInView from "./useInView";

const items = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Estácio",
    period: "Em andamento",
    status: "current",
  },
  {
    degree: "Técnico em Informática",
    institution: "Instituto Federal Fluminense",
    period: "Concluído",
    status: "done",
  },
];

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <div className="h-px bg-border mx-6 md:mx-12 lg:mx-24" />
      <Section id="educacao" className="py-24 md:py-32">
        <div
          className="transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <SectionLabel>03 — Formação</SectionLabel>
          <div className="max-w-2xl">
            {items.map((edu, i) => (
              <div key={edu.degree} className="flex gap-6">
                <div className="flex flex-col items-center pt-1">
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 flex-shrink-0 mt-1 ${
                      edu.status === "current"
                        ? "border-primary bg-primary"
                        : "border-border bg-transparent"
                    }`}
                  />
                  {i < items.length - 1 && (
                    <div className="w-px flex-1 my-2 bg-border min-h-[48px]" />
                  )}
                </div>
                <div className="pb-10">
                  <span
                    className={`font-mono text-xs tracking-widest ${
                      edu.status === "current"
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {edu.period}
                  </span>
                  <h3 className="font-display text-xl font-semibold mb-1 tracking-tight mt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add pages/components/Education.jsx
git commit -m "feat: add education timeline section"
```

---

### Task 8: Contact + EmailJS

**Files:**
- Modify: `pages/components/Contact.jsx` (full rewrite)

**Interfaces:**
- Preserve EmailJS: `emailjs.sendForm('gmail', 'template_ptwinsd', e.target, 'RcD_dB2-94xJ045Fq')`
- Field names: `user_name`, `user_phone`, `user_email`, `subject`, `message`
- Success UI replaces form; error shows inline message

- [ ] **Step 1: Rewrite `Contact.jsx`**

```jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Send } from "lucide-react";
import Section from "./Section";
import SectionLabel from "./SectionLabel";
import useInView from "./useInView";

const fields = [
  { name: "user_name", label: "Nome", type: "text", placeholder: "Seu nome" },
  { name: "user_email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
  { name: "user_phone", label: "Telefone", type: "tel", placeholder: "+55 (21) 9xxxx-xxxx" },
  { name: "subject", label: "Assunto", type: "text", placeholder: "Sobre o projeto..." },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function sendEmail(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await emailjs.sendForm(
        "gmail",
        "template_ptwinsd",
        e.target,
        "RcD_dB2-94xJ045Fq"
      );
      setSent(true);
      e.target.reset();
    } catch (err) {
      setError("Não foi possível enviar. Tente novamente em instantes.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div ref={ref}>
      <div className="h-px bg-border mx-6 md:mx-12 lg:mx-24" />
      <Section id="contact" className="py-24 md:py-32">
        <div
          className="transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <SectionLabel>04 — Contato</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-none tracking-tight">
                Vamos trabalhar
                <br />
                <span className="text-primary">juntos.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm">
                Aberto a projetos freelance, colaborações e oportunidades de
                emprego. Respondo rapidamente.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Linkedin,
                    label: "linkedin.com/in/andrefersouza",
                    href: "https://www.linkedin.com/in/andrefersouza/",
                  },
                  {
                    icon: Github,
                    label: "github.com/dredeco",
                    href: "https://github.com/dredeco",
                  },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-8 h-8 rounded border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                      <Icon size={14} />
                    </div>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              {sent ? (
                <div className="flex flex-col items-center justify-center gap-4 h-72 border border-primary/30 rounded text-center p-8 bg-primary/5">
                  <Send size={28} className="text-primary" />
                  <p className="font-display text-lg font-semibold">
                    Mensagem enviada!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Obrigado pelo contato. Responderei em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={sendEmail} className="space-y-4">
                  {fields.map((field) => (
                    <div key={field.name}>
                      <label className="block font-mono text-xs text-muted-foreground mb-1.5 tracking-wide">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.name !== "user_phone"}
                        className="w-full px-4 py-3 text-sm border border-border rounded text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        style={{ background: "var(--input-background)" }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-mono text-xs text-muted-foreground mb-1.5 tracking-wide">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Descreva seu projeto ou oportunidade..."
                      className="w-full px-4 py-3 text-sm border border-border rounded text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      style={{ background: "var(--input-background)" }}
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60"
                  >
                    <Send size={14} />
                    {submitting ? "Enviando…" : "Enviar mensagem"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add pages/components/Contact.jsx
git commit -m "feat: redesign contact form with EmailJS"
```

---

### Task 9: Footer + page wiring

**Files:**
- Create: `pages/components/Footer.jsx`
- Modify: `pages/_app.js`
- Modify: `pages/index.js`
- Delete: `pages/components/About.jsx` (unused)

**Interfaces:**
- Page order: Main → Skills → Projects → Education → Contact
- Footer in `_app.js` below page content

- [ ] **Step 1: Create `Footer.jsx`**

```jsx
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/dredeco" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/andrefersouza/" },
  { icon: Instagram, href: "https://instagram.com/dredeco.dev" },
  { icon: Facebook, href: "https://www.facebook.com/dredeco/" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-24 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-muted-foreground">
          © {year} André Fernandes — Full-stack Developer
        </span>
        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Update `_app.js`**

```jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
```

- [ ] **Step 3: Update `index.js`**

```jsx
import Head from 'next/head'
import Contact from './components/Contact'
import Education from './components/Education'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dre.dev - Portfólio</title>
        <meta name="description" content="Portfólio de André Fernandes — Full-stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="scroll-smooth bg-background">
        <Main />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}
```

- [ ] **Step 4: Delete About**

```bash
git rm pages/components/About.jsx
```

- [ ] **Step 5: Full verification**

```bash
npm run build
npm run dev
```

Checklist no browser:
- [ ] Fundo dark + accent lime
- [ ] Tipografia Fraunces / Jakarta / Mono
- [ ] Navbar `Dre.dev` + âncoras
- [ ] Hero sem foto/teclado
- [ ] Skills em 3 colunas
- [ ] Projetos do Firebase
- [ ] Educação timeline
- [ ] Contato form + layout
- [ ] Footer ano + redes
- [ ] Mobile menu OK

- [ ] **Step 6: Commit**

```bash
git add pages/components/Footer.jsx pages/_app.js pages/index.js
git commit -m "feat: wire new sections and remove About"
```

---

## Spec coverage (self-review)

| Spec item | Task |
|-----------|------|
| Tokens / fonts / scrollbar | Task 1 |
| Shared Section / labels / motion hook | Task 2 |
| Navbar Dre.dev | Task 3 |
| Hero | Task 4 |
| Skills chips | Task 5 |
| Projects Firebase + fallbacks | Task 6 |
| Education | Task 7 |
| Contact EmailJS fields + UX | Task 8 |
| Footer + index wiring + remove About | Task 9 |
| No Vite / no shadcn | Global Constraints |
| Build verification | Tasks 1, 6, 9 |

Placeholder scan: none. Type/name consistency: anchors `#hero` `#skills` `#projects` `#educacao` `#contact` aligned across Navbar and sections.
