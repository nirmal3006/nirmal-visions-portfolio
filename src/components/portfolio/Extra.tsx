import { GraduationCap, Sparkles } from "lucide-react";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";

const skills = [
  "NX CAD Modeling",
  "3D Mechanical Part Design",
  "Additive Manufacturing Basics",
  "CAD Drafting & Design",
  "Product Modeling",
  "Engineering Design Fundamentals",
];

const photos: { src: string; alt: string }[] = [
  { src: training1, alt: "Naan Mudhalvan NX CAD training session at Christ The King Polytechnic College" },
  { src: training2, alt: "Corporate training classroom session with engineering students" },
];

export const Extra = () => {
  return (
    <section id="extra" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-3">/ extra</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Corporate <span className="text-gradient">Training Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond projects and internships — sharing knowledge with the next generation of engineers.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-card border border-border p-6 sm:p-10 shadow-card">
          <div className="flex items-start gap-4 mb-6">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold">Corporate Trainer — Naan Mudhalvan Program</h3>
              <p className="text-primary font-medium">NX CAD & Additive Manufacturing</p>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              Worked as a Corporate Trainer for the Naan Mudhalvan program, training students in NX CAD Tools and the
              fundamentals of Additive Manufacturing. Guided students in designing basic 3D mechanical components and
              industrial parts using CAD modeling techniques.
            </p>
            <p>
              Helped learners understand product design concepts, mechanical drafting, and 3D part development for
              manufacturing applications.
            </p>
          </div>

          <div className="mb-8">
            <p className="font-mono text-sm text-primary mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Key Skills Covered
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-secondary text-sm font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {photos.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              {photos.map((p, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-card hover:shadow-elegant transition-smooth"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
