import { useEffect, useState } from "react";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import getProjectsAction from "../../services/actions/ProjectActions";
import Section from "../../components/Section";
import SectionLabel from "../../components/SectionLabel";
import useInView from "../../components/useInView";

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
                        {String(i + 1).padStart(2, "0")}
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
