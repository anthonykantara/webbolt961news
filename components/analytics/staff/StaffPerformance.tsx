"use client";

import { Card } from "@/components/ui/card";
import { StaffTable } from "./StaffTable";
import { StaffMetrics } from "./StaffMetrics";
import type { DateRange } from "../types";

interface StaffPerformanceProps {
  dateRange: DateRange;
}

export function StaffPerformance({ dateRange }: StaffPerformanceProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-6">Staff Performance</h2>
      <div className="grid grid-cols-2 gap-6">
        <StaffTable dateRange={dateRange} />
        <StaffMetrics dateRange={dateRange} />
      </div>
    </Card>
  );
}