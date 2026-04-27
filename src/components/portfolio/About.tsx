import { GraduationCap, Lightbulb, Target, Zap } from "lucide-react";

const traits = [
  { icon: Lightbulb, title: "Adaptable", desc: "Quick to pick up new stacks, tools, and paradigms." },
  { icon: Target, title: "Problem Solver", desc: "Strong DSA foundation with a pragmatic engineering mindset." },
  { icon: Zap, title: "Builder", desc: "I ship — from concept and prototype to production." },
];

const education = [
  {
    period: "2022 — 2026",
    title: "B.E. Computer Science Engineering",
    place: "Kathir College of Engineering",
    detail: "GPA: 7.1 / 10",
  },
  {
    period: "2020 — 2022",
    title: "Higher Secondary (HSC)",
    place: "State Board",
    detail: "Computer Science stream",
  },
  {
    period: "2019 — 2020",
    title: "SSLC",
    place: "State Board",
    detail: "Foundation in mathematics & sciences",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-3">/ about</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Engineer with a <span className="text-gradient">curious mind</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm a Computer Science Engineering student who loves the intersection
            of intelligence, software craft, and interactive worlds. I learn fast,
            build with intent, and care deeply about how things feel — not just how they work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {traits.map((t) => (
            <div
              key={t.title}
              className="group relative rounded-2xl bg-gradient-card border border-border p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-spring"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary/10 grid place-items-center mb-4 group-hover:bg-gradient-primary group-hover:shadow-glow transition-smooth">
                <t.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="font-display text-2xl font-bold">Education</h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-border space-y-8">
            {education.map((e, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[2.05rem] sm:-left-[2.55rem] top-1.5 h-4 w-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                <div className="rounded-2xl bg-gradient-card border border-border p-5 shadow-card hover:shadow-elegant transition-smooth">
                  <p className="font-mono text-xs text-primary mb-1">{e.period}</p>
                  <h4 className="font-display text-lg font-semibold">{e.title}</h4>
                  <p className="text-sm text-muted-foreground">{e.place}</p>
                  <p className="text-sm font-medium mt-2">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
