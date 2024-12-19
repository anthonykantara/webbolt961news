"use client";

import { Button } from "@/components/ui/button";
import { Check, Trash2 } from "lucide-react";

interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllRead: () => void;
  onClearAll: () => void;
}

export function NotificationHeader({
  unreadCount,
  onMarkAllRead,
  onClearAll
}: NotificationHeaderProps) {
  return (
    <div className="p-4 border-b flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Notifications</h3>
        {unreadCount > 0 && (
          <p className="text-sm text-gray-500">{unreadCount} unread</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMarkAllRead}
          disabled={unreadCount === 0}
          className="text-blue-600 hover:text-blue-700"
        >
          <Check className="h-4 w-4 mr-1" />
          Mark all read
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearAll}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Clear all
        </Button>
      </div>
    </div>
  );
}