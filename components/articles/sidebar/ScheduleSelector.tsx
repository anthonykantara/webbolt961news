"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScheduleSelectorProps {
  isScheduled: boolean;
  onToggle: () => void;
}

export function ScheduleSelector({ isScheduled, onToggle }: ScheduleSelectorProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium">Schedule</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          className={cn(!isScheduled && "bg-gray-100")}
          onClick={() => !isScheduled && onToggle()}
        >
          Now
        </Button>
        <Button
          variant="outline"
          disabled
          className={cn(isScheduled && "bg-gray-100")}
          onClick={() => !isScheduled && onToggle()}
        >
          Schedule
        </Button>
      </div>
    </Card>
  );
}