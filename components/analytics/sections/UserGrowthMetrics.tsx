"use client";

import { Card } from "@/components/ui/card";
import { AreaChart, Area } from "recharts";
import { cn } from "@/lib/utils";
import { BaseChart } from "../charts/BaseChart";
import { XAxis, YAxis } from "../charts/ChartAxis";
import { ChartGrid } from "../charts/ChartGrid";
import { ChartTooltip } from "../charts/ChartTooltip";
import { CHART_COLORS, CHART_CONFIG } from "../charts/config";
import type { DateRange } from "@/lib/types/dashboard";

const data = [
  { date: "Jan", total: 4000, new: 2400, returning: 1600 },
  { date: "Feb", total: 5000, new: 2800, returning: 2200 },
  { date: "Mar", total: 6000, new: 3200, returning: 2800 },
  { date: "Apr", total: 7000, new: 3600, returning: 3400 },
  { date: "May", total: 8500, new: 4200, returning: 4300 },
  { date: "Jun", total: 10000, new: 5000, returning: 5000 }
];

interface UserGrowthMetricsProps {
  dateRange: DateRange;
  detailed?: boolean;
}

export function UserGrowthMetrics({ dateRange, detailed = false }: UserGrowthMetricsProps) {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">User Growth</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
              <span>New Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]" />
              <span>Returning Users</span>
            </div>
          </div>
        </div>

        <div className="h-[300px]">
          <BaseChart>
            <AreaChart data={data}>
              <ChartGrid />
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip />
              <Area
                type="monotone"
                dataKey="new"
                xAxisId={CHART_CONFIG.defaultAxisId.x}
                stackId="1"
                stroke={CHART_COLORS.primary}
                fill={CHART_COLORS.primary}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="returning"
                xAxisId={CHART_CONFIG.defaultAxisId.x}
                stackId="1"
                stroke={CHART_COLORS.secondary}
                fill={CHART_COLORS.secondary}
                fillOpacity={0.6}
              />
            </AreaChart>
          </BaseChart>
        </div>

        {detailed && (
          <div className="grid grid-cols-3 gap-6 pt-6 border-t">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">User Types</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Registered</span>
                  <span>65%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Anonymous</span>
                  <span>35%</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Retention Rate</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Day 1</span>
                  <span>85%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Day 7</span>
                  <span>65%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Day 30</span>
                  <span>45%</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Top Sources</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Direct</span>
                  <span>40%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Social</span>
                  <span>35%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Search</span>
                  <span>25%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}