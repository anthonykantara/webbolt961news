"use client";

import { ReactNode } from 'react';
import { ResponsiveContainer } from 'recharts';

interface BaseChartProps {
  height?: number;
  children: ReactNode;
}

export function BaseChart({ height = 300, children }: BaseChartProps) {
  return (
    <div style={{ height: `${height}px`, width: '100%' }}>
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </div>
  );
}