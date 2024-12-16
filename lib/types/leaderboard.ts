export type TimeFilter = "week" | "month" | "year" | "all";
export type MetricType = "views" | "average" | "engagement" | "shares" | "speed";

export interface Ranking {
  id: string;
  name: string;
  avatar: string;
  value: number;
  streak: number;
}

export interface LeaderboardData {
  totalViews: Ranking[];
  averageViews: Ranking[];
  engagement: Ranking[];
  shares: Ranking[];
  publishingSpeed: Ranking[];
}