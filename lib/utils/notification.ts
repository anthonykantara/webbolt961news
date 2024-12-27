import type { NotificationType, NotificationPriority } from "@/lib/types/notification";

export function getNotificationConfig(type: NotificationType) {
  switch (type) {
    case "task_management":
      return {
        icon: "FileText",
        color: "text-blue-500",
        bgColor: "bg-blue-50"
      };
    case "content_review":
      return {
        icon: "Check",
        color: "text-green-500",
        bgColor: "bg-green-50"
      };
    case "achievement":
      return {
        icon: "Award",
        color: "text-amber-500",
        bgColor: "bg-amber-50"
      };
    default:
      return {
        icon: "Bell",
        color: "text-gray-500",
        bgColor: "bg-gray-50"
      };
  }
}

export function getPriorityStyles(priority: NotificationPriority) {
  switch (priority) {
    case "urgent":
      return "border-red-500 bg-red-50";
    case "normal":
      return "border-blue-500 bg-blue-50";
    case "low":
      return "border-gray-500 bg-gray-50";
  }
}