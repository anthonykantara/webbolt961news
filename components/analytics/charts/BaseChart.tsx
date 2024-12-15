"use client";

import { ReactNode } from "react";
import { ResponsiveContainer } from "recharts";

interface BaseChartProps {
  height?: number;
  children: ReactNode;
}

export function BaseChart({ height = 200, children }: BaseChartProps) {
  return (
    <div style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}