"use client";

import { useMemo, useState } from "react";
import { ExperienceRepository } from "@/models/repositories/ExperienceRepository";
import { Experience } from "@/models/types/Experience";

export interface ExperienceViewModel {
  experiences: Experience[];
  selectedExperience: Experience | null;
  selectExperience: (exp: Experience | null) => void;
  totalExperiences: number;
}

export function useExperienceViewModel(): ExperienceViewModel {
  const experiences = useMemo(() => ExperienceRepository.getAll(), []);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return {
    experiences,
    selectedExperience,
    selectExperience: setSelectedExperience,
    totalExperiences: experiences.length,
  };
}
