"use client";

import { useLocalStorage } from "./useLocalStorage";
import type { WebsiteSource } from "@/lib/types/website-feed";

const INITIAL_SOURCES: WebsiteSource[] = [
  {
    id: "1",
    name: "Lebanon News",
    url: "https://example.com/lebanon-news",
    isActive: true
  },
  {
    id: "2",
    name: "Beirut Daily",
    url: "https://example.com/beirut-daily",
    isActive: true
  },
  {
    id: "3",
    name: "Beirut Culture",
    url: "https://example.com/beirut-culture",
    isActive: true
  }
];

export function useWebsiteSources() {
  const [sources, setSources] = useLocalStorage<WebsiteSource[]>("website-sources", INITIAL_SOURCES);

  const toggleSource = (id: string) => {
    setSources(prev => prev.map(source => 
      source.id === id ? { ...source, isActive: !source.isActive } : source
    ));
  };

  const addSource = (url: string, name: string) => {
    const newSource: WebsiteSource = {
      id: crypto.randomUUID(),
      name,
      url,
      isActive: true
    };
    setSources(prev => [...prev, newSource]);
  };

  const removeSource = (id: string) => {
    setSources(prev => prev.filter(source => source.id !== id));
  };

  return {
    sources,
    toggleSource,
    addSource,
    removeSource
  };
}