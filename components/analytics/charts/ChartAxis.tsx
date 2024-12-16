"use client";

import { XAxis as RechartsXAxis, YAxis as RechartsYAxis } from 'recharts';
import { CHART_CONFIG } from './config';

interface ChartAxisProps {
  dataKey?: string;
  tickFormatter?: (value: any) => string;
  orientation?: "left" | "right";
  type?: "number" | "category";
  yAxisId?: string;
  xAxisId?: string;
  width?: number;
}

export function XAxis({ 
  dataKey, 
  tickFormatter, 
  xAxisId = CHART_CONFIG.defaultAxisId.x
}: ChartAxisProps) {
  return (
    <RechartsXAxis
      {...CHART_CONFIG.axis}
      dataKey={dataKey}
      tickFormatter={tickFormatter}
      xAxisId={xAxisId}
    />
  );
}

export function YAxis({ 
  tickFormatter, 
  orientation, 
  type, 
  yAxisId = CHART_CONFIG.defaultAxisId.y,
  width 
}: ChartAxisProps) {
  return (
    <RechartsYAxis
      {...CHART_CONFIG.axis}
      orientation={orientation}
      type={type}
      tickFormatter={tickFormatter}
      yAxisId={yAxisId}
      width={width}
    />
  );
}