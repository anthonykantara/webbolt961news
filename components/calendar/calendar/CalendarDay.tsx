"use client";

import { format, isSameDay } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { CalendarEvent, CalendarPost } from "@/lib/types/calendar";

interface CalendarDayProps {
  date: Date;
  events: CalendarEvent[];
  posts: CalendarPost[];
  isCurrentMonth: boolean;
  isSelected: boolean;
  onSelect: () => void;
  onEventClick: (event: CalendarEvent) => void;
  onPostClick: (post: CalendarPost) => void;
  onDragStart: (postId: string) => void;
  onDrop: (date: Date) => void;
  isDragTarget: boolean;
}

export function CalendarDay({
  date,
  events,
  posts,
  isCurrentMonth,
  isSelected,
  onSelect,
  onEventClick,
  onPostClick,
  onDragStart,
  onDrop,
  isDragTarget
}: CalendarDayProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onDrop(date);
  };

  return (
    <div
      className={cn(
        "min-h-[120px] p-2 bg-white",
        "transition-colors duration-200",
        !isCurrentMonth && "bg-gray-50/50",
        isSelected && "ring-2 ring-[#FF0000] ring-inset",
        isDragTarget && "bg-red-50/50"
      )}
      onClick={onSelect}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={cn(
          "text-sm font-medium",
          !isCurrentMonth && "text-gray-400",
          isSelected && "text-[#FF0000]"
        )}>
          {format(date, "d")}
        </span>
        {isSameDay(date, new Date()) && (
          <Badge variant="outline" className="text-[#FF0000] border-[#FF0000]">
            Today
          </Badge>
        )}
      </div>

      <ScrollArea className="h-[80px]">
        <div className="space-y-1">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={(e) => {
                e.stopPropagation();
                onEventClick(event);
              }}
              className={cn(
                "text-xs px-2 py-1 rounded cursor-pointer",
                "bg-blue-100 text-blue-800 hover:bg-blue-200",
                "truncate"
              )}
            >
              {event.title}
            </div>
          ))}

          {posts.map((post) => (
            <div
              key={post.id}
              draggable
              onClick={(e) => {
                e.stopPropagation();
                onPostClick(post);
              }}
              onDragStart={() => onDragStart(post.id)}
              className={cn(
                "text-xs px-2 py-1 rounded cursor-move",
                "bg-red-100 text-red-800 hover:bg-red-200",
                "truncate"
              )}
            >
              {post.title}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}