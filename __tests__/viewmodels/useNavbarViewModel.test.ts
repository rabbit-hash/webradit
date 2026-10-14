import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useNavbarViewModel } from "@/viewmodels/useNavbarViewModel";

describe("useNavbarViewModel (ViewModel Layer)", () => {
  beforeEach(() => {
    window.scrollY = 0;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should provide 4 main navigation links", () => {
    const { result } = renderHook(() => useNavbarViewModel());
    expect(result.current.navLinks).toHaveLength(4);
    const labels = result.current.navLinks.map((l) => l.label);
    expect(labels).toEqual(["About", "Experience", "Projects", "Contact"]);
  });

  it("should set isScrolled to false when at the top of the page", () => {
    window.scrollY = 0;
    const { result } = renderHook(() => useNavbarViewModel());
    expect(result.current.isScrolled).toBe(false);
  });

  it("should update isScrolled to true when window is scrolled past 50px", () => {
    const { result } = renderHook(() => useNavbarViewModel());

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current.isScrolled).toBe(true);
  });
});
