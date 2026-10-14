import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar Component (View Layer)", () => {
  it("should render navigation links correctly", () => {
    render(<Navbar />);

    const aboutLinks = screen.getAllByText("About");
    const expLinks = screen.getAllByText("Experience");
    const projLinks = screen.getAllByText("Projects");
    const contactLinks = screen.getAllByText("Contact");

    expect(aboutLinks.length).toBeGreaterThan(0);
    expect(expLinks.length).toBeGreaterThan(0);
    expect(projLinks.length).toBeGreaterThan(0);
    expect(contactLinks.length).toBeGreaterThan(0);
  });
});
