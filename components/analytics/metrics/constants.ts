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

export const METRICS = [
  {
    label: "Views",
    value: "34,999",
    change: 20,
    trend: "up",
    icon: {
      Icon: Eye,
      color: "text-[#FF0000]"
    }
  },
  {
    label: "Active Users",
    value: "12,543",
    change: 15,
    trend: "up",
    icon: {
      Icon: Users,
      color: "text-[#FF0000]"
    }
  },
  {
    label: "Revenue",
    value: "$15,420",
    change: 25,
    trend: "up",
    icon: {
      Icon: DollarSign,
      color: "text-[#FF0000]"
    }
  },
  {
    label: "Total Shares",
    value: "8,976",
    change: 8,
    trend: "up",
    icon: {
      Icon: Send,
      color: "text-[#FF0000]"
    }
  },
  {
    label: "Comments",
    value: "5,432",
    change: 12,
    trend: "up",
    icon: {
      Icon: MessageSquare,
      color: "text-[#FF0000]"
    }
  },
  {
    label: "Reactions",
    value: "28,976",
    change: 18,
    trend: "up",
    icon: {
      Icon: Heart, 
      color: "text-[#FF0000]"
    }
  }
];