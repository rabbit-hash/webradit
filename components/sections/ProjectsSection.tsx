import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-base font-mono text-accent font-bold uppercase tracking-widest mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            badge={project.badge as any}
            role={project.role}
            link={project.link}
            highlights={project.highlights}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
}
