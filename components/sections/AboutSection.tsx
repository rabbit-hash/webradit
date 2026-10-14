"use client";

import SplitText from "@/components/SplitText";
import { useAboutViewModel } from "@/viewmodels/useAboutViewModel";

export default function AboutSection() {
  const { profile, statusCards, headline, fullName } = useAboutViewModel();

  return (
    <section id="about" className="relative mb-32 scroll-mt-32 pt-20 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none select-none overflow-hidden flex items-start" aria-hidden="true">
        <span className="text-[clamp(100px,18vw,280px)] font-bold text-white/[0.02] tracking-tighter leading-none -ml-4">
          /ABOUT
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-12">
        {/* Left Column - Title */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h2 className="text-sm font-mono text-accent font-bold uppercase tracking-[0.2em] mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-accent mr-4"></span>
              About
            </h2>
            {/* @ts-ignore */}
            <SplitText
              text={headline}
              className="text-3xl md:text-4xl font-sans font-bold text-foreground-heading leading-tight"
              delay={30}
              duration={0.6}
              tag="h3"
              textAlign="left"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-8 flex flex-col space-y-12">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-foreground font-normal leading-relaxed">
              I'm <strong className="text-foreground-heading font-medium">{fullName}</strong>, a full-stack engineer and Software Engineering student at Binus University. My work exists at the intersection of rigorous backend architecture and refined user experience.
            </p>
            
            <p className="text-base md:text-lg text-foreground font-normal leading-relaxed">
              {profile.bioParagraph2}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {statusCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-[10px] uppercase font-mono tracking-wider text-accent block mb-2">
                  {card.label}
                </span>
                <span className="text-base text-foreground-heading font-semibold block">
                  {card.title}
                </span>
                <span className="text-sm text-foreground/60 mt-1 block">
                  {card.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
