"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ContentRow } from "./ContentRow";

const POPULAR_UPDATES = [
  {
    title: "Breaking: Major development in downtown Beirut",
    views: 12500,
    shares: 450,
    comments: 89
  },
  {
    title: "Traffic disruption on coastal highway",
    views: 8900,
    shares: 320,
    comments: 45
  }
];

const POPULAR_ARTICLES = [
  {
    title: "Analysis: Economic Impact of Recent Events",
    views: 15600,
    shares: 890,
    comments: 234
  },
  {
    title: "Interview: Minister Discusses New Initiatives",
    views: 12300,
    shares: 567,
    comments: 123
  }
];

export function PopularContent() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Popular Content</h2>
      <Tabs defaultValue="updates">
        <TabsList>
          <TabsTrigger value="updates">Live Updates</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
        </TabsList>

        <TabsContent value="updates">
          <ScrollArea className="h-[300px]">
            <div className="space-y-2">
              {POPULAR_UPDATES.map((update, i) => (
                <ContentRow key={i} item={update} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="articles">
          <ScrollArea className="h-[300px]">
            <div className="space-y-2">
              {POPULAR_ARTICLES.map((article, i) => (
                <ContentRow key={i} item={article} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </Card>
  );
}