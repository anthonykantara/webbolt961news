"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar } from "recharts";
import { cn } from "@/lib/utils";
import { BaseChart } from "../charts/BaseChart";
import { XAxis, YAxis } from "../charts/ChartAxis";
import { ChartGrid } from "../charts/ChartGrid";
import { ChartTooltip } from "../charts/ChartTooltip";
import { CHART_COLORS, CHART_CONFIG } from "../charts/config";
import type { DateRange } from "../utils/types";

const openRateData = [
  { date: "Mon", rate: 65 },
  { date: "Tue", rate: 68 },
  { date: "Wed", rate: 75 },
  { date: "Thu", rate: 72 },
  { date: "Fri", rate: 80 },
  { date: "Sat", rate: 85 },
  { date: "Sun", rate: 82 }
];

const notificationData = [
  { type: "Breaking News", sent: 1200, opened: 960, ctr: 80 },
  { type: "Content Update", sent: 800, opened: 560, ctr: 70 },
  { type: "Daily Digest", sent: 500, opened: 300, ctr: 60 },
  { type: "Personalized", sent: 300, opened: 240, ctr: 80 }
];

interface AppMetricsProps {
  dateRange: DateRange;
}

export function AppMetrics({ dateRange }: AppMetricsProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-6">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">App Open Rate</h3>
          <div className="h-[300px]">
            <BaseChart>
              <LineChart data={openRateData}>
                <ChartGrid />
                <XAxis dataKey="date" xAxisId={CHART_CONFIG.defaultAxisId.x} />
                <YAxis
                  yAxisId={CHART_CONFIG.defaultAxisId.y}
                  tickFormatter={(value) => `${value}%`}
                />
                <ChartTooltip />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke={CHART_COLORS.primary}
                  xAxisId={CHART_CONFIG.defaultAxisId.x}
                  yAxisId={CHART_CONFIG.defaultAxisId.y}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </BaseChart>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div>
              <div className="text-sm font-medium text-gray-500">Daily Active</div>
              <div className="text-2xl font-semibold">24.5k</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Weekly Active</div>
              <div className="text-2xl font-semibold">89.2k</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Monthly Active</div>
              <div className="text-2xl font-semibold">245k</div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Push Notification Performance</h3>
          <div className="h-[300px]">
            <BaseChart>
              <BarChart data={notificationData}>
                <ChartGrid />
                <XAxis dataKey="type" xAxisId={CHART_CONFIG.defaultAxisId.x} />
                <YAxis yAxisId={CHART_CONFIG.defaultAxisId.y} />
                <ChartTooltip />
                <Bar 
                  dataKey="sent" 
                  fill={CHART_COLORS.primary}
                  radius={[4, 4, 0, 0]}
                  xAxisId={CHART_CONFIG.defaultAxisId.x}
                  yAxisId={CHART_CONFIG.defaultAxisId.y}
                />
                <Bar 
                  dataKey="opened" 
                  fill={CHART_COLORS.secondary}
                  radius={[4, 4, 0, 0]}
                  xAxisId={CHART_CONFIG.defaultAxisId.x}
                  yAxisId={CHART_CONFIG.defaultAxisId.y}
                />
              </BarChart>
            </BaseChart>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div>
              <div className="text-sm font-medium text-gray-500">Avg Open Rate</div>
              <div className="text-2xl font-semibold">72.5%</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Avg CTR</div>
              <div className="text-2xl font-semibold">24.8%</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Opt-out Rate</div>
              <div className="text-2xl font-semibold">0.8%</div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="col-span-2 p-6">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">App Usage Insights</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-500">Most Active Hours</h4>
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

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-500">Popular Features</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Breaking News</span>
                  <span>45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Live Updates</span>
                  <span>35%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Saved Articles</span>
                  <span>20%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-500">Session Stats</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Avg Duration</span>
                  <span>4.5m</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Articles/Session</span>
                  <span>3.2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Bounce Rate</span>
                  <span>15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}