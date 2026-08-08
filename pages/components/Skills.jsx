import Section from '../../components/Section';
import SectionLabel from '../../components/SectionLabel';
import useInView from '../../components/useInView';

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
