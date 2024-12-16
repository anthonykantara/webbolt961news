"use client";

import { CartesianGrid } from 'recharts';
import { CHART_CONFIG } from './config';

export function ChartGrid() {
  return (
    <CartesianGrid 
      {...CHART_CONFIG.grid}
    />
  );
}