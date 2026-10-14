"use client";

import { useMemo } from "react";
import { SocialRepository } from "@/models/repositories/SocialRepository";
import { ProfileRepository } from "@/models/repositories/ProfileRepository";
import { SocialLink } from "@/models/types/Social";

export interface FooterViewModel {
  currentYear: number;
  socials: SocialLink[];
  ownerName: string;
  role: string;
}

export function useFooterViewModel(): FooterViewModel {
  const socials = useMemo(() => SocialRepository.getAll(), []);
  const profile = useMemo(() => ProfileRepository.getProfile(), []);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return {
    currentYear,
    socials,
    ownerName: "RADITH AKRAM",
    role: profile.role,
  };
}
