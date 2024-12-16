"use client";

import { Card } from "@/components/ui/card";
import { formatNumber, formatPercentage } from "../../utils/formatting";

interface StatsCardProps {
  title: string;
  stats: Array<{
    label: string;
    value: number;
    total?: number;
    highlight?: boolean;
  }>;
}

export function StatsCard({ title, stats }: StatsCardProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="space-y-2">
        {stats.map((stat) => (
          <div 
            key={stat.label} 
            className={cn(
              "flex justify-between",
              stat.highlight && "text-green-600"
            )}
          >
            <span className="text-gray-500">{stat.label}</span>
            <div className="text-right">
              <span>{formatNumber(stat.value)}</span>
              {stat.total && (
                <span className="ml-2 text-gray-400">
                  ({formatPercentage(stat.value, stat.total)})
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}