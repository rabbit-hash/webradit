import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTechStackViewModel } from "@/viewmodels/useTechStackViewModel";

describe("useTechStackViewModel (ViewModel Layer)", () => {
  it("should initialize with all categories and activeCategoryId 'all'", () => {
    const { result } = renderHook(() => useTechStackViewModel());

    expect(result.current.activeCategoryId).toBe("all");
    expect(result.current.categories.length).toBeGreaterThan(0);
    expect(result.current.filteredCategories).toHaveLength(result.current.categories.length);
    expect(result.current.totalSkillsCount).toBeGreaterThan(0);
  });

  it("should filter categories when activeCategoryId is changed", () => {
    const { result } = renderHook(() => useTechStackViewModel());

    act(() => {
      result.current.setActiveCategoryId("frontend");
    });

    expect(result.current.activeCategoryId).toBe("frontend");
    expect(result.current.filteredCategories).toHaveLength(1);
    expect(result.current.filteredCategories[0].id).toBe("frontend");
  });
});
