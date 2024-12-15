"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { BaseChart } from './BaseChart';
import { chartConfig } from './config';

const data = [
  { platform: 'X', followers: 4000, engagement: 2400 },
  { platform: 'Facebook', followers: 3000, engagement: 1398 },
  { platform: 'Telegram', followers: 2000, engagement: 9800 },
  { platform: 'WhatsApp', followers: 2780, engagement: 3908 }
];

export function SocialChart() {
  return (
    <BaseChart>
      <BarChart data={data}>
        <CartesianGrid {...chartConfig.gridStyle} />
        <XAxis dataKey="platform" {...chartConfig.axisStyle} />
        <YAxis {...chartConfig.axisStyle} />
        <Tooltip />
        <Bar 
          dataKey="followers" 
          fill={chartConfig.colors.primary}
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="engagement" 
          fill={chartConfig.colors.secondary}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </BaseChart>
  );
}