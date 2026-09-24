import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { techStackFeatures } from "@/data/techstack";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="mt-24 mb-24 scroll-mt-24">
      <h2 className="text-base font-mono text-accent font-bold uppercase tracking-widest mb-8">Tech Stack</h2>
      {/* We use a custom row height and gaps for a perfect masonry look */}
      <BentoGrid className="lg:auto-rows-[16rem]">
        {techStackFeatures.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
