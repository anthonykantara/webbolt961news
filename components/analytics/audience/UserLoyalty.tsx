"use client";

import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import type { DateRange } from "../types";

const data = [
  { name: "New Users", value: 40 },
  { name: "Returning Users", value: 60 }
];

const COLORS = ["hsl(var(--chart-4))", "hsl(var(--chart-5))"];

interface UserLoyaltyProps {
  dateRange: DateRange;
}

export function UserLoyalty({ dateRange }: UserLoyaltyProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-4">User Loyalty</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
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