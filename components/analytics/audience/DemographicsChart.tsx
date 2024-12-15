"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { DateRange } from "../types";

const data = [
  { age: "18-24", value: 25 },
  { age: "25-34", value: 35 },
  { age: "35-44", value: 20 },
  { age: "45-54", value: 15 },
  { age: "55+", value: 5 }
];

interface DemographicsChartProps {
  dateRange: DateRange;
}

export function DemographicsChart({ dateRange }: DemographicsChartProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-4">Age Demographics</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="age" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="hsl(var(--chart-1))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}