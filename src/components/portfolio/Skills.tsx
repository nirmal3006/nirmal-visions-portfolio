import { Boxes, Brain, Code2, Database, Gamepad2, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Skill = { name: string; level: number };
type Group = { icon: React.ElementType; title: string; skills: Skill[] };

const groups: Group[] = [
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
    ],
  },
  {
    icon: Boxes,
    title: "Technologies",
    skills: [
      { name: "Web Development", level: 80 },
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 80 },
    ],
  },
  {
    icon: Shield,
    title: "Concepts",
    skills: [
      { name: "OOP", level: 90 },
      { name: "Secure Design", level: 70 },
      { name: "Cloud Computing", level: 75 },
    ],
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    skills: [
      { name: "Blender", level: 75 },
      { name: "Unreal Engine", level: 80 },
      { name: "MetaHuman / 3D", level: 70 },
    ],
  },
  {
    icon: Database,
    title: "Data Analytics",
    skills: [
      { name: "Excel", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Power BI", level: 75 },
    ],
  },
  {
    icon: Brain,
    title: "AI / ML",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "Neural Networks", level: 78 },
    ],
  },
];

const SkillBar = ({ skill, visible }: { skill: Skill; visible: boolean }) => (
  <div>
    <div className="flex items-baseline justify-between mb-1.5">
      <span className="text-sm font-medium">{skill.name}</span>
      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <div
        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
        style={{ width: visible ? `${skill.level}%` : "0%" }}
      />
    </div>
  </div>
);

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30 relative" ref={ref}>
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-3">/ skills</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Tools of the <span className="text-gradient">trade</span>
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
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <SkillBar key={s.name} skill={s} visible={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
