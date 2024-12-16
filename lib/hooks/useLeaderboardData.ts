"use client";

import { useState, useEffect } from "react";
import type { TimeFilter, LeaderboardData } from "@/lib/types/leaderboard";

const MOCK_DATA: LeaderboardData = {
  totalViews: [
    {
      id: "1",
      name: "Sarah Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      value: 125000,
      streak: 4
    },
    {
      id: "2", 
      name: "Mike Writer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      value: 98000,
      streak: 2
    },
    {
      id: "3",
      name: "Alex Reporter",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      value: 87000,
      streak: 3
    },
    {
      id: "4",
      name: "Emma Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      value: 82000,
      streak: 0
    },
    {
      id: "5",
      name: "David Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      value: 78000,
      streak: 4
    },
    {
      id: "6",
      name: "Sophia Martinez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
      value: 75000,
      streak: 0
    },
    {
      id: "7",
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      value: 72000,
      streak: 2
    }
  ],
  averageViews: [
    {
      id: "1",
      name: "Sarah Editor",
      title: "Senior Editor", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      value: 5200,
      streak: 3
    },
    {
      id: "2",
      name: "Mike Writer",
      title: "Staff Writer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike", 
      value: 4100,
      streak: 0
    },
    {
      id: "3", 
      name: "Alex Reporter",
      title: "Field Reporter",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      value: 3600,
      streak: 2
    }
  ],
  engagement: [
    {
      id: "1",
      name: "Sarah Editor",
      title: "Senior Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      value: 8900,
      streak: 3
    },
    {
      id: "2",
      name: "Mike Writer", 
      title: "Staff Writer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      value: 6700,
      streak: 0
    },
    {
      id: "3",
      name: "Alex Reporter",
      title: "Field Reporter", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      value: 5400,
      streak: 2
    }
  ],
  shares: [
    {
      id: "1",
      name: "Sarah Editor",
      title: "Senior Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      value: 2340,
      streak: 3
    },
    {
      id: "2",
      name: "Mike Writer",
      title: "Staff Writer", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      value: 1890,
      streak: 0
    },
    {
      id: "3",
      name: "Alex Reporter",
      title: "Field Reporter",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      value: 1560,
      streak: 2
    }
  ],
  publishingSpeed: [
    {
      id: "1",
      name: "Sarah Editor",
      title: "Senior Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      value: 45,
      streak: 3
    },
    {
      id: "2",
      name: "Mike Writer",
      title: "Staff Writer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      value: 52,
      streak: 0
    },
    {
      id: "3",
      name: "Alex Reporter",
      title: "Field Reporter",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      value: 58,
      streak: 2
    }
  ]
};

export function useLeaderboardData(timeFilter: TimeFilter) {
  const [data, setData] = useState<LeaderboardData>(MOCK_DATA);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    const timer = setTimeout(() => {
      setData(MOCK_DATA);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeFilter]);

  return { data, isLoading };
}