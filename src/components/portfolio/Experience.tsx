import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Game Developer Intern",
    company: "Clover Technology",
    location: "Coimbatore",
    period: "2025 — 2026",
    points: [
      "Building 3D models and animations for interactive game environments.",
      "Developing gameplay mechanics and visual effects in Unreal Engine.",
      "Collaborating with designers on character workflows using MetaHuman.",
    ],
    tags: ["Unreal Engine", "Blender", "MetaHuman", "3D Modeling"],
  },
  {
    role: "Data Analytics Intern",
    company: "IPCS Global Pvt Ltd",
    location: "Coimbatore",
    period: "2025",
    points: [
      "Performed data cleaning and transformation on real-world datasets.",
      "Built interactive visualizations and dashboards for business insights.",
      "Used Python and SQL to automate reporting and exploratory analysis.",
    ],
    tags: ["Python", "SQL", "Power BI", "Excel"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-3">/ experience</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Where I've <span className="text-gradient">built things</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hands-on internship experience across game development and data analytics.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-10 border-l-2 border-border space-y-10">
          {experiences.map((e, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[2.05rem] sm:-left-[3.05rem] top-2 h-5 w-5 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background grid place-items-center">
                <Briefcase className="h-2.5 w-2.5 text-primary-foreground" />
              </div>

              <div className="rounded-2xl bg-gradient-card border border-border p-6 sm:p-8 shadow-card hover:shadow-elegant transition-smooth">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold">{e.role}</h3>
                    <p className="text-primary font-medium">{e.company}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-mono text-xs text-primary">{e.period}</p>
                    <p className="text-muted-foreground flex items-center gap-1 justify-end mt-1">
                      <MapPin className="h-3 w-3" /> {e.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {e.points.map((p, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                  {e.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-secondary text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
