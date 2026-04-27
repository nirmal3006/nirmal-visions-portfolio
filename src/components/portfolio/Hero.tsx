import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-hero-glow"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-primary opacity-20 blur-3xl animate-glow-pulse"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent opacity-10 blur-3xl"
      />

      <div className="container relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for opportunities · Tamil Nadu, India
          </div>

          <div className="space-y-4">
            <p className="font-mono text-sm text-primary">{"<hello world />"}</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient">Nirmal</span>
              <br />
              Gopalakrishnan
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
              AI Enthusiast · Software Developer · Game Developer
            </h2>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Computer Science Engineering student passionate about building intelligent
            systems, immersive game experiences, and clean software. I turn ideas into
            shipped products — from neural networks to Unreal Engine worlds.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow rounded-full px-7">
              <a href="#projects">
                View Projects <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <a href="#contact">
                <Mail className="mr-1 h-4 w-4" /> Contact Me
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full px-7">
              <a href="/resume.pdf" download>
                <Download className="mr-1 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 pt-4 text-sm">
            {[
              { v: "4+", l: "Major Projects" },
              { v: "2", l: "Internships" },
              { v: "5+", l: "Certifications" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
                <div className="text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-30 blur-3xl animate-glow-pulse" />
            <div className="relative h-full w-full rounded-3xl glass shadow-elegant p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative z-10 text-center space-y-6">
                <div className="mx-auto h-32 w-32 rounded-full bg-gradient-primary grid place-items-center text-5xl font-display font-bold text-primary-foreground shadow-glow animate-float">
                  NG
                </div>
                <div className="space-y-2">
                  <div className="font-mono text-xs text-primary">$ whoami</div>
                  <p className="font-display text-lg font-semibold">Nirmal Gopalakrishnan</p>
                  <p className="text-sm text-muted-foreground">BE CSE · 2022–2026</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Python", "Java", "AI/ML", "Unreal"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full glass text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-2 shadow-elegant animate-float font-mono text-xs">
              {"</>"} Code
            </div>
            <div
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2 shadow-elegant animate-float font-mono text-xs"
              style={{ animationDelay: "1.5s" }}
            >
              🎮 Build
            </div>
            <div
              className="absolute top-1/3 -right-6 glass rounded-2xl px-4 py-2 shadow-elegant animate-float font-mono text-xs"
              style={{ animationDelay: "0.8s" }}
            >
              🧠 AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
