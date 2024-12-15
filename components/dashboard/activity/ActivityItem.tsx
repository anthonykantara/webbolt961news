"use client";

import { FileText, Bell, Info } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { Activity } from "./types";

interface ActivityItemProps {
  activity: Activity;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50">
      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
        {activity.type === "article" && <FileText className="h-4 w-4 text-blue-500" />}
        {activity.type === "notification" && <Bell className="h-4 w-4 text-red-500" />}
        {activity.type === "other" && <Info className="h-4 w-4 text-gray-500" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900">{activity.title}</p>
        <p className="text-xs text-gray-500 mt-1">{activity.description}</p>
        <p className="text-xs text-gray-400 mt-1" suppressHydrationWarning>
          {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
        </p>
      </div>
    </div>
  );
}