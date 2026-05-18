import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Category = "All" | "AI" | "Web" | "Game" | "Software";

interface Project {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  demo?: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: "Stuttering Detection with CNN + BiLSTM",
    category: "AI",
    description:
      "Hybrid CNN–BiLSTM model that detects stuttering patterns (repetitions, prolongations, blocks) and reconstructs fluent speech via ASR, NLP refinement, and TTS — surfaced through an interactive diagnostic dashboard.",
    features: [
      "MFCC-based acoustic feature extraction",
      "Whisper ASR + spaCy/NLTK NLP refinement",
      "TTS reconstruction of fluent speech",
      "Real-time and offline processing",
    ],
    tech: ["Python", "TensorFlow", "Keras", "Librosa", "Whisper", "Flask"],
    github: "#",
    emoji: "🗣️",
  },
  {
    title: "AI-Powered Recommendation Engine",
    category: "AI",
    description:
      "Hybrid recommendation system combining collaborative and content-based filtering, served via a Flask API.",
    features: ["Collaborative filtering", "Content-based filtering", "REST API"],
    tech: ["Python", "TensorFlow", "PyTorch", "Flask"],
    github: "#",
    demo: "#",
    emoji: "🧠",
  },
  {
    title: "SAR Image Colorization",
    category: "AI",
    description:
      "Deep learning pipeline that colorizes Synthetic Aperture Radar imagery using GANs and CNNs.",
    features: ["GAN architecture", "CNN feature extraction", "Image-to-image translation"],
    tech: ["Python", "PyTorch", "OpenCV", "GAN"],
    github: "#",
    emoji: "🛰️",
  },
  {
    title: "File Sharing & Storage System",
    category: "Web",
    description:
      "Secure cloud-based file sharing platform with end-to-end encryption and access controls.",
    features: ["AES encryption", "Cloud storage", "User authentication"],
    tech: ["Python", "Cloud", "Encryption", "Web"],
    github: "#",
    demo: "#",
    emoji: "☁️",
  },
  {
    title: "Stylized 3D Game Environment",
    category: "Game",
    description:
      "A fully modeled and textured 3D game environment built in Blender — designed with attention to composition, lighting, and atmosphere for use in real-time game engines.",
    features: [
      "Modular environment modeling",
      "PBR texturing & materials",
      "Cinematic lighting setup",
      "Game-engine ready assets",
    ],
    tech: ["Blender", "3D Modeling", "Texturing", "Lighting"],
    demo: "https://www.linkedin.com/posts/nirmal-gopalakrishnan-b099992a0_gameenvironment-gamedevelopment-blender3d-share-7407310760755961856-SHfZ",
    emoji: "🏞️",
  },
  {
    title: "3D Game Asset Showcase",
    category: "Game",
    description:
      "Hand-crafted 3D game-ready assets sculpted, modeled, and textured in Blender — showcasing form, silhouette, and material work for stylized game pipelines.",
    features: [
      "High-to-low poly workflow",
      "UV unwrapping & baking",
      "Stylized PBR materials",
      "Render presentation",
    ],
    tech: ["Blender", "3D Art", "Substance", "Rendering"],
    demo: "https://www.linkedin.com/posts/nirmal-gopalakrishnan-b099992a0_gamedevelopment-blender3d-3dartist-ugcPost-7422595204031098880--0Kl",
    emoji: "🎮",
  },
  {
    title: "ATM System",
    category: "Software",
    description:
      "Console-based ATM simulation in Java demonstrating OOP principles and secure authentication flow.",
    features: ["Object-oriented design", "Secure auth", "Transaction history"],
    tech: ["Java", "OOP", "Security"],
    github: "#",
    emoji: "🏧",
  },
];

const categories: Category[] = ["All", "AI", "Web", "Game", "Software"];

export const Projects = () => {
  const [filter, setFilter] = useState<Category>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/30 relative">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-primary mb-3">/ projects</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Selected <span className="text-gradient">work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A mix of AI research, secure systems, and software engineering — projects
              that pushed me to learn deeply.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 glass rounded-full p-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-smooth",
                  filter === c
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl bg-gradient-card border border-border p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-spring overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-smooth" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-primary/10 grid place-items-center text-3xl">
                    {p.emoji}
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-secondary text-primary">
                    {p.category}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2 group-hover:text-gradient transition-smooth">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {p.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  {p.github && (
                    <Button asChild size="sm" variant="ghost" className="rounded-full">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" /> Code
                      </a>
                    </Button>
                  )}
                  {p.demo && (
                    <Button asChild size="sm" variant="ghost" className="rounded-full">
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            More projects in this category coming soon.
          </div>
        )}
      </div>
    </section>
  );
};
