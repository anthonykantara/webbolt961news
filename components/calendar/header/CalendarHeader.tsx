"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface CalendarHeaderProps {
  onAddEvent: () => void;
  onAddPost: () => void;
}

export function CalendarHeader({ onAddEvent, onAddPost }: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Calendar</h1>
      <div>
        <Button
          variant="outline"
          onClick={onAddEvent}
          className="bg-[#FF0000] hover:bg-[#E60000] text-white border-none"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>
    </div>
  );
}