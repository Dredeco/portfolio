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
