"use client";

"use client";

import { Trophy } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { TimeFilter } from "@/lib/types/leaderboard";

interface LeaderboardHeaderProps {
  timeFilter: TimeFilter;
  onTimeFilterChange: (value: TimeFilter) => void;
}

export function LeaderboardHeader({ 
  timeFilter, 
  onTimeFilterChange
}: LeaderboardHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Trophy className="h-8 w-8 text-[#FF0000]" />
        <h1 className="text-2xl font-semibold">Leaderboard</h1>
      </div>
      
      <Select value={timeFilter} onValueChange={onTimeFilterChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="week">This Week</SelectItem>
          <SelectItem value="month">This Month</SelectItem>
          <SelectItem value="year">This Year</SelectItem>
          <SelectItem value="all">All Time</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}