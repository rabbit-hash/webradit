import AboutSection from "@/components/sections/AboutSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
