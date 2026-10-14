"use client";

import { useMemo } from "react";
import { ProfileRepository } from "@/models/repositories/ProfileRepository";
import { ProfileInfo, StatusCard } from "@/models/types/Profile";

export interface AboutViewModel {
  profile: ProfileInfo;
  statusCards: StatusCard[];
  fullName: string;
  role: string;
  headline: string;
}

export function useAboutViewModel(): AboutViewModel {
  const profile = useMemo(() => ProfileRepository.getProfile(), []);
  const statusCards = useMemo(() => ProfileRepository.getStatusCards(), []);

  return {
    profile,
    statusCards,
    fullName: profile.fullName,
    role: profile.role,
    headline: profile.headline,
  };
}
