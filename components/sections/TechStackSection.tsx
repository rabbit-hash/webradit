"use client";

import { useTechStackViewModel } from "@/viewmodels/useTechStackViewModel";

export default function TechStackSection() {
  const { filteredCategories } = useTechStackViewModel();

  return (
    <section id="tech-stack" className="relative mb-32 scroll-mt-32 pt-20 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none select-none overflow-hidden flex items-start" aria-hidden="true">
        <span className="text-[clamp(100px,18vw,280px)] font-bold text-white/[0.02] tracking-tighter leading-none -ml-4">
          /SKILLS
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 pt-12">
        <h2 className="text-3xl font-sans font-bold text-foreground-heading leading-tight mb-4">
          Skills
        </h2>
        <p className="text-base text-foreground font-normal">
          The primary tools, languages, and frameworks I use to build robust digital experiences.
        </p>
      </div>

      <div className="flex flex-col gap-12 max-w-5xl mx-auto px-6">
        {filteredCategories.map((category) => (
          <div key={category.id}>
            <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-6 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-4 group cursor-default">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl border border-white/5 bg-white/[0.02] flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:bg-accent/5 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-accent/10">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground/50 group-hover:text-foreground-heading transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
