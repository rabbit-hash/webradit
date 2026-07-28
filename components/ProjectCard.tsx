import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
}

export default function ProjectCard({ title, description, tags, imageUrl, link }: ProjectCardProps) {
  const CardContent = (
    <div className="bg-card border border-border rounded-lg overflow-hidden group hover:border-accent/50 transition-all duration-300 hover:scale-[1.03] h-full flex flex-col">
      {/* Image Container */}
      <div className="w-full h-48 bg-border/50 relative overflow-hidden shrink-0">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] flex items-center justify-center">
            <span className="font-mono text-foreground/30 text-xs tracking-widest uppercase">No Image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-foreground-heading mb-3">{title}</h3>
        <p className="text-base text-foreground mb-6">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2.5 py-1 bg-background border border-border rounded text-xs font-mono text-foreground/80 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
