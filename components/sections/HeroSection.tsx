"use client";

import { Reveal } from "@/components/ui/reveal";
import { FloatingPaths } from "@/components/ui/background-paths";
import { useHeroViewModel } from "@/viewmodels/useHeroViewModel";

export default function HeroSection() {
  const { firstName, lastName, tagline, socials, actionLinks } = useHeroViewModel();

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-start px-6 lg:px-12 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mt-12">
        <div className="flex flex-col">
          <Reveal direction="up" delay={0.2}>
            <h1 className="text-[clamp(50px,10vw,140px)] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground-heading to-foreground/50 leading-[0.9]">
              {firstName} <br />
              {lastName}
            </h1>
          </Reveal>
        </div>

        <div className="flex flex-col md:max-w-md w-full">
          <Reveal direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-foreground font-normal leading-relaxed mb-10">
              {tagline}
            </p>
          </Reveal>
          
          <Reveal direction="up" delay={0.5}>
            <div className="flex items-center gap-6">
              {actionLinks.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className={`group inline-flex items-center gap-2 pb-1 border-b transition-colors duration-300 ${
                    action.isPrimary
                      ? "border-foreground-heading text-foreground-heading hover:text-accent hover:border-accent"
                      : "border-transparent text-foreground hover:text-foreground-heading"
                  }`}
                >
                  {action.label}
                  {action.isPrimary && (
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  )}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.6}>
            <div className="flex items-center gap-5 mt-10">
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/50 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
