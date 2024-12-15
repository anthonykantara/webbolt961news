"use client";

export interface MetricData {
  label: string;
  value: string | number;
  change: number;
  trend: "up" | "down";
}

export interface RevenueSource {
  name: string;
  value: number;
}

export interface RealTimeData {
  time: string;
  users: number;
}