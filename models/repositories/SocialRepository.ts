import { socials } from "@/data/socials";
import { SocialLink } from "@/models/types/Social";

export class SocialRepository {
  /**
   * Retrieve all social links
   */
  static getAll(): SocialLink[] {
    return [...socials];
  }

  /**
   * Find social link by name
   */
  static getByName(name: string): SocialLink | undefined {
    return socials.find((s) => s.name.toLowerCase() === name.toLowerCase());
  }
}
