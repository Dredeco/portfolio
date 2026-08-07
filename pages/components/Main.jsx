import { Github, Linkedin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import Section from "../../components/Section";
import useInView from "../../components/useInView";

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
