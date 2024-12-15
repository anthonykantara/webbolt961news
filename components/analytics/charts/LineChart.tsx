"use client";

import { BaseChart } from "./BaseChart";
import { Line, LineChart as RechartsLineChart, XAxis, YAxis, Tooltip } from "recharts";
import { CHART_COLORS } from "../metrics/constants";

interface LineChartProps {
  data: Array<{ [key: string]: any }>;
  dataKey: string;
  xAxisKey?: string;
  height?: number;
}

export function LineChart({ data, dataKey, xAxisKey = "time", height }: LineChartProps) {
  return (
    <BaseChart height={height}>
      <RechartsLineChart data={data}>
        <XAxis 
          dataKey={xAxisKey}
          axisLine={false}
          tickLine={false}
          fontSize={12}
          tickMargin={8}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          fontSize={12}
          tickMargin={8}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={CHART_COLORS.primary}
          strokeWidth={2}
          dot={false}
        />
      </RechartsLineChart>
    </BaseChart>
  );
}