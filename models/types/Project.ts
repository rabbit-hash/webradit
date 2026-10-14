export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  badge?: "freelance" | "enterprise" | "personal" | string;
  role?: string;
  link?: string;
  highlights?: string[];
  images?: ProjectImage[];
}
