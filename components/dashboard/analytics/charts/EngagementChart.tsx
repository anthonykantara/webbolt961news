"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartConfig } from './config';

const data = [
  { date: '2024-01', views: 4000, shares: 2400 },
  { date: '2024-02', views: 3000, shares: 1398 },
  { date: '2024-03', views: 5000, shares: 3800 },
  { date: '2024-04', views: 2780, shares: 3908 },
  { date: '2024-05', views: 1890, shares: 4800 },
  { date: '2024-06', views: 2390, shares: 3800 }
];

export function EngagementChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
          <CartesianGrid {...chartConfig.grid} />
          <XAxis 
            dataKey="date"
            fontSize={chartConfig.axis.style.fontSize}
            tickMargin={chartConfig.axis.style.tickMargin}
            {...chartConfig.axis.props}
          />
          <YAxis
            fontSize={chartConfig.axis.style.fontSize}
            tickMargin={chartConfig.axis.style.tickMargin}
            {...chartConfig.axis.props}
          />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="views" 
            stroke={chartConfig.colors.primary}
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="shares" 
            stroke={chartConfig.colors.secondary}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}