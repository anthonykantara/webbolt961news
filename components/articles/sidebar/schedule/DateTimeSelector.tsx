"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDateOnly, formatTimeOnly } from "@/lib/utils/date-time";
import { isPastDay } from "@/lib/utils/date-time";

interface DateTimeSelectorProps {
  selectedDate: Date | null;
  onSelect: (date: Date | null) => void;
}

export function DateTimeSelector({ selectedDate, onSelect }: DateTimeSelectorProps) {
  const [showTime, setShowTime] = useState(false);
  const [time, setTime] = useState(
    selectedDate ? formatTimeOnly(selectedDate) : "12:00"
  );
  const [date, setDate] = useState<Date | null>(selectedDate);
  const [error, setError] = useState<string | null>(null);

  // Get min date (start of today)
  const minDate = new Date();
  minDate.setHours(0, 0, 0, 0);

  const handleDateSelect = (date: Date | null) => {
    setError(null);
    if (!date) {
      onSelect(null);
      return;
    }
    
    // Ensure selected date is not in the past
    if (date < minDate) {
      setError("Cannot select a date in the past");
      return;
    }

    setDate(date);
    setShowTime(true);
  };

  const handleTimeChange = (newTime: string) => {
    setError(null);
    setTime(newTime);
    if (date) {
      const [hours, minutes] = newTime.split(":").map(Number);
      const newDate = new Date(date);
      newDate.setHours(hours, minutes);
      
      // Validate the full date+time is not in the past
      if (newDate < new Date()) {
        setError("Cannot schedule for a time in the past");
        return;
      }
      
      onSelect(newDate);
    }
  };

  const handleBack = () => {
    setShowTime(false);
    setError(null);
  };

  return (
    <div className="w-[300px] space-y-4">
      {error && (
        <div className="flex items-center gap-2 p-2 text-sm text-red-600 bg-red-50 rounded-md">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
      
      {showTime ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">
              {date && formatDateOnly(date)}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <Label className="font-medium">Select Time</Label>
            </div>
            <Input
              type="time"
              value={time}
              onChange={(e) => handleTimeChange(e.target.value)}
              className="w-full"
              min={date?.toDateString() === new Date().toDateString() ? formatTimeOnly(new Date()) : undefined}
            />
          </div>
        </div>
      ) : (
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          fromDate={minDate}
          disabled={(date) => date < minDate}
          classNames={{
            months: "space-y-4",
            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            cell: cn(
              "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
            ),
            day: cn(
              "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
              "hover:bg-accent hover:text-accent-foreground",
              "focus:bg-accent focus:text-accent-foreground focus:outline-none"
            ),
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_disabled: "text-muted-foreground opacity-50",
            nav_button: cn(
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            caption: "relative h-7 text-sm font-medium"
          }}
          initialFocus
        />
      )}
    </div>
  );
}