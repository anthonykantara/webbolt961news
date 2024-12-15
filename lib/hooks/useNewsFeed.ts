"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { fetchNewsItems } from "@/lib/services/news";
import type { NewsItem, NewsSource } from "@/lib/types/news-feed";

export function useNewsFeed() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sources, setSources] = useLocalStorage<NewsSource[]>("news-sources", []);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadItems = async () => {
      setIsLoading(true);
      try {
        const data = await fetchNewsItems(sources);
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch news items:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadItems();
  }, [sources]);

  const filteredItems = items
    .filter(item => 
      sources.find(s => s.id === item.source.id)?.isActive &&
      (!searchQuery || item.headline.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  const toggleSource = (sourceId: string) => {
    setSources(prev => prev.map(source => 
      source.id === sourceId ? { ...source, isActive: !source.isActive } : source
    ));
  };

  const addSource = (url: string, name: string) => {
    const newSource: NewsSource = {
      id: crypto.randomUUID(),
      name,
      url,
      isActive: true
    };
    setSources(prev => [...prev, newSource]);
  };

  const runItem = async (itemId: string) => {
    // Implement run logic
    console.log('Running item:', itemId);
  };

  return {
    items: filteredItems,
    sources,
    isLoading,
    searchQuery,
    setSearchQuery,
    toggleSource,
    addSource,
    runItem
  };
}