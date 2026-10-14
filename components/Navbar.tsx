"use client";

import { useNavbarViewModel } from "@/viewmodels/useNavbarViewModel";
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";

export default function Navbar() {
  const { isScrolled, navLinks } = useNavbarViewModel();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-border ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md py-4 shadow-sm"
          : "bg-card/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-center relative">
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-foreground-heading transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pl-4 border-l border-border">
            <AnimatedThemeToggler />
          </div>
        </nav>

        {/* Mobile toggler */}
        <div className="md:hidden flex items-center justify-center w-full">
          <AnimatedThemeToggler />
        </div>
      </div>
    </header>
  );
}
