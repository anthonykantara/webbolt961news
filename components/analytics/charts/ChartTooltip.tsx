"use client";

import { Tooltip } from 'recharts';

export function ChartTooltip() {
  return (
    <Tooltip 
      contentStyle={{
        backgroundColor: 'white',
        border: '1px solid #F3F4F6',
        borderRadius: '6px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
      labelStyle={{
        color: '#374151',
        fontWeight: 500,
        marginBottom: '4px'
      }}
    />
  );
}