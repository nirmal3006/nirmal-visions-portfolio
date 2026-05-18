import { ArrowRight, Download, Mail, MapPin, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const heroCharacter = "https://kommodo.ai/i/01pfkiQ4InVej9ULp1Tp";

const orbitIcons = [
  { label: "PY", style: "top-[8%] left-[10%]", color: "from-yellow-400 to-blue-500", delay: "0s" },
  { label: "{ }", style: "top-[28%] left-[-2%]", color: "from-emerald-400 to-teal-600", delay: "0.6s" },
  { label: "AI", style: "bottom-[18%] left-[6%]", color: "from-fuchsia-500 to-purple-600", delay: "1.2s" },
  { label: "JS", style: "top-[12%] right-[8%]", color: "from-amber-400 to-orange-500", delay: "0.3s" },
  { label: "UE", style: "top-[40%] right-[-2%]", color: "from-slate-700 to-slate-900", delay: "0.9s" },
  { label: "DB", style: "bottom-[14%] right-[6%]", color: "from-rose-500 to-red-600", delay: "1.5s" },
];

const Lightning = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 160" className={className} aria-hidden>
    <defs>
      <linearGradient id="boltGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(22 95% 60%)" />
        <stop offset="100%" stopColor="hsl(36 100% 55%)" />
      </linearGradient>
    </defs>
    <path
      d="M55 0 L10 90 L40 90 L25 160 L90 60 L58 60 L75 0 Z"
      fill="url(#boltGrad)"
      stroke="hsl(36 100% 70%)"
      strokeWidth="1.5"
    />
  </svg>
);

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden"
    >
      {/* Warm radial glow background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-hero-glow opacity-80" />

      {/* Decorative lightning bolts */}
      <Lightning className="absolute top-1/3 -right-4 w-32 lg:w-44 opacity-90 drop-shadow-[0_0_30px_hsl(22_95%_55%/0.6)] animate-float" />
      <Lightning
        className="absolute bottom-10 left-4 w-24 lg:w-32 opacity-80 -rotate-12 drop-shadow-[0_0_25px_hsl(22_95%_55%/0.5)] animate-float"
      />

      <div className="container relative z-10 grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
        {/* LEFT — copy */}
        <div className="space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for opportunities
            <span className="text-border">·</span>
            <MapPin className="h-3 w-3" /> Tamil Nadu, India
          </div>

          <div className="space-y-3">
            <p className="font-display text-2xl sm:text-3xl text-foreground/90">
              Hey, I am <span className="text-gradient font-bold">Nirmal</span>
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              AI & Software
              <br />
              <span className="text-gradient">Developer</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed pt-2">
              I want to take myself to the next level by building intelligent
              systems, immersive games, and clean software on your project.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-glow rounded-full px-8 text-base"
            >
              <a href="#contact">
                Hire me <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 border-primary/40 hover:bg-primary/10">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full px-7">
              <a href="/resume.pdf" download>
                <Download className="mr-1.5 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>

          {/* Testimonial card */}
          <div className="relative max-w-md mt-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="glass rounded-2xl p-5 shadow-elegant border border-primary/20">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed mb-4">
                "Nirmal is a deeply curious engineer who blends AI craft with
                shipping discipline. He picks up new stacks fast and consistently
                delivers polished, thoughtful work."
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center text-sm font-bold text-primary-foreground shadow-glow">
                  AK
                </div>
                <div>
                  <p className="text-sm font-semibold">Akilan S T</p>
                  <p className="text-xs text-primary">Trainer , HR · Clover Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — character + orbital icons */}
        <div className="relative animate-scale-in">
          <div className="relative aspect-square max-w-[560px] mx-auto">
            {/* Orbit rings */}
            <div className="absolute inset-[6%] rounded-full border border-primary/15" />
            <div className="absolute inset-[16%] rounded-full border border-primary/20" />
            <div className="absolute inset-[26%] rounded-full border border-primary/10" />

            {/* Glow */}
            <div className="absolute inset-[20%] bg-gradient-primary opacity-25 blur-3xl rounded-full animate-glow-pulse" />

            {/* Character */}
            <img
              src={heroCharacter}
              alt="Nirmal Gopalakrishnan illustrated portrait"
              width={1024}
              height={1024}
              className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_30px_40px_hsl(22_95%_30%/0.5)]"
            />

            {/* Floating tech icon badges */}
            {orbitIcons.map((ic) => (
              <div
                key={ic.label}
                className={`absolute ${ic.style} z-20 animate-float`}
                style={{ animationDelay: ic.delay }}
              >
                <div
                  className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br ${ic.color} grid place-items-center text-white font-mono font-bold text-sm shadow-elegant ring-1 ring-white/20`}
                >
                  {ic.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
