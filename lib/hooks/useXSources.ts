"use client";

import { useLocalStorage } from "./useLocalStorage";
import type { XSource } from "@/lib/types/x-feed";

const INITIAL_SOURCES: XSource[] = [
  {
    id: "1",
    name: "@961News",
    type: "account",
    isActive: true
  },
  {
    id: "2",
    name: "@BeirutTraffic",
    type: "account",
    isActive: true
  },
  {
    id: "3",
    name: "#Lebanon",
    type: "hashtag",
    isActive: true
  },
  {
    id: "4",
    name: "#Beirut",
    type: "hashtag",
    isActive: true
  }
];

export function useXSources() {
  const [sources, setSources] = useLocalStorage<XSource[]>("x-sources", INITIAL_SOURCES);

  const toggleSource = (id: string) => {
    setSources(prev => prev.map(source => 
      source.id === id ? { ...source, isActive: !source.isActive } : source
    ));
  };

  const addSource = (name: string, type: XSource['type']) => {
    const newSource: XSource = {
      id: crypto.randomUUID(),
      name,
      type,
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