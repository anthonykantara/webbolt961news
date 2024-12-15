"use client";

import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import type { DateRange } from "../types";

const data = [
  { name: "Advertising", value: 45000 },
  { name: "Subscriptions", value: 35000 },
  { name: "Donations", value: 15000 },
  { name: "Other", value: 5000 }
];

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))"
];

interface RevenueBreakdownProps {
  dateRange: DateRange;
}

export function RevenueBreakdown({ dateRange }: RevenueBreakdownProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-4">Revenue Breakdown</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}