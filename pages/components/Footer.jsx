import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/dredeco", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/andrefersouza/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/dredeco.dev", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/dredeco/", label: "Facebook" },
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
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={label}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
