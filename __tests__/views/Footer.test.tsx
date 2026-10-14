import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/sections/Footer";

describe("Footer Component (View Layer)", () => {
  it("should render owner name, role, and current year", () => {
    render(<Footer />);

    expect(screen.getByText("RADITH AKRAM")).toBeInTheDocument();
    expect(screen.getByText("Full-stack Engineer")).toBeInTheDocument();
    
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument();
  });
});
