"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { DateRange } from "../types";

const data = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  users: Math.floor(Math.random() * 1000) + 500
}));

interface EngagementTimesProps {
  dateRange: DateRange;
}

export function EngagementTimes({ dateRange }: EngagementTimesProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-4">Peak Engagement Times</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="users" 
              stroke="hsl(var(--chart-3))" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}