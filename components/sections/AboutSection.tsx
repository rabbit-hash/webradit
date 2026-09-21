import Lanyard from "@/components/Lanyard";
import SplitText from "@/components/SplitText";

export default function AboutSection() {
  return (
    <section id="about" className="mb-24 scroll-mt-24 relative">
      {/* Lanyard Animation - Responsive */}
      <div className="relative xl:absolute -mt-52 lg:-mt-64 xl:mt-0 xl:right-full xl:-mr-[120px] xl:-top-64 w-full xl:w-[500px] shrink-0 z-0 pointer-events-auto flex justify-center xl:block">
        <div className="xl:sticky xl:top-0 w-full">
          <Lanyard position={[0, 1.8, 25]} gravity={[0, -40, 0]} transparent={true} frontImage="/real-profile.jpg" />
        </div>
      </div>

      <SplitText
        text="About Me"
        className="text-base font-mono text-accent font-bold uppercase tracking-widest mb-6 relative z-10"
        delay={50}
        duration={0.5}
        tag="h2"
        textAlign="left"
        onLetterAnimationComplete={() => {}}
      />
      <div className="text-foreground text-lg md:text-xl leading-relaxed space-y-6">
        <p>
          I am a full-stack engineer, currently studying Computer Science - Software Engineering at Binus University.
          My work exists at the intersection of rigorous backend architecture and refined user experience.
        </p>
        <p>
          Currently, I specialize in constructing high-performance, accessible, and scalable web applications.
          I have extensive experience building robust backend systems with <strong>Laravel</strong> and crafting
          dynamic, interactive front-ends with <strong>React</strong> and <strong>Next.js</strong>. I believe in writing code
          that is as legible as it is efficient, prioritizing maintainability and a deep understanding of core web technologies.
        </p>
        <p>
          When I'm not pushing pixels or optimizing database queries, I enjoy exploring new architectural patterns
          and seeking inspiration outside the traditional bounds of software engineering.
        </p>
      </div>
    </section>
  );
}
