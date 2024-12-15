"use client";

import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { BaseChart } from './BaseChart';
import { chartConfig } from './config';

const data = [
  { name: '18-24', value: 25 },
  { name: '25-34', value: 35 },
  { name: '35-44', value: 20 },
  { name: '45-54', value: 15 },
  { name: '55+', value: 5 }
];

const COLORS = [
  chartConfig.colors.primary,
  chartConfig.colors.secondary,
  chartConfig.colors.tertiary,
  chartConfig.colors.quaternary,
  chartConfig.colors.quinary
];

export function DemographicsChart() {
  return (
    <BaseChart>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]} 
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </BaseChart>
  );
}