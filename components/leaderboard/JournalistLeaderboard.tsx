"use client";

import { useState } from "react";
import { LeaderboardHeader } from "./header/LeaderboardHeader";
import { LeaderboardTabs } from "./tabs/LeaderboardTabs";
import { useLeaderboardData } from "@/lib/hooks/useLeaderboardData";
import type { TimeFilter } from "@/lib/types/leaderboard";

export function JournalistLeaderboard() {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("week");
  const { data, isLoading } = useLeaderboardData(timeFilter);

  return (
    <div className="p-6 space-y-6">
      <LeaderboardHeader 
        timeFilter={timeFilter}
        onTimeFilterChange={setTimeFilter}
      />
      <LeaderboardTabs 
        data={data}
        isLoading={isLoading}
      />
    </div>
  );
}