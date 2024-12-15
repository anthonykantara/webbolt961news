"use client";

import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCalendarEvents } from "@/lib/hooks/useCalendarEvents";
import { format } from "date-fns";

export function CalendarWidget() {
  const { events, selectedDate, setSelectedDate } = useCalendarEvents();

  const filteredEvents = events.filter(event => 
    format(event.start, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  );

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Calendar</h2>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={(date) => date && setSelectedDate(date)}
        className="rounded-md border mb-4"
      />
      <ScrollArea className="h-[200px]">
        <div className="space-y-2">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="p-2 rounded-lg bg-gray-50 border text-sm"
            >
              <p className="font-medium">{event.title}</p>
              <p className="text-xs text-gray-500">
                {format(event.start, 'HH:mm')}
                {event.end && ` - ${format(event.end, 'HH:mm')}`}
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}