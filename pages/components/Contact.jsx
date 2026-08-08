import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Send } from "lucide-react";
import Section from "../../components/Section";
import SectionLabel from "../../components/SectionLabel";
import useInView from "../../components/useInView";

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
      await emailjs.sendForm('gmail', 'template_ptwinsd', e.target, 'RcD_dB2-94xJ045Fq');
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
