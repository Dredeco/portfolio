import Section from '../../components/Section';
import SectionLabel from '../../components/SectionLabel';
import useInView from '../../components/useInView';

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
