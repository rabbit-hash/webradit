import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useProjectsViewModel } from "@/viewmodels/useProjectsViewModel";

describe("useProjectsViewModel (ViewModel Layer)", () => {
  it("should initialize with default states and without filters", () => {
    const { result } = renderHook(() => useProjectsViewModel());

    expect(result.current.hasFilters).toBe(false);
    expect(result.current.selectedTag).toBeNull();
    expect(result.current.searchQuery).toBe("");
    expect(result.current.featuredProjects.length).toBeLessThanOrEqual(4);
    expect(result.current.allProjects.length).toBeGreaterThan(0);
  });

  it("should filter projects when search query is updated", () => {
    const { result } = renderHook(() => useProjectsViewModel());

    act(() => {
      result.current.setSearchQuery("Pempek");
    });

    expect(result.current.hasFilters).toBe(true);
    expect(result.current.featuredProjects.length).toBeGreaterThan(0);
    result.current.featuredProjects.forEach((p) => {
      const match =
        p.title.toLowerCase().includes("pempek") ||
        p.description.toLowerCase().includes("pempek");
      expect(match).toBe(true);
    });
  });

  it("should filter projects when a tag is selected", () => {
    const { result } = renderHook(() => useProjectsViewModel());
    const availableTag = result.current.allTags[0];

    act(() => {
      result.current.setSelectedTag(availableTag);
    });

    expect(result.current.hasFilters).toBe(true);
    expect(result.current.selectedTag).toBe(availableTag);
    result.current.featuredProjects.forEach((p) => {
      expect(p.tags).toContain(availableTag);
    });
  });

  it("should reset all filters when clearFilters is called", () => {
    const { result } = renderHook(() => useProjectsViewModel());

    act(() => {
      result.current.setSearchQuery("Laravel");
      result.current.setSelectedTag("React");
    });
    expect(result.current.hasFilters).toBe(true);

    act(() => {
      result.current.clearFilters();
    });

    expect(result.current.hasFilters).toBe(false);
    expect(result.current.searchQuery).toBe("");
    expect(result.current.selectedTag).toBeNull();
  });
});
