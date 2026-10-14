"use client";

import { useMemo } from "react";
import { ProfileRepository } from "@/models/repositories/ProfileRepository";
import { SocialRepository } from "@/models/repositories/SocialRepository";
import { SocialLink } from "@/models/types/Social";

export interface HeroActionLink {
  label: string;
  href: string;
  isPrimary: boolean;
}

export interface HeroViewModel {
  firstName: string;
  lastName: string;
  tagline: string;
  socials: SocialLink[];
  actionLinks: HeroActionLink[];
}

export function useHeroViewModel(): HeroViewModel {
  const profile = useMemo(() => ProfileRepository.getProfile(), []);
  const socials = useMemo(() => SocialRepository.getAll(), []);

  const actionLinks: HeroActionLink[] = [
    { label: "Selected Work", href: "#projects", isPrimary: true },
    { label: "Contact Me", href: "#contact", isPrimary: false },
  ];

  return {
    firstName: "RADITH",
    lastName: "AKRAM.",
    tagline: profile.tagline,
    socials,
    actionLinks,
  };
}
