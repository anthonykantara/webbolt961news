"use client";

import { useMemo } from "react";
import type { Source, Post } from "@/lib/types/source";

const MOCK_SOURCES: Source[] = [
  {
    id: "1",
    name: "961 News Channel",
    type: "telegram",
    enabled: true
  },
  {
    id: "2",
    name: "Breaking News",
    type: "telegram",
    enabled: true
  },
  {
    id: "3",
    name: "Lebanon Updates",
    type: "telegram",
    enabled: true
  }
];

const MOCK_POSTS: Post[] = [
  {
    id: "1",
    source: MOCK_SOURCES[0],
    content: "🚨 Urgent: Major development in Beirut",
    timestamp: new Date()
  },
  {
    id: "2",
    source: MOCK_SOURCES[0],
    content: "⚠️ Traffic alert: Heavy congestion on coastal highway",
    timestamp: new Date(Date.now() - 1000 * 60 * 5)
  },
  {
    id: "3",
    source: MOCK_SOURCES[0],
    content: "Weather Update: Storm expected tonight",
    timestamp: new Date(Date.now() - 1000 * 60 * 15)
  }
];

export function useMessagingSources(type: "telegram" | "whatsapp") {
  const sources = useMemo(() => 
    MOCK_SOURCES.filter(source => source.type === type),
    [type]
  );

  const posts = useMemo(() => 
    MOCK_POSTS.filter(post => post.source.type === type)
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()),
    [type]
  );

  return { sources, posts };
}