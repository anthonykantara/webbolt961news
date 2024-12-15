"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { BaseChart } from './BaseChart';
import { chartConfig } from './config';

const data = [
  { time: '00:00', users: 1000 },
  { time: '04:00', users: 500 },
  { time: '08:00', users: 2000 },
  { time: '12:00', users: 3000 },
  { time: '16:00', users: 2500 },
  { time: '20:00', users: 1800 },
  { time: '23:59', users: 1000 }
];

export function TrafficChart() {
  return (
    <BaseChart>
      <AreaChart data={data}>
        <CartesianGrid {...chartConfig.gridStyle} />
        <XAxis dataKey="time" {...chartConfig.axisStyle} />
        <YAxis {...chartConfig.axisStyle} />
        <Tooltip />
        <Area 
          type="monotone" 
          dataKey="users" 
          stroke={chartConfig.colors.primary}
          fill={chartConfig.colors.primary}
          fillOpacity={0.2}
          strokeWidth={2}
          dot={false}
        />
      </AreaChart>
    </BaseChart>
  );
}