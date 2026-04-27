import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nirmal Gopalakrishnan · Crafted with care.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/nirmal-gopalakrishnan-b09999200"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="h-10 w-10 rounded-full glass grid place-items-center hover:shadow-glow hover:-translate-y-0.5 transition-spring"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:nirmal.cse.37@gmail.com"
            aria-label="Email"
            className="h-10 w-10 rounded-full glass grid place-items-center hover:shadow-glow hover:-translate-y-0.5 transition-spring"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="h-10 w-10 rounded-full glass grid place-items-center hover:shadow-glow hover:-translate-y-0.5 transition-spring"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
