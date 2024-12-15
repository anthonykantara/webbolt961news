"use client";

import { useState } from "react";
import type { CalendarEvent } from "@/lib/types/dashboard";

const MOCK_EVENTS: CalendarEvent[] = [
  {
    id: "1",
    title: "Team Meeting",
    type: "meeting",
    start: new Date(2024, 3, 15, 10, 0),
    end: new Date(2024, 3, 15, 11, 0),
    description: "Weekly editorial meeting"
  },
  {
    id: "2",
    title: "Interview: Minister",
    type: "interview",
    start: new Date(2024, 3, 15, 14, 0),
    end: new Date(2024, 3, 15, 15, 0),
    description: "Exclusive interview with Minister of Economy"
  },
  {
    id: "3",
    title: "Article Deadline",
    type: "deadline",
    start: new Date(2024, 3, 15, 17, 0),
    description: "Submit final draft for review"
  }
];

export function useCalendarEvents() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events] = useState<CalendarEvent[]>(MOCK_EVENTS);

  return {
    events,
    selectedDate,
    setSelectedDate
  };
}