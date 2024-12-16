"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { cn } from "@/lib/utils";
import { BaseChart } from "../charts/BaseChart";
import { XAxis, YAxis } from "../charts/ChartAxis";
import { ChartGrid } from "../charts/ChartGrid";
import { ChartTooltip } from "../charts/ChartTooltip";
import { CHART_COLORS, CHART_CONFIG } from "../charts/config";
import type { DateRange } from "@/lib/types/dashboard";

const sharesByPlatform = [
  { platform: "WhatsApp", shares: 45000 },
  { platform: "Facebook", shares: 35000 },
  { platform: "X", shares: 25000 },
  { platform: "Telegram", shares: 15000 },
  { platform: "LinkedIn", shares: 10000 }
];

const sharesTrend = [
  { date: "Mon", shares: 8500, referrals: 4200 },
  { date: "Tue", shares: 9200, referrals: 4800 },
  { date: "Wed", shares: 11000, referrals: 5500 },
  { date: "Thu", shares: 10500, referrals: 5200 },
  { date: "Fri", shares: 12000, referrals: 6000 },
  { date: "Sat", shares: 13500, referrals: 6800 },
  { date: "Sun", shares: 12800, referrals: 6400 }
];

const contentTypes = [
  { name: "Breaking News", value: 45 },
  { name: "Analysis", value: 25 },
  { name: "Features", value: 20 },
  { name: "Opinion", value: 10 }
];

const COLORS = Object.values(CHART_COLORS);

interface ShareMetricsProps {
  dateRange: DateRange;
}

export function ShareMetrics({ dateRange }: ShareMetricsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Total Shares</h3>
            <div className="text-3xl font-bold">130.5k</div>
            <div className="flex items-center text-sm text-green-600">
              <span className="text-xs">↑</span>
              15.2% from last period
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Share to View Ratio</h3>
            <div className="text-3xl font-bold">8.4%</div>
            <div className="flex items-center text-sm text-green-600">
              <span className="text-xs">↑</span>
              2.1% from last period
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Referral Traffic</h3>
            <div className="text-3xl font-bold">32.9k</div>
            <div className="flex items-center text-sm text-green-600">
              <span className="text-xs">↑</span>
              12.5% from last period
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Shares by Platform</h3>
            <div className="h-[300px]">
              <BaseChart>
                <BarChart data={sharesByPlatform}>
                  <ChartGrid />
                  <XAxis dataKey="platform" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar 
                    dataKey="shares" 
                    fill={CHART_COLORS.primary}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </BaseChart>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Content Type Distribution</h3>
            <div className="h-[300px]">
              <BaseChart>
                <PieChart>
                  <Pie
                    data={contentTypes}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {contentTypes.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </PieChart>
              </BaseChart>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {contentTypes.map((type, index) => (
                <div key={type.name} className="flex items-center gap-2">
                  <div 
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-sm">{type.name}</span>
                  <span className="text-sm text-gray-500 ml-auto">{type.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Shares & Referral Traffic</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
                <span>Shares</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]" />
                <span>Referral Visits</span>
              </div>
            </div>
          </div>
          <div className="h-[300px]">
            <BaseChart>
              <LineChart data={sharesTrend}>
                <ChartGrid />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip />
                <Line
                  type="monotone"
                  dataKey="shares"
                  xAxisId={CHART_CONFIG.defaultAxisId.x}
                  stroke={CHART_COLORS.primary}
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="referrals"
                  xAxisId={CHART_CONFIG.defaultAxisId.x}
                  stroke={CHART_COLORS.secondary}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </BaseChart>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Most Shared Content</h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="text-sm font-medium">Breaking: Major development in downtown</div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2.5k shares</span>
                  <span>1.2k visits</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium">Analysis: Economic Impact Report</div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1.8k shares</span>
                  <span>950 visits</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium">Weather Alert: Storm Warning</div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1.5k shares</span>
                  <span>820 visits</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Peak Sharing Times</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>8:00 - 10:00</span>
                <span className="text-gray-500">32% of shares</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>12:00 - 14:00</span>
                <span className="text-gray-500">28% of shares</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>18:00 - 20:00</span>
                <span className="text-gray-500">25% of shares</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Other times</span>
                <span className="text-gray-500">15% of shares</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Share Performance</h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="text-sm font-medium">Conversion Rate</div>
                <div className="text-2xl font-semibold">25.4%</div>
                <div className="text-sm text-gray-500">Of shares lead to visits</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium">Engagement Rate</div>
                <div className="text-2xl font-semibold">12.8%</div>
                <div className="text-sm text-gray-500">Of shared visits engage</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}