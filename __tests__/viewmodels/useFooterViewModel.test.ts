import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useFooterViewModel } from "@/viewmodels/useFooterViewModel";

describe("useFooterViewModel (ViewModel Layer)", () => {
  it("should provide current calendar year", () => {
    const { result } = renderHook(() => useFooterViewModel());
    const expectedYear = new Date().getFullYear();

    expect(result.current.currentYear).toBe(expectedYear);
    expect(result.current.ownerName).toBe("RADITH AKRAM");
    expect(result.current.socials.length).toBeGreaterThan(0);
  });
});
