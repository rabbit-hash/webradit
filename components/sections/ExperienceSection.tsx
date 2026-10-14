"use client";

import { useExperienceViewModel } from "@/viewmodels/useExperienceViewModel";

export default function ExperienceSection() {
  const { experiences } = useExperienceViewModel();

  return (
    <section id="experience" className="relative mb-32 scroll-mt-32 pt-20 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none select-none overflow-hidden flex items-start" aria-hidden="true">
        <span className="text-[clamp(100px,18vw,280px)] font-bold text-white/[0.02] tracking-tighter leading-none -ml-4">
          /WORK
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-12">
        {/* Left Column - Title */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h2 className="text-sm font-mono text-accent font-bold uppercase tracking-[0.2em] mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-accent mr-4"></span>
              Experience
            </h2>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-8 relative">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Year indicator */}
                <div className="text-sm font-mono text-accent mb-2">
                  {exp.date}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-medium text-foreground-heading tracking-tight mb-1">
                  {exp.company}
                </h3>
                
                <h4 className="text-lg text-foreground mb-4 font-normal">
                  {exp.title}
                </h4>
                
                <p className="text-base text-foreground font-normal leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                {/* Optional Certificate / Documentation link */}
                {(exp.certificate || (exp as any).documentation) && (
                  <div className="mt-6 flex gap-4">
                    {exp.certificate && (
                      <a href={exp.certificate} target="_blank" rel="noreferrer" className="text-sm font-mono text-accent hover:underline">
                        View Certificate ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
