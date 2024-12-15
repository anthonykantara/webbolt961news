"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MetricCardProps } from "./types";

export function MetricCard({ metric }: MetricCardProps) {
  const { Icon } = metric.icon;
  
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{metric.label}</p>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-2xl font-semibold">{metric.value}</h3>
            <p className={cn(
              "text-sm flex items-center gap-1",
              metric.trend === "up" ? "text-green-600" : "text-red-600"
            )}>
              {metric.trend === "up" ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {metric.change}%
            </p>
          </div>
        </div>
        <Icon className={cn("h-5 w-5", metric.icon.color)} />
      </div>
    </Card>
  );
}