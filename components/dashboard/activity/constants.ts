import type { Activity } from "./types";

export const ACTIVITIES: Activity[] = [
  {
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
    type: "notification",
    title: "Breaking news alert sent",
    description: "Alert sent to all platforms",
    timestamp: new Date(Date.now() - 1000 * 60 * 30)
  }
];