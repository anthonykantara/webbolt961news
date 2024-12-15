"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import { SourcesDialog } from "./SourcesDialog";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

interface NewsItem {
  id: string;
  timestamp: Date;
  outlet: string;
  headline: string;
  url: string;
}

const MOCK_NEWS: NewsItem[] = [
  {
    id: "1",
    timestamp: new Date(),
    outlet: "Lebanon News",
    headline: "Breaking: Major development in downtown Beirut",
    url: "https://example.com/article1"
  },
  {
    id: "2",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    outlet: "Beirut Daily",
    headline: "Traffic disruption due to ongoing protests",
    url: "https://example.com/article2"
  }
];

export function NewsFeed() {
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const [news] = useState<NewsItem[]>(MOCK_NEWS);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">News Feed</h2>
        <Button
          variant="outline"
          onClick={() => setIsSourcesOpen(true)}
          className="flex items-center gap-2"
        >
          <Settings2 className="h-4 w-4" />
          Sources
        </Button>
      </div>

      <div className="space-y-3">
        {news.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-500">
                {formatDistanceToNow(item.timestamp)} ago
              </span>
              <span className="text-gray-400">•</span>
              <span className="font-medium text-gray-700">{item.outlet}</span>
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex-1 text-gray-900 hover:text-blue-600",
                  "transition-colors duration-200"
                )}
              >
                {item.headline}
              </a>
            </div>
          </Card>
        ))}
      </div>

      <SourcesDialog
        open={isSourcesOpen}
        onOpenChange={setIsSourcesOpen}
      />
    </div>
  );
}