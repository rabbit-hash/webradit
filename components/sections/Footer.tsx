"use client";

import { useFooterViewModel } from "@/viewmodels/useFooterViewModel";

export default function Footer() {
  const { currentYear, socials, ownerName, role } = useFooterViewModel();

  return (
    <section id="contact" className="w-full bg-card pt-32 pb-12 border-t border-border flex flex-col items-center justify-center relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-medium text-foreground-heading leading-[1.1] mb-8 tracking-tight">
          Let's build something <br />
          <span className="italic text-foreground">together.</span>
        </h2>

        <p className="text-lg md:text-xl text-foreground font-normal mb-16 max-w-xl mx-auto">
          Have an idea, opportunity, or project? Let's talk.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-32">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.href} 
              target={social.href.startsWith("http") ? "_blank" : undefined}
              className="text-foreground-heading font-mono text-sm uppercase tracking-wider hover:text-accent transition-colors duration-300 flex flex-col items-center gap-2 group"
            >
              <div className="p-4 border border-border rounded-full group-hover:border-accent group-hover:scale-105 transition-all duration-300">
                {social.svg}
              </div>
              <span className="mt-2">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="w-full flex flex-col md:flex-row items-center justify-between text-xs font-mono text-foreground/50 border-t border-border/50 pt-8 px-6 relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
          <span className="font-bold text-foreground-heading">{ownerName}</span>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-border" />
          <span>{role}</span>
        </div>
        <div className="mt-4 md:mt-0">
          &copy; {currentYear} Radith Akram
        </div>
      </footer>
    </section>
  );
}
