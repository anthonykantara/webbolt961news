"use client";

import { useState, useEffect } from "react";
import type { Activity } from "@/lib/types/dashboard";

const MOCK_ACTIVITIES: Activity[] = [
  {
    id: "1",
    type: "article",
    title: "New article published",
    description: "Breaking: Major development in downtown Beirut",
    timestamp: new Date(),
    user: {
      name: "Sarah Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    }
  },
  {
    id: "2",
    type: "notification",
    title: "Breaking news alert sent",
    description: "Alert sent to all platforms",
    timestamp: new Date(Date.now() - 1000 * 60 * 30)
  },
  {
    id: "3",
    type: "schedule",
    title: "Content scheduled",
    description: "Weather report scheduled for tomorrow",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    user: {
      name: "Mike Staff",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
    }
  }
];

export function useActivity() {
  const [activities, setActivities] = useState<Activity[]>(MOCK_ACTIVITIES);

  useEffect(() => {
    // In a real app, fetch activities data here
  }, []);

  return { activities };
}