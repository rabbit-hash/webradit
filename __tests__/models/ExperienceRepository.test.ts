import { describe, it, expect } from "vitest";
import { ExperienceRepository } from "@/models/repositories/ExperienceRepository";

describe("ExperienceRepository (Model Layer)", () => {
  it("should return all experience records", () => {
    const experiences = ExperienceRepository.getAll();
    expect(experiences).toBeInstanceOf(Array);
    expect(experiences.length).toBeGreaterThan(0);
    expect(experiences[0]).toHaveProperty("title");
    expect(experiences[0]).toHaveProperty("company");
    expect(experiences[0]).toHaveProperty("date");
  });

  it("should filter latest experiences", () => {
    const latest = ExperienceRepository.getLatest();
    expect(latest.length).toBeGreaterThan(0);
    latest.forEach((exp) => {
      expect(exp.isLatest).toBe(true);
    });
  });
});
