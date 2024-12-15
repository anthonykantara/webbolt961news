export const REVENUE_SOURCES = [
  { name: "Advertising", value: 45000 },
  { name: "Subscriptions", value: 35000 },
  { name: "Donations", value: 15000 },
  { name: "Other", value: 5000 }
];

export const PRIMARY_METRICS = [
  { label: "Total Users", value: "34,567", change: 12.5, trend: "up" },
  { label: "Page Views", value: "245,678", change: 8.3, trend: "up" },
  { label: "Engagement Rate", value: "68%", change: -2.1, trend: "down" },
  { label: "Avg. Time on Site", value: "4:32", change: 15.7, trend: "up" }
];

export const CHART_COLORS = {
  primary: "hsl(var(--chart-1))",
  secondary: "hsl(var(--chart-2))",
  tertiary: "hsl(var(--chart-3))",
  quaternary: "hsl(var(--chart-4))",
  quinary: "hsl(var(--chart-5))"
} as const;