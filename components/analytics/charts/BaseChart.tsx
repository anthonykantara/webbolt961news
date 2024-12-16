"use client";

import { ReactNode } from 'react';
import { ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface BaseChartProps {
  height?: number;
  children: ReactNode;
  className?: string;
  background?: boolean;
}

export function BaseChart({ height = 300, children, className, background = false }: BaseChartProps) {
  return (
    <div 
      className={cn(
        "w-full rounded-lg",
        background && "bg-gray-50/50 p-4",
        className
      )} 
      style={{ height }}
    >
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </div>
  );
}