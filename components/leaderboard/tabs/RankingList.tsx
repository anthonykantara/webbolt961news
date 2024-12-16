"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Flame } from "lucide-react";
import { Medal } from "../badges/Medal";
import { formatMetricValue } from "@/lib/utils/formatting";
import { formatStreak } from "@/lib/utils/time";
import type { Ranking, MetricType } from "@/lib/types/leaderboard";

interface RankingListProps {
  rankings: Ranking[];
  metric: MetricType;
}

export function RankingList({ rankings, metric }: RankingListProps) {
  return (
    <div className="space-y-3">
      {rankings.map((ranking, index) => (
        <Card key={ranking.id} className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {index < 3 && <Medal position={index + 1} />}
              {index >= 3 && (
                <span className="w-8 h-8 flex items-center justify-center text-gray-400 font-medium">
                  {index + 1}
                </span>
              )}

              <Avatar className="h-10 w-10">
                <AvatarImage src={ranking.avatar} />
                <AvatarFallback>{ranking.name[0]}</AvatarFallback>
              </Avatar>

              <div className="min-w-0">
                <h3 className="font-medium flex items-center gap-2">
                  <span className="truncate">{ranking.name}</span>
                  {index < 3 && ranking.streak > 0 && (
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Flame className="h-4 w-4 text-orange-500" />
                      {formatStreak(ranking.streak)}
                    </div>
                  )}
                </h3>
              </div>
            </div>

            <div className="text-lg font-semibold">
              {formatMetricValue(ranking.value, metric)}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}