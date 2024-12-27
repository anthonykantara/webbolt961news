"use client";

import { useState, useEffect, useCallback } from "react";
import { useCurrentUser } from "./useCurrentUser";
import type { Notification } from "@/lib/types/notification";

// Mock WebSocket for demo purposes
class MockWebSocket {
  private callbacks: { [key: string]: (data: any) => void } = {};
  
  constructor(url: string) {
    // Simulate notifications every 30 seconds
    setInterval(() => {
      this.callbacks.message?.({
        data: JSON.stringify({
          id: crypto.randomUUID(),
          type: "task_management",
          title: "New Task Available",
          message: "A new task has been created and needs assignment.",
          timestamp: new Date(),
          isRead: false,
          priority: "normal",
          recipientId: "all",
          actions: [
            {
              label: "View Task",
              href: "/news/content/workflow"
            }
          ]
        })
      });
    }, 30000);
  }

  addEventListener(event: string, callback: (data: any) => void) {
    this.callbacks[event] = callback;
  }

  removeEventListener(event: string) {
    delete this.callbacks[event];
  }

  close() {
    // Cleanup
  }
}

export function useNotifications() {
  const { user } = useCurrentUser();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Initialize with some mock notifications
  useEffect(() => {
    if (!user) return;

    const initialNotifications: Notification[] = [
      {
        id: "1",
        type: "task_management",
        title: "Task assigned to you",
        message: "You have been assigned to cover the downtown development story",
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        isRead: false,
        priority: "normal",
        recipientId: user.id,
        actions: [
          {
            label: "View Task",
            href: "/news/content/workflow"
          }
        ],
        metadata: {
          taskId: "task-1"
        }
      },
      {
        id: "2",
        type: "content_review",
        title: "Article approved",
        message: "Your article about the new cultural center has been approved",
        timestamp: new Date(Date.now() - 1000 * 60 * 60),
        isRead: true,
        priority: "normal",
        recipientId: user.id,
        actions: [
          {
            label: "View Article",
            href: "/news/content/articles/article-1"
          }
        ],
        metadata: {
          postId: "article-1"
        }
      },
      {
        id: "3",
        type: "achievement",
        title: "Achievement Unlocked! 🎉",
        message: "You've maintained a 7-day writing streak",
        timestamp: new Date(Date.now() - 1000 * 60 * 120),
        isRead: false,
        priority: "low",
        recipientId: user.id,
        metadata: {
          achievementId: "7-day-streak"
        }
      }
    ];

    setNotifications(initialNotifications);
    setUnreadCount(initialNotifications.filter(n => !n.isRead).length);
  }, [user]);

  // WebSocket connection for real-time notifications
  useEffect(() => {
    if (!user) return;

    const ws = new MockWebSocket("wss://api.example.com/notifications");

    ws.addEventListener("message", (event) => {
      const notification: Notification = JSON.parse(event.data);
      
      // Only add notification if it's for this user or all users
      if (notification.recipientId === "all" || notification.recipientId === user.id) {
        setNotifications(prev => [notification, ...prev]);
        setUnreadCount(prev => prev + 1);
      }
    });

    return () => ws.close();
  }, [user]);

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev => prev.map(notification => {
      if (notification.id === id && !notification.isRead) {
        setUnreadCount(count => count - 1);
        return { ...notification, isRead: true };
      }
      return notification;
    }));
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => prev.map(notification => ({
      ...notification,
      isRead: true
    })));
    setUnreadCount(0);
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
    setUnreadCount(0);
  }, []);

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearAll
  };
}