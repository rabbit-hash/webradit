"use client";

import { useMemo, useState } from "react";
import { TechStackRepository } from "@/models/repositories/TechStackRepository";
import { SkillCategory } from "@/models/types/TechStack";

export interface TechStackViewModel {
  categories: SkillCategory[];
  activeCategoryId: string;
  setActiveCategoryId: (id: string) => void;
  filteredCategories: SkillCategory[];
  totalSkillsCount: number;
}

export function useTechStackViewModel(): TechStackViewModel {
  const categories = useMemo(() => TechStackRepository.getCategories(), []);
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");

  const filteredCategories = useMemo(() => {
    if (activeCategoryId === "all") return categories;
    return categories.filter((cat) => cat.id === activeCategoryId);
  }, [categories, activeCategoryId]);

  const totalSkillsCount = useMemo(() => {
    return categories.reduce((total, cat) => total + cat.skills.length, 0);
  }, [categories]);

  return {
    categories,
    activeCategoryId,
    setActiveCategoryId,
    filteredCategories,
    totalSkillsCount,
  };
}
