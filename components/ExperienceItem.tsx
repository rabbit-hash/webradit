interface ExperienceItemProps {
  title: string;
  date: string;
  company: string;
  description: string;
  isLatest?: boolean;
}

export default function ExperienceItem({ title, date, company, description, isLatest }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
        {/* Date on desktop, hidden on mobile */}
        <div className="hidden md:block col-span-1 text-base font-mono text-foreground/60 text-right pr-6 mt-1">
          {date}
        </div>

        {/* Content */}
        <div className="md:col-span-3 relative pb-12">
          {/* Timeline line */}
          <div className="absolute left-[-2rem] md:left-[-1.5rem] top-2 bottom-0 w-px bg-border group-last:bg-transparent"></div>
          
          {/* Timeline dot */}
          <div className={`absolute left-[-2.25rem] md:left-[-1.75rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 ${isLatest ? 'bg-accent border-accent' : 'bg-background border-foreground/30'}`}></div>
          
          {/* Date on mobile */}
          <div className="md:hidden text-base font-mono text-foreground/60 mb-2">
            {date}
          </div>
          
          <h3 className="text-2xl font-semibold text-foreground-heading tracking-tight mb-1">{title}</h3>
          <div className="text-sm font-mono text-accent uppercase tracking-widest mb-4">{company}</div>
          <p className="text-foreground leading-relaxed text-base/relaxed md:text-lg/relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
