import { ProfileInfo, StatusCard } from "@/models/types/Profile";

export class ProfileRepository {
  private static profileData: ProfileInfo = {
    name: "Radith",
    fullName: "Radith Akram Ziyad Suin",
    role: "Full-stack Engineer",
    headline: "From idea to implementation.",
    tagline: "Building practical digital experiences. Focused on clean architecture, scalable backends, and refined interfaces.",
    bioParagraph1: "I'm Radith Akram Ziyad Suin, a full-stack engineer and Software Engineering student at Binus University. My work exists at the intersection of rigorous backend architecture and refined user experience.",
    bioParagraph2: "Currently, I specialize in constructing high-performance, scalable web applications. I have extensive experience building robust systems with Laravel and crafting dynamic, interactive front-ends with React and Next.js. I believe in writing code that is as legible as it is efficient, prioritizing maintainability and a deep understanding of core web technologies.",
    statusCards: [
      {
        label: "Current Status",
        title: "Computer Science Student",
        subtitle: "Bina Nusantara University",
      },
      {
        label: "Location & Focus",
        title: "Indonesia",
        subtitle: "Full-stack Web Development",
      },
    ],
  };

  /**
   * Retrieve profile information
   */
  static getProfile(): ProfileInfo {
    return { ...this.profileData };
  }

  /**
   * Retrieve status cards for About section
   */
  static getStatusCards(): StatusCard[] {
    return [...this.profileData.statusCards];
  }
}
