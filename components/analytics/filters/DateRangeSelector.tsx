"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";

interface DateRangeSelectorProps {
  value: { from: Date; to: Date };
  onChange: (range: { from: Date; to: Date }) => void;
}

const QUICK_RANGES = [
  { label: "Today", days: 0 },
  { label: "Last 7 days", days: 7 },
  { label: "Last 30 days", days: 30 },
  { label: "Last 90 days", days: 90 }
];

export function DateRangeSelector({ value, onChange }: DateRangeSelectorProps) {
  const handleQuickRange = (days: number) => {
    const to = new Date();
    const from = new Date();
    from.setDate(from.getDate() - days);
    onChange({ from, to });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="min-w-[240px] justify-start">
          <CalendarDays className="mr-2 h-4 w-4" />
          {format(value.from, "MMM d, yyyy")} - {format(value.to, "MMM d, yyyy")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <div className="grid grid-cols-2 gap-2 p-4">
          <div className="space-y-2">
            {QUICK_RANGES.map((range) => (
              <Button
                key={range.label}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleQuickRange(range.days)}
              >
                {range.label}
              </Button>
            ))}
          </div>
          <Calendar
            mode="range"
            selected={{
              from: value.from,
              to: value.to
            }}
            onSelect={(range) => {
              if (range?.from && range?.to) {
                onChange(range);
              }
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}