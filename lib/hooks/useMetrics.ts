"use client";

import { useState, useEffect } from "react";
import { Eye, Users, DollarSign, Share, MessageSquare, Smile } from "lucide-react";
import type { Metric } from "@/lib/types/dashboard";

const MOCK_METRICS: Metric[] = [
  {
    id: "views",
    label: "Views",
    value: 34999,
    change: 20,
    trend: "up",
    icon: "Eye"
  },
  {
    id: "users",
    label: "Users",
    value: 12543,
    change: 15,
    trend: "up",
    icon: "Users"
  },
  {
    id: "revenue",
    label: "Revenue",
    value: 15420,
    change: 25,
    trend: "up",
    icon: {
      Icon: DollarSign,
      color: "text-blue-500"
    }
  },
  {
    id: "shares",
    label: "Total Shares",
    value: 8976,
    change: 8,
    trend: "up",
    icon: {
      Icon: Share,
      color: "text-orange-500"
    }
  },
  {
    id: "comments",
    label: "Comments",
    value: 5432,
    change: 12,
    trend: "up",
    icon: "MessageSquare"
  },
  {
    id: "reactions",
    label: "Reactions",
    value: 28976,
    change: 18,
    trend: "up",
    icon: "Smile"
  }
];

export function useMetrics() {
  const [metrics, setMetrics] = useState<Metric[]>(MOCK_METRICS);

  useEffect(() => {
    // In a real app, fetch metrics data here
    const interval = setInterval(() => {
      // Simulate real-time updates
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.value + Math.floor(Math.random() * 100),
        change: Math.floor(Math.random() * 30),
        trend: Math.random() > 0.3 ? "up" : "down"
      })));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return { metrics };
}