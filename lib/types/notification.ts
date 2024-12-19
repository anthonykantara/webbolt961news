export type NotificationType = 
  | "task_management" 
  | "content_review" 
  | "achievement";

export type NotificationPriority = "urgent" | "normal" | "low";

export interface NotificationAction {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  priority: NotificationPriority;
  recipientId: string;
  actions?: NotificationAction[];
  metadata?: {
    taskId?: string;
    postId?: string;
    achievementId?: string;
    userId?: string;
  };
}