export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  date: Date;
  type: "holiday" | "event" | "reminder";
  recurrence?: {
    frequency: "daily" | "weekly" | "monthly" | "yearly";
    interval?: number;
    endDate?: Date;
  };
}

export interface CalendarPost {
  id: string;
  title: string;
  type: "article" | "video";
  status: "draft" | "scheduled" | "published";
  scheduledDate: Date;
  author: {
    id: string;
    name: string;
  };
}