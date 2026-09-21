interface ExperienceItemProps {
  title: string;
  date: string;
  company: string;
  description: string;
  isLatest?: boolean;
  certificate?: string;
  documentation?: string;
}

export default function ExperienceItem({ title, date, company, description, isLatest, certificate, documentation }: ExperienceItemProps) {
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
          
          {(certificate || documentation) && (
            <div className="mt-6 flex flex-wrap gap-4">
              {certificate && (
                <a 
                  href={certificate} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors bg-accent/10 px-4 py-2 rounded-full border border-accent/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                  View Certificate
                </a>
              )}
              {documentation && (
                <a 
                  href={documentation} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors bg-accent/10 px-4 py-2 rounded-full border border-accent/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  View Documentation
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
