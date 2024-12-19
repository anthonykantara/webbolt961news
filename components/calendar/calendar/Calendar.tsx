"use client";

import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CalendarDay } from "./CalendarDay";
import { cn } from "@/lib/utils";
import type { CalendarEvent, CalendarPost } from "@/lib/types/calendar";

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  events: CalendarEvent[];
  posts: CalendarPost[];
  onEventClick: (event: CalendarEvent) => void;
  onPostClick: (post: CalendarPost) => void;
  onPostMove: (postId: string, date: Date) => void;
}

export function Calendar({
  selectedDate,
  onDateSelect,
  events,
  posts,
  onEventClick,
  onPostClick,
  onPostMove
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [draggedPostId, setDraggedPostId] = useState<string | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handleDragStart = (postId: string) => {
    setDraggedPostId(postId);
  };

  const handleDrop = (date: Date) => {
    if (draggedPostId) {
      onPostMove(draggedPostId, date);
      setDraggedPostId(null);
    }
  };

  return (
    <div className="space-y-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
        {/* Weekday Headers */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="bg-gray-50 p-2 text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {days.map((day) => {
          const dayEvents = events.filter(event => isSameDay(event.date, day));
          const dayPosts = posts.filter(post => isSameDay(post.scheduledDate, day));
          
          return (
            <CalendarDay
              key={day.toISOString()}
              date={day}
              events={dayEvents}
              posts={dayPosts}
              isCurrentMonth={isSameMonth(day, currentMonth)}
              isSelected={isSameDay(day, selectedDate)}
              onSelect={() => onDateSelect(day)}
              onEventClick={onEventClick}
              onPostClick={onPostClick}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
              isDragTarget={!!draggedPostId}
            />
          );
        })}
      </div>
    </div>
  );
}