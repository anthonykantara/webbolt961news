"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { Check, AlertCircle, Award, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNotifications } from "@/lib/hooks/useNotifications";
import type { Notification } from "@/lib/types/notification";

interface NotificationItemProps {
  notification: Notification;
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const router = useRouter();
  const { markAsRead } = useNotifications();

  const getIcon = () => {
    switch (notification.type) {
      case "task_management":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "content_review":
        return <Check className="h-5 w-5 text-green-500" />;
      case "achievement":
        return <Award className="h-5 w-5 text-amber-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const handleClick = () => {
    if (!notification.isRead) {
      markAsRead(notification.id);
    }

    if (notification.actions?.[0]?.href) {
      router.push(notification.actions[0].href);
    }
  };

  return (
    <div
      className={cn(
        "p-4 hover:bg-gray-50 cursor-pointer transition-colors",
        !notification.isRead && "bg-blue-50/50"
      )}
      onClick={handleClick}
    >
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-1">{getIcon()}</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{notification.title}</p>
          <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
          
          {notification.actions && notification.actions.length > 0 && (
            <div className="flex gap-2 mt-2">
              {notification.actions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (action.onClick) action.onClick();
                    if (action.href) router.push(action.href);
                  }}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
          
          <p className="text-xs text-gray-400 mt-2">
            {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
          </p>
        </div>
      </div>
    </div>
  );
}