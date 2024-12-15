import { LucideIcon } from "lucide-react";

export interface Metric {
  label: string;
  value: string;
  change: number;
  trend: "up" | "down";
  icon: {
    Icon: LucideIcon;
    color: string;
  };
}

export interface MetricCardProps {
  metric: Metric;
}