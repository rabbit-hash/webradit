import { describe, it, expect } from "vitest";
import { ProfileRepository } from "@/models/repositories/ProfileRepository";
import { SocialRepository } from "@/models/repositories/SocialRepository";

describe("ProfileRepository & SocialRepository (Model Layer)", () => {
  it("should return valid profile information", () => {
    const profile = ProfileRepository.getProfile();
    expect(profile.name).toBe("Radith");
    expect(profile.fullName).toContain("Radith Akram");
    expect(profile.role).toBe("Full-stack Engineer");
    expect(profile.statusCards.length).toBeGreaterThanOrEqual(2);
  });

  it("should return valid social links", () => {
    const socials = SocialRepository.getAll();
    expect(socials.length).toBeGreaterThan(0);
    const github = SocialRepository.getByName("github");
    expect(github).toBeDefined();
    expect(github?.href).toContain("github.com");
  });
});
