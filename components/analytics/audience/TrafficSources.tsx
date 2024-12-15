"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { DateRange } from "../types";

const data = [
  { source: "Direct", value: 30 },
  { source: "Social", value: 25 },
  { source: "Search", value: 20 },
  { source: "Referral", value: 15 },
  { source: "Email", value: 10 }
];

interface TrafficSourcesProps {
  dateRange: DateRange;
}

export function TrafficSources({ dateRange }: TrafficSourcesProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-4">Traffic Sources</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="source" type="category" />
            <Tooltip />
            <Bar dataKey="value" fill="hsl(var(--chart-2))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}