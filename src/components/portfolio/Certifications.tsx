import { Award } from "lucide-react";

const certs = [
  { title: "Java Programming", issuer: "Smart Yugam Academy", color: "from-orange-500 to-red-500" },
  { title: "TensorFlow 2.0", issuer: "Infosys", color: "from-blue-500 to-cyan-500" },
  { title: "Neural Networks", issuer: "Simplilearn", color: "from-purple-500 to-pink-500" },
  { title: "DBMS & Oracle Cloud", issuer: "Oracle", color: "from-red-500 to-orange-500" },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-3">/ certifications</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Continuous <span className="text-gradient">learning</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognized credentials across programming, AI, and cloud technologies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl bg-gradient-card border border-border p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-spring overflow-hidden"
            >
              <div
                className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${c.color} opacity-10 group-hover:opacity-20 blur-2xl transition-smooth`}
              />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary/10 grid place-items-center mb-4 group-hover:bg-gradient-primary group-hover:shadow-glow transition-smooth">
                  <Award className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="font-display font-semibold mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
