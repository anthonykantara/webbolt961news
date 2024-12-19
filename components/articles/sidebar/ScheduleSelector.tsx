"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateTimeSelector } from "./schedule/DateTimeSelector";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface ScheduleSelectorProps {
  isScheduled: boolean;
  onToggle: () => void;
  onScheduleChange?: (date: Date | null) => void;
  scheduledDate?: Date | null;
}

export function ScheduleSelector({ 
  isScheduled, 
  onToggle,
  onScheduleChange,
  scheduledDate 
}: ScheduleSelectorProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium">Schedule</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          className={cn(!isScheduled && "bg-gray-100")}
          onClick={() => onToggle()}
        >
          Now
        </Button>
        <Button
          variant="outline"
          className={cn(isScheduled && "bg-gray-100")}
          onClick={() => onToggle()}
        >
          Schedule
        </Button>
      </div>
      
      {isScheduled && (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full mt-4 justify-start text-left font-normal",
                !scheduledDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {scheduledDate ? (
                format(scheduledDate, "PPP 'at' p")
              ) : (
                "Pick date and time"
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-4" align="start">
            <DateTimeSelector
              selectedDate={scheduledDate}
              onSelect={onScheduleChange}
            />
          </PopoverContent>
        </Popover>
      )}
    </Card>
  );
}