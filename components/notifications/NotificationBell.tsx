"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NotificationList } from "./NotificationList";
import { NotificationHeader } from "./NotificationHeader";
import { useNotifications } from "@/lib/hooks/useNotifications";
import { cn } from "@/lib/utils";

export function NotificationBell() {
  const { notifications, unreadCount, markAllAsRead, clearAll } = useNotifications();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className={cn(
                "absolute -top-1 -right-1 h-5 w-5 rounded-full p-0",
                "flex items-center justify-center",
                "bg-[#FF0000] border-white border-2"
              )}
            >
              <span className="text-[10px] font-bold text-white">
                {unreadCount > 99 ? "99+" : unreadCount}
              </span>
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-[380px] p-0" 
        align="end"
        sideOffset={5}
      >
        <NotificationHeader 
          unreadCount={unreadCount}
          onMarkAllRead={markAllAsRead}
          onClearAll={clearAll}
        />
        <NotificationList notifications={notifications} />
      </PopoverContent>
    </Popover>
  );
}