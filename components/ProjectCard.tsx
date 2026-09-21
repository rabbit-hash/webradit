"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type BadgeType = "private" | "enterprise" | "open-source";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  images?: ProjectImage[];
  link?: string;
  badge?: BadgeType;
  role?: string;
  highlights?: string[];
}

const badgeConfig: Record<BadgeType, { label: string; icon: string; className: string }> = {
  private: {
    label: "Private",
    icon: "🔒",
    className: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  enterprise: {
    label: "Enterprise",
    icon: "🏢",
    className: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  },
  "open-source": {
    label: "Open Source",
    icon: "🌐",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
};

function ImageCarousel({ images }: { images: ProjectImage[] }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-slide every 4 seconds, pause on hover
  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isHovered, next, images.length]);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation Arrows - visible on hover */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 z-10"
            aria-label="Previous image"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 z-10"
            aria-label="Next image"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrent(index);
              }}
              className={`rounded-full transition-all duration-300 ${
                index === current
                  ? "w-5 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm text-white text-xs font-mono z-10">
          {current + 1}/{images.length}
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  images,
  link,
  badge,
  role,
  highlights,
}: ProjectCardProps) {
  const badgeInfo = badge ? badgeConfig[badge] : null;

  // Build image list: use `images` array if provided, fallback to single `imageUrl`
  const imageList: ProjectImage[] = images && images.length > 0
    ? images
    : imageUrl
      ? [{ src: imageUrl, alt: title }]
      : [];

  const CardContent = (
    <div className="bg-card border border-border rounded-xl overflow-hidden group hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/5 h-full flex flex-col">
      {/* Image Container */}
      <div className="w-full h-48 bg-border/50 relative overflow-hidden shrink-0">
        {imageList.length > 0 ? (
          <ImageCarousel images={imageList} />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] flex items-center justify-center">
            <span className="font-mono text-foreground/30 text-xs tracking-widest uppercase">
              No Image
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent pointer-events-none" />

        {/* Badge */}
        {badgeInfo && (
          <div
            className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono font-medium backdrop-blur-sm z-10 ${badgeInfo.className}`}
          >
            <span>{badgeInfo.icon}</span>
            <span>{badgeInfo.label}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title + Role */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-foreground-heading">{title}</h3>
          {role && (
            <p className="text-xs font-mono text-accent/80 mt-1 tracking-wide uppercase">
              {role}
            </p>
          )}
        </div>

        <p className="text-sm text-foreground leading-relaxed mb-4">{description}</p>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-foreground/80"
              >
                <span className="text-accent mt-0.5 shrink-0 text-xs">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-background border border-border rounded-md text-xs font-mono text-foreground/80 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Link indicator */}
      {link && (
        <div className="px-6 py-3 border-t border-border flex items-center gap-2 text-xs font-mono text-foreground/40 group-hover:text-accent transition-colors duration-300">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span>View Live Project</span>
        </div>
      )}
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
