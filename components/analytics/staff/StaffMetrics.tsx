"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { DateRange } from "../types";

const data = Array.from({ length: 7 }, (_, i) => ({
  day: `Day ${i + 1}`,
  content: Math.floor(Math.random() * 10) + 5,
  revenue: Math.floor(Math.random() * 1000) + 500
}));

interface StaffMetricsProps {
  dateRange: DateRange;
}

export function StaffMetrics({ dateRange }: StaffMetricsProps) {
  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-4">Content Production</h3>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="content" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="text-sm font-medium mb-4">Revenue Generation</h3>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}