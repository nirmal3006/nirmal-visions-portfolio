import { Boxes, Brain, Code2, Database, Gamepad2, Shield } from "lucide-react";

type Skill = { name: string };
type Group = { icon: React.ElementType; title: string; skills: Skill[] };

const groups: Group[] = [
  {
    icon: Code2,
    title: "Programming",
    skills: [{ name: "Python" }, { name: "Java" }, { name: "C" }],
  },
  {
    icon: Boxes,
    title: "Technologies",
    skills: [{ name: "Web Development" }, { name: "Data Structures" }, { name: "Algorithms" }],
  },
  {
    icon: Shield,
    title: "Concepts",
    skills: [{ name: "OOP" }, { name: "Secure Design" }, { name: "Cloud Computing" }],
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    skills: [{ name: "Blender" }, { name: "Unreal Engine" }, { name: "MetaHuman / 3D" }],
  },
  {
    icon: Database,
    title: "Data Analytics",
    skills: [{ name: "Excel" }, { name: "SQL" }, { name: "Power BI" }],
  },
  {
    icon: Brain,
    title: "AI / ML",
    skills: [{ name: "TensorFlow" }, { name: "PyTorch" }, { name: "Neural Networks" }],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-3">/ skills</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Skills <span className="text-gradient">trade</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A growing toolkit spanning AI/ML, software engineering, game development,
            and data analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl bg-gradient-card border border-border p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-spring"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary/10 grid place-items-center">
                  <g.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s.name}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary border border-border text-foreground"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
