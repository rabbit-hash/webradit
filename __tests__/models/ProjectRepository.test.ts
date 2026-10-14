import { describe, it, expect } from "vitest";
import { ProjectRepository } from "@/models/repositories/ProjectRepository";

describe("ProjectRepository (Model Layer)", () => {
  it("should return all projects", () => {
    const projects = ProjectRepository.getAll();
    expect(projects).toBeInstanceOf(Array);
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0]).toHaveProperty("title");
    expect(projects[0]).toHaveProperty("description");
    expect(projects[0]).toHaveProperty("tags");
  });

  it("should return featured projects with default limit of 4", () => {
    const featured = ProjectRepository.getFeatured(4);
    expect(featured.length).toBeLessThanOrEqual(4);
  });

  it("should return remaining projects without overlapping featured projects", () => {
    const featured = ProjectRepository.getFeatured(4);
    const other = ProjectRepository.getOther(4);
    const all = ProjectRepository.getAll();

    expect(featured.length + other.length).toBe(all.length);
    const featuredTitles = featured.map((p) => p.title);
    other.forEach((p) => {
      expect(featuredTitles).not.toContain(p.title);
    });
  });

  it("should extract unique tags across all projects", () => {
    const tags = ProjectRepository.getAllTags();
    expect(tags).toBeInstanceOf(Array);
    expect(tags.length).toBeGreaterThan(0);
    const uniqueTags = new Set(tags);
    expect(uniqueTags.size).toBe(tags.length);
  });

  it("should filter projects by tag correctly", () => {
    const tags = ProjectRepository.getAllTags();
    const testTag = tags[0];
    const filtered = ProjectRepository.getByTag(testTag);

    expect(filtered.length).toBeGreaterThan(0);
    filtered.forEach((p) => {
      expect(p.tags).toContain(testTag);
    });
  });
});
