"use client";

import { Card } from "@/components/ui/card";
import type { TimeTrackingData } from "@/lib/types/article";

interface TimeTrackingProps {
  data: TimeTrackingData;
}

function formatTime(seconds: number): string {
  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);

  const parts = [];
  if (days > 0) parts.push(`${days} days`);
  if (hours > 0) parts.push(`${hours} hours`);
  if (minutes > 0 || parts.length === 0) parts.push(`${minutes} minutes`);

  return parts.join(", ");
}

export function TimeTracking({ data }: TimeTrackingProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-3">Time</h3>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Writing</span>
          <span>{formatTime(data.writing)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Editing</span>
          <span>{formatTime(data.editing)}</span>
        </div>
        <div className="flex justify-between text-sm pt-2 border-t">
          <span className="text-gray-500">Total</span>
          <span className="font-medium">{formatTime(data.total)}</span>
        </div>
      </div>
    </Card>
  );
}