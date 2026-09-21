import AboutSection from "@/components/sections/AboutSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/sections/Footer";

import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <Reveal direction="up" delay={0.1}>
        <AboutSection />
      </Reveal>
      
      <Reveal direction="up" delay={0.1}>
        <TechStackSection />
      </Reveal>
      
      <Reveal direction="up" delay={0.1}>
        <ExperienceSection />
      </Reveal>
      
      <Reveal direction="up" delay={0.1}>
        <ProjectsSection />
      </Reveal>
      
      <Reveal direction="none" delay={0.1}>
        <Footer />
      </Reveal>
    </div>
  );
}
