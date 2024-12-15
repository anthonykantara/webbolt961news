"use client";

import { useMemo } from "react";
import type { XSource, XPost } from "@/lib/types/x-feed";

const MOCK_POSTS: XPost[] = [
  {
    id: "1",
    content: "🚨 Breaking: Major fire reported in downtown Beirut near Martyrs' Square. Fire crews responding. Stay clear of the area. #Beirut #Breaking",
    source: { id: "1", name: "@961News", type: "account" },
    publishedAt: new Date(Date.now() - 1000 * 30),
    url: "https://x.com/961News/1"
  },
  {
    id: "2",
    content: "⚠️ Traffic Alert: Airport road experiencing severe congestion due to multiple accidents. Expect delays of up to 45 minutes. #BeirutTraffic",
    source: { id: "2", name: "@BeirutTraffic", type: "account" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 5),
    url: "https://x.com/BeirutTraffic/1"
  },
  {
    id: "3",
    content: "Weather Update: Strong storm system approaching Lebanon. Expected to make landfall tonight. Take necessary precautions. #Lebanon #WeatherAlert",
    source: { id: "3", name: "@LebanonWeather", type: "account" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 15),
    url: "https://x.com/LebanonWeather/1"
  },
  {
    id: "4",
    content: "Protests scheduled for tomorrow in Downtown #Beirut. Several roads will be affected. Follow for live updates.",
    source: { id: "1", name: "@961News", type: "account" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 30),
    url: "https://x.com/961News/2"
  },
  {
    id: "5",
    content: "New cultural center opening next week in Hamra. Features local artists and exhibition space. #BeirutCulture #Art",
    source: { id: "4", name: "@BeirutCulture", type: "account" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 45),
    url: "https://x.com/BeirutCulture/1"
  },
  {
    id: "6",
    content: "Multiple reports of power outages in various districts. Working on restoration. #Beirut #Infrastructure",
    source: { id: "5", name: "@BeirutServices", type: "account" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 60),
    url: "https://x.com/BeirutServices/1"
  },
  {
    id: "7",
    content: "Restaurant Week returns to Beirut next month! Over 50 participating venues. Stay tuned for details. #BeirutFood #Lebanon",
    source: { id: "4", name: "@BeirutCulture", type: "account" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 90),
    url: "https://x.com/BeirutCulture/2"
  }
];

export function usePosts(sources: XSource[]) {
  const posts = useMemo(() => {
    const activeSourceIds = new Set(sources.filter(s => s.isActive).map(s => s.id));
    return MOCK_POSTS
      .filter(post => activeSourceIds.has(post.source.id))
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }, [sources]);

  return { posts };
}