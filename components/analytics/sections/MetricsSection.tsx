"use client";

import { Card } from "@/components/ui/card";
import { MetricCard } from "../metrics/MetricCard";
import { useMetrics } from "../hooks/useMetrics";
import type { DateRange } from "../utils/types";

interface MetricsSectionProps {
  dateRange: DateRange;
}

export function MetricsSection({ dateRange }: MetricsSectionProps) {
  const { metrics } = useMetrics(/*dateRange*/);

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </Card>
  );
}