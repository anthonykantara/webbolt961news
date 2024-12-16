export const CHART_COLORS = {
  primary: "hsl(var(--chart-1))",
  secondary: "hsl(var(--chart-2))",
  tertiary: "hsl(var(--chart-3))",
  quaternary: "hsl(var(--chart-4))",
  quinary: "hsl(var(--chart-5))",
  background: {
    primary: "rgba(255, 0, 0, 0.1)",
    secondary: "rgba(0, 132, 255, 0.1)",
    tertiary: "rgba(0, 196, 140, 0.1)"
  }
} as const;

export const CHART_CONFIG = {
  defaultAxisId: {
    x: "time",
    y: "value"
  },
  axis: {
    stroke: "#6B7280",
    fontSize: 12,
    tickMargin: 8,
    axisLine: false,
    tickLine: false
  },
  grid: {
    stroke: "#F3F4F6",
    strokeDasharray: "3 3",
    vertical: false
  }
} as const;