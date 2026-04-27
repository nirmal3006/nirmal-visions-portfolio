import { useEffect } from "react";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    // SEO: structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nirmal Gopalakrishnan",
      jobTitle: "Software Developer & AI Enthusiast",
      email: "nirmal.cse.37@gmail.com",
      telephone: "+91-7010561614",
      address: { "@type": "PostalAddress", addressRegion: "Tamil Nadu", addressCountry: "India" },
      sameAs: ["https://www.linkedin.com/in/nirmal-gopalakrishnan-b09999200"],
      knowsAbout: ["Python", "Java", "AI", "Machine Learning", "Game Development", "Unreal Engine"],
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
