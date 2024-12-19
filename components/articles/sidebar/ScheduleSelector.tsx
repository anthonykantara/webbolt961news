"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(scheduledDate || undefined);
  const [selectedTime, setSelectedTime] = useState(
    scheduledDate ? 
      `${String(scheduledDate.getHours()).padStart(2, '0')}:${String(scheduledDate.getMinutes()).padStart(2, '0')}` : 
      ""
  );

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date && selectedTime && onScheduleChange) {
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const newDate = new Date(date);
      newDate.setHours(hours, minutes);
      onScheduleChange(newDate);
    }
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
    if (selectedDate && time && onScheduleChange) {
      const [hours, minutes] = time.split(':').map(Number);
      const newDate = new Date(selectedDate);
      newDate.setHours(hours, minutes);
      onScheduleChange(newDate);
    }
  };
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
        <div className="mt-4 space-y-4">
          <div className="grid gap-2">
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  {selectedDate ? (
                    selectedDate.toLocaleDateString()
                  ) : (
                    "Select date"
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="grid gap-2">
            <Label>Time</Label>
            <Input
              type="time"
              value={selectedTime}
              onChange={(e) => handleTimeChange(e.target.value)}
            />
          </div>
        </div>
      )}
    </Card>
  );
}