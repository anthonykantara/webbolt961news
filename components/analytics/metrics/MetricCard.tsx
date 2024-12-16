"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { MetricBreakdown } from "./MetricBreakdown";
import { UserTypeBreakdown } from "./UserTypeBreakdown";
import type { Metric } from "../utils/types";

interface MetricCardProps {
  metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <Card className="p-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">{metric.label}</p>
          <div className={cn(
            "flex items-center text-sm",
            metric.trend === "up" ? "text-green-600" : "text-red-600"
          )}>
            {metric.trend === "up" ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 mr-1" />
            )}
            {metric.change}%
          </div>
        </div>

        <p className="text-2xl font-semibold">
          {metric.formattedValue}
        </p>

        {metric.breakdown && <MetricBreakdown breakdown={metric.breakdown} total={metric.value} />}
        {metric.userTypes && <UserTypeBreakdown userTypes={metric.userTypes} />}
      </div>
    </Card>
  );
}