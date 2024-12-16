"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar } from "recharts";
import { cn } from "@/lib/utils";
import { BaseChart } from "../charts/BaseChart";
import { XAxis, YAxis } from "../charts/ChartAxis";
import { ChartGrid } from "../charts/ChartGrid";
import { ChartTooltip } from "../charts/ChartTooltip";
import { CHART_COLORS, CHART_CONFIG } from "../charts/config";
import type { DateRange } from "@/lib/types/dashboard";

const data = [
  { source: "Direct", value: 30000, change: 12 },
  { source: "Social", value: 25000, change: 8 },
  { source: "Search", value: 20000, change: 15 },
  { source: "Referral", value: 15000, change: -5 },
  { source: "Email", value: 10000, change: 20 }
];

const referralData = [
  { name: "Facebook", value: 8000 },
  { name: "Twitter", value: 6000 },
  { name: "LinkedIn", value: 4000 },
  { name: "WhatsApp", value: 3000 },
  { name: "Telegram", value: 2000 }
];

interface TrafficMetricsProps {
  dateRange: DateRange;
}

export function TrafficMetrics({ dateRange }: TrafficMetricsProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card className="col-span-2 p-6">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Traffic Sources</h3>
          <div className="h-[400px]">
            <BaseChart height={400}>
              <BarChart data={data} layout="vertical">
                <ChartGrid />
                <XAxis type="number" />
                <YAxis 
                  dataKey="source" 
                  type="category" 
                  width={100}
                />
                <ChartTooltip />
                <Bar 
                  dataKey="value" 
                  fill={CHART_COLORS.primary}
                  xAxisId={CHART_CONFIG.defaultAxisId.x}
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </BaseChart>
          </div>
        </div>
      </Card>

      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Top Referrers</h3>
          <div className="space-y-4">
            {referralData.map((item, index) => (
              <div key={item.name} className="flex items-center gap-4">
                <div className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-sm text-gray-500">
                      {formatNumber(item.value)}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[hsl(var(--chart-1))] rounded-full"
                      style={{ 
                        width: `${(item.value / referralData[0].value) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Outbound Links</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>example.com</span>
              <span className="text-gray-500">2.5k clicks</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>another-site.com</span>
              <span className="text-gray-500">1.8k clicks</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>news-source.com</span>
              <span className="text-gray-500">1.2k clicks</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US', {
    notation: "compact",
    compactDisplay: "short"
  }).format(value);
}