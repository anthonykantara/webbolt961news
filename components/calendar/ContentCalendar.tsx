"use client";

import { useState } from "react";
import { Calendar } from "./calendar/Calendar";
import { EventDialog } from "./dialogs/EventDialog";
import { PostDialog } from "./dialogs/PostDialog";
import { CalendarHeader } from "./header/CalendarHeader";
import { useCalendarEvents } from "@/lib/hooks/useCalendarEvents";
import { Card } from "@/components/ui/card";
import type { CalendarEvent, CalendarPost } from "@/lib/types/calendar";

export function ContentCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<CalendarEvent | null>(null);
  const [editingPost, setEditingPost] = useState<CalendarPost | null>(null);
  
  const { 
    events,
    posts,
    addEvent,
    updateEvent,
    deleteEvent,
    addPost,
    updatePost,
    deletePost,
    movePost
  } = useCalendarEvents();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsPostDialogOpen(true);
  };

  const handleEventClick = (event: CalendarEvent) => {
    setEditingEvent(event);
    setIsEventDialogOpen(true);
  };

  const handlePostClick = (post: CalendarPost) => {
    setEditingPost(post);
    setIsPostDialogOpen(true);
  };

  return (
    <div className="p-6">
      <CalendarHeader
        onAddEvent={() => setIsEventDialogOpen(true)}
        onAddPost={() => setIsPostDialogOpen(true)}
      />

      <Card className="mt-6 p-6">
        <Calendar
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
          events={events}
          posts={posts}
          onEventClick={handleEventClick}
          onPostClick={handlePostClick}
          onPostMove={movePost}
        />
      </Card>

      <EventDialog
        event={editingEvent}
        open={isEventDialogOpen}
        onOpenChange={setIsEventDialogOpen}
        onSave={editingEvent ? updateEvent : addEvent}
        onDelete={deleteEvent}
      />

      <PostDialog
        post={editingPost}
        selectedDate={selectedDate}
        open={isPostDialogOpen}
        onOpenChange={setIsPostDialogOpen}
        onSave={editingPost ? updatePost : addPost}
        onDelete={deletePost}
      />
    </div>
  );
}