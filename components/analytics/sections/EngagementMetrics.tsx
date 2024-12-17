"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line } from 'recharts';
import { cn } from "@/lib/utils";
import { BaseChart } from "../charts/BaseChart";
import { XAxis, YAxis } from "../charts/ChartAxis";
import { ChartGrid } from "../charts/ChartGrid";
import { ChartTooltip } from "../charts/ChartTooltip";
import { CHART_COLORS, CHART_CONFIG } from "../charts/config";
import type { DateRange } from "../utils/types";

const data = [
  { date: "Jan", engagement: 65, sessionTime: 4.2 },
  { date: "Feb", engagement: 68, sessionTime: 4.5 },
  { date: "Mar", engagement: 75, sessionTime: 4.8 },
  { date: "Apr", engagement: 72, sessionTime: 4.6 },
  { date: "May", engagement: 80, sessionTime: 5.1 },
  { date: "Jun", engagement: 85, sessionTime: 5.4 }
];

interface EngagementMetricsProps {
  dateRange: DateRange;
  detailed?: boolean;
}

export function EngagementMetrics({ dateRange, detailed = false }: EngagementMetricsProps) {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Engagement</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
              <span>Engagement Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]" />
              <span>Session Time</span>
            </div>
          </div>
        </div>

        <div className="h-[300px]">
          <BaseChart>
            <LineChart data={data}>
              <ChartGrid />
              <XAxis dataKey="date" xAxisId={CHART_CONFIG.defaultAxisId.x} />
              <YAxis
                yAxisId="left"
                tickFormatter={(value) => `${value}%`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickFormatter={(value) => `${value}m`}
              />
              <ChartTooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="engagement"
                xAxisId={CHART_CONFIG.defaultAxisId.x}
                stroke={CHART_COLORS.primary}
                strokeWidth={2}
                dot={false}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="sessionTime"
                xAxisId={CHART_CONFIG.defaultAxisId.x}
                stroke={CHART_COLORS.secondary}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </BaseChart>
        </div>

        {detailed && (
          <div className="grid grid-cols-3 gap-6 pt-6 border-t">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Top Content Types</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Breaking News</span>
                  <span>85%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Analysis</span>
                  <span>72%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Features</span>
                  <span>68%</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Interaction Types</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Comments</span>
                  <span>45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shares</span>
                  <span>35%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Reactions</span>
                  <span>20%</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Peak Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>8:00 - 10:00</span>
                  <span>32%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>12:00 - 14:00</span>
                  <span>28%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>18:00 - 20:00</span>
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