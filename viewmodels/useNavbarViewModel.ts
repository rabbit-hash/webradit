"use client";

import { useState, useEffect, useMemo, useCallback } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarViewModel {
  isScrolled: boolean;
  navLinks: NavLink[];
  scrollToSection: (href: string) => void;
}

export function useNavbarViewModel(): NavbarViewModel {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo<NavLink[]>(
    () => [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const scrollToSection = useCallback((href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return {
    isScrolled,
    navLinks,
    scrollToSection,
  };
}
