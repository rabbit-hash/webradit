"use client";

import { useProjectsViewModel } from "@/viewmodels/useProjectsViewModel";
import { ProjectCarousel } from "@/components/ProjectCarousel";

export default function ProjectsSection() {
  const { featuredProjects, otherProjects } = useProjectsViewModel();

  return (
    <section id="projects" className="relative mb-32 scroll-mt-32 pt-20 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none select-none overflow-hidden flex items-start" aria-hidden="true">
        <span className="text-[clamp(100px,18vw,280px)] font-bold text-white/[0.02] tracking-tighter leading-none -ml-4">
          /PROJECTS
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 pt-12">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h2 className="text-sm font-mono text-accent font-bold uppercase tracking-[0.2em] mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-accent mr-4"></span>
              Selected Work
            </h2>
            <h3 className="text-3xl font-sans font-bold text-foreground-heading leading-tight mt-4">
              A selection of digital products and systems I've built.
            </h3>
          </div>
        </div>
        
        <div className="lg:col-span-8 hidden lg:block" />
      </div>

      <div className="space-y-32 md:space-y-48">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}>
              {/* Image Container */}
              <div className="w-full lg:w-3/5 overflow-hidden rounded-sm border border-border/50 relative aspect-video bg-neutral-900/50">
                {project.images && project.images.length > 0 && (
                  <ProjectCarousel images={project.images} />
                )}
                {/* Overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <span className="text-accent font-mono text-xs tracking-widest mb-4">
                  0{index + 1} // {project.badge?.toUpperCase()}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-bold text-foreground-heading tracking-tight mb-6">
                  {project.title}
                </h3>
                
                <p className="text-base md:text-lg text-foreground font-normal leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-mono text-foreground-heading hover:text-accent transition-colors group/link w-fit">
                    VIEW PROJECT
                    <span className="ml-2 transform transition-transform group-hover/link:translate-x-1">→</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* More Work Section */}
      {otherProjects.length > 0 && (
        <div className="mt-48 pt-20 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground-heading mb-10">More Work</h3>
          <div className="flex flex-col">
            {otherProjects.map((project, index) => (
              <div key={index} className="group border-b border-border py-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/5 transition-colors px-4 -mx-4 rounded-sm cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full md:w-3/4">
                  <h4 className="text-xl font-medium text-foreground-heading group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs font-mono text-foreground/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 w-full md:w-1/4 flex justify-start md:justify-end">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-mono text-accent">
                      View →
                    </a>
                  ) : (
                    <span className="text-sm font-mono text-foreground/40">Private</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
