"use client";

import { Card } from "@/components/ui/card";
import { MetricCard } from "./MetricCard";
import { METRICS } from "./constants";

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {METRICS.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}