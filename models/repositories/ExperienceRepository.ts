import { experiences } from "@/data/experience";
import { Experience } from "@/models/types/Experience";

export class ExperienceRepository {
  /**
   * Retrieve all experience records
   */
  static getAll(): Experience[] {
    return [...experiences];
  }

  /**
   * Retrieve latest or active experiences
   */
  static getLatest(): Experience[] {
    return experiences.filter((exp) => exp.isLatest);
  }
}
