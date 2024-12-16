"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RankingList } from "./RankingList";
import { LoadingState } from "./LoadingState";
import type { LeaderboardData } from "@/lib/types/leaderboard";

interface LeaderboardTabsProps {
  data: LeaderboardData;
  isLoading: boolean;
}

export function LeaderboardTabs({ data, isLoading }: LeaderboardTabsProps) {
  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <Tabs defaultValue="views" className="space-y-6">
      <TabsList className="bg-white border-b rounded-none w-full justify-start h-12 p-0">
        <TabsTrigger value="views">Total Views</TabsTrigger>
        <TabsTrigger value="average">Views Per Post</TabsTrigger>
        <TabsTrigger value="engagement">Engagement</TabsTrigger>
        <TabsTrigger value="shares">Shares</TabsTrigger>
        <TabsTrigger value="speed">Publishing Speed</TabsTrigger>
      </TabsList>

      <TabsContent value="views">
        <RankingList rankings={data.totalViews} metric="views" />
      </TabsContent>

      <TabsContent value="average">
        <RankingList rankings={data.averageViews} metric="average" />
      </TabsContent>

      <TabsContent value="engagement">
        <RankingList rankings={data.engagement} metric="engagement" />
      </TabsContent>

      <TabsContent value="shares">
        <RankingList rankings={data.shares} metric="shares" />
      </TabsContent>

      <TabsContent value="speed">
        <RankingList rankings={data.publishingSpeed} metric="speed" />
      </TabsContent>
    </Tabs>
  );
}