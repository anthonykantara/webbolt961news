"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 30 }, (_, i) => ({
  time: `${i}m ago`,
  users: Math.floor(Math.random() * 100) + 50
})).reverse();

export function RealTimeUsers() {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-4">Real-Time Active Users</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="users" 
              stroke="hsl(var(--chart-1))" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}