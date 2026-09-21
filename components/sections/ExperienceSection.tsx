import ExperienceItem from "@/components/ExperienceItem";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-24 scroll-mt-24">
      <h2 className="text-base font-mono text-accent font-bold uppercase tracking-widest mb-10">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            date={exp.date}
            description={exp.description}
            certificate={exp.certificate}
            isLatest={exp.isLatest}
          />
        ))}
      </div>
    </section>
  );
}
