"use client";

import { useState } from "react";
import type { CalendarEvent, CalendarPost } from "@/lib/types/calendar";

const MOCK_EVENTS: CalendarEvent[] = [
  {
    id: "1",
    title: "Editorial Meeting",
    description: "Weekly content planning and assignments",
    date: new Date(),
    type: "event",
    recurrence: {
      frequency: "weekly",
      interval: 1
    }
  },
  {
    id: "2",
    title: "Independence Day",
    description: "National holiday coverage",
    date: new Date(2024, 10, 22),
    type: "holiday"
  },
  {
    id: "3",
    title: "Q2 Content Review",
    description: "Quarterly content performance analysis",
    date: new Date(2024, 5, 15),
    type: "event",
  },
  {
    id: "4",
    title: "Ramadan Coverage Planning",
    description: "Plan special Ramadan content series",
    date: new Date(2024, 2, 10),
    type: "reminder"
  }
];

const MOCK_POSTS: CalendarPost[] = [
  {
    id: "1",
    title: "Breaking: Major Development in Downtown",
    type: "article",
    status: "scheduled",
    scheduledDate: new Date(),
    author: {
      id: "1",
      name: "Sarah Editor"
    }
  },
  {
    id: "2",
    title: "Economic Impact Analysis: Q1 2024",
    type: "article",
    status: "scheduled",
    scheduledDate: new Date(2024, 3, 5),
    author: {
      id: "2",
      name: "Mike Writer"
    }
  },
  {
    id: "3",
    title: "Interview: Tech Innovation in Beirut",
    type: "video",
    status: "scheduled",
    scheduledDate: new Date(2024, 3, 10),
    author: {
      id: "3",
      name: "Alex Reporter"
    }
  },
  {
    id: "4",
    title: "Special Report: Infrastructure Projects",
    type: "article",
    status: "scheduled",
    scheduledDate: new Date(2024, 3, 15),
    author: {
      id: "1",
      name: "Sarah Editor"
    }
  }
];

export function useCalendarEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>(MOCK_EVENTS);
  const [posts, setPosts] = useState<CalendarPost[]>(MOCK_POSTS);

  const addEvent = (event: CalendarEvent) => {
    setEvents(prev => [...prev, { ...event, id: crypto.randomUUID() }]);
  };

  const updateEvent = (event: CalendarEvent) => {
    setEvents(prev => prev.map(e => e.id === event.id ? event : e));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const addPost = (post: CalendarPost) => {
    setPosts(prev => [...prev, { ...post, id: crypto.randomUUID() }]);
  };

  const updatePost = (post: CalendarPost) => {
    setPosts(prev => prev.map(p => p.id === post.id ? post : p));
  };

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  const movePost = (postId: string, date: Date) => {
    setPosts(prev => prev.map(post =>
      post.id === postId
        ? { ...post, scheduledDate: date }
        : post
    ));
  };

  return {
    events,
    posts,
    addEvent,
    updateEvent,
    deleteEvent,
    addPost,
    updatePost,
    deletePost,
    movePost
  };
}