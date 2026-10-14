import { projects } from "@/data/projects";
import { Project } from "@/models/types/Project";

export class ProjectRepository {
  /**
   * Retrieve all projects from data source
   */
  static getAll(): Project[] {
    return [...projects];
  }

  /**
   * Retrieve featured projects (default top 4)
   */
  static getFeatured(limit: number = 4): Project[] {
    return projects.slice(0, limit);
  }

  /**
   * Retrieve remaining non-featured projects
   */
  static getOther(skip: number = 4): Project[] {
    return projects.slice(skip);
  }

  /**
   * Retrieve all unique tags used across projects
   */
  static getAllTags(): string[] {
    const tagsSet = new Set<string>();
    projects.forEach((p) => p.tags.forEach((tag) => tagsSet.add(tag)));
    return Array.from(tagsSet);
  }

  /**
   * Filter projects by tag
   */
  static getByTag(tag: string): Project[] {
    return projects.filter((p) => p.tags.includes(tag));
  }
}
