"use client";

import { Card } from "@/components/ui/card";
import type { DateRange } from "../types";

interface GeographicMapProps {
  dateRange: DateRange;
}

export function GeographicMap({ dateRange }: GeographicMapProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-4">Geographic Distribution</h3>
      <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500">Map visualization would go here</p>
      </div>
    </Card>
  );
}