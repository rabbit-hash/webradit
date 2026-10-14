"use client";

import { useState, useMemo } from "react";
import { ProjectRepository } from "@/models/repositories/ProjectRepository";
import { Project } from "@/models/types/Project";

export interface ProjectsViewModel {
  featuredProjects: Project[];
  otherProjects: Project[];
  allProjects: Project[];
  allTags: string[];
  selectedTag: string | null;
  searchQuery: string;
  hasFilters: boolean;
  setSelectedTag: (tag: string | null) => void;
  setSearchQuery: (query: string) => void;
  clearFilters: () => void;
}

export function useProjectsViewModel(): ProjectsViewModel {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allProjects = useMemo(() => ProjectRepository.getAll(), []);
  const allTags = useMemo(() => ProjectRepository.getAllTags(), []);

  // Filtered list based on selected tag and search query
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesTag = !selectedTag || project.tags.includes(selectedTag);
      const matchesQuery =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTag && matchesQuery;
    });
  }, [allProjects, selectedTag, searchQuery]);

  // Featured projects: if filters applied, display all filtered; otherwise top 4
  const hasFilters = Boolean(selectedTag || searchQuery);

  const featuredProjects = useMemo(() => {
    if (hasFilters) {
      return filteredProjects;
    }
    return ProjectRepository.getFeatured(4);
  }, [hasFilters, filteredProjects]);

  const otherProjects = useMemo(() => {
    if (hasFilters) {
      return [];
    }
    return ProjectRepository.getOther(4);
  }, [hasFilters]);

  const clearFilters = () => {
    setSelectedTag(null);
    setSearchQuery("");
  };

  return {
    featuredProjects,
    otherProjects,
    allProjects,
    allTags,
    selectedTag,
    searchQuery,
    hasFilters,
    setSelectedTag,
    setSearchQuery,
    clearFilters,
  };
}
