import type { RealTimeData } from "./types";

export function generateRealTimeData(minutes: number): RealTimeData[] {
  return Array.from({ length: minutes }, (_, i) => ({
    time: `${i}m ago`,
    users: Math.floor(Math.random() * 100) + 50
  })).reverse();
}

export function formatMetricValue(value: number, type: "number" | "currency" | "percentage"): string {
  switch (type) {
    case "currency":
      return `$${value.toLocaleString()}`;
    case "percentage":
      return `${value}%`;
    default:
      return value.toLocaleString();
  }
}