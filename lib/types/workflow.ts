export type TaskStatus = "pitches" | "to_be_assigned" | "assigned" | "in_progress" | "review" | "published";

export interface Task {
  id: string;
  title: string;
  description: string;
  targetDate: Date;
  assignedTo?: {
    id: string;
    name: string;
    avatar: string;
  };
  status: TaskStatus;
  contentId?: string;
  createdBy: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: Date;
}

export interface Column {
  id: TaskStatus;
  title: string;
  tasks: Task[];
}