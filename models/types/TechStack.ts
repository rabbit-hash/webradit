import { ReactNode } from "react";

export interface TechSkill {
  name: string;
  icon: ReactNode;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: TechSkill[];
}
