"use client";

import { useState, useCallback } from "react";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import type { Task, TaskStatus } from "@/lib/types/workflow";

const MOCK_TASKS: Task[] = [
  {
    id: "1",
    title: "Breaking: Major Development in Downtown Beirut",
    description: "Cover the new urban development project announcement including interviews with city officials and impact analysis.",
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // 2 days from now
    status: "in_progress",
    createdBy: {
      id: "1",
      name: "Sarah Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    assignedTo: {
      id: "2",
      name: "Mike Writer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
    },
    createdAt: new Date(),
    contentId: "article-1"
  },
  {
    id: "2",
    title: "Economic Impact Analysis: Q1 2024",
    description: "Comprehensive analysis of Lebanon's economic performance in Q1 2024 with expert insights and future projections.",
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // 5 days from now
    status: "review",
    createdBy: {
      id: "1",
      name: "Sarah Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    assignedTo: {
      id: "3",
      name: "Alex Analyst",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    contentId: "article-2"
  },
  {
    id: "3",
    title: "Tech Innovation Hub Feature",
    description: "Feature story on Beirut's emerging tech startup ecosystem and innovation centers.",
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days from now
    status: "assigned",
    createdBy: {
      id: "1",
      name: "Sarah Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    assignedTo: {
      id: "4",
      name: "Lisa Tech",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
  },
  {
    id: "4",
    title: "Cultural Heritage Preservation",
    description: "Investigation into efforts to preserve Beirut's historic buildings and cultural landmarks.",
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 1 week from now
    status: "pitches",
    createdBy: {
      id: "5",
      name: "James Writer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
  },
  {
    id: "5",
    title: "Infrastructure Development Report",
    description: "Overview of major infrastructure projects planned for 2024-2025.",
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 4), // 4 days from now
    status: "to_be_assigned",
    createdBy: {
      id: "1",
      name: "Sarah Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36), // 36 hours ago
  },
  {
    id: "6",
    title: "Environmental Initiatives Feature",
    description: "Coverage of new environmental protection initiatives and sustainability projects.",
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 6), // 6 days from now
    status: "published",
    createdBy: {
      id: "1",
      name: "Sarah Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    assignedTo: {
      id: "6",
      name: "Emma Green",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    contentId: "article-3"
  },
  {
    id: "7",
    title: "Education System Analysis",
    description: "In-depth analysis of Lebanon's education system challenges and opportunities.",
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 8), // 8 days from now
    status: "pitches",
    createdBy: {
      id: "7",
      name: "David Edu",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
  },
  {
    id: "8",
    title: "Healthcare Innovation Report",
    description: "Report on technological advancements in Lebanon's healthcare sector.",
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // 5 days from now
    status: "in_progress",
    createdBy: {
      id: "1",
      name: "Sarah Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    assignedTo: {
      id: "8",
      name: "Ryan Health",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan"
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48), // 48 hours ago
    contentId: "article-4"
  },
  {
    id: "9",
    title: "Tourism Recovery Strategy",
    description: "Analysis of Lebanon's tourism sector recovery plans and initiatives.",
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 9), // 9 days from now
    status: "review",
    createdBy: {
      id: "1",
      name: "Sarah Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    assignedTo: {
      id: "9",
      name: "Sophie Tourism",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie"
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72), // 72 hours ago
    contentId: "article-5"
  },
  {
    id: "10",
    title: "Digital Transformation Series",
    description: "Multi-part series on digital transformation in Lebanese businesses.",
    targetDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10), // 10 days from now
    status: "to_be_assigned",
    createdBy: {
      id: "1",
      name: "Sarah Editor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
  }
];

export function useWorkflowTasks() {
  const { user } = useCurrentUser();
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  const createTask = useCallback((data: Partial<Task>) => {
    if (!user) return;

    const assignedTo = data.assignedTo ? {
      id: data.assignedTo.id,
      name: data.assignedTo.name,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.assignedTo.name}`
    } : undefined;

    const task: Task = {
      id: crypto.randomUUID(),
      title: data.title || "",
      description: data.description || "",
      targetDate: data.targetDate || new Date(),
      status: assignedTo ? "assigned" : (user.role === "editor" ? "to_be_assigned" : "pitches"),
      createdBy: {
        id: user.id,
        name: user.name,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`
      },
      createdAt: new Date(),
      assignedTo,
      ...data
    };

    setTasks(prev => [...prev, task]);
  }, [user]);

  const updateTask = useCallback((taskId: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId ? { ...task, ...updates } : task
    ));
  }, []);

  const moveTask = useCallback((taskId: string, newStatus: TaskStatus) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  }, []);

  const deleteTask = useCallback((taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  }, []);

  const assignTask = useCallback((taskId: string, userId: string, userName: string) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId ? {
        ...task,
        assignedTo: {
          id: userId,
          name: userName,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`
        },
        status: "assigned"
      } : task
    ));
  }, []);

  const startTask = useCallback((taskId: string, contentId: string) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId ? {
        ...task,
        contentId,
        status: "in_progress"
      } : task
    ));
  }, []);

  return {
    tasks,
    createTask,
    updateTask,
    moveTask,
    deleteTask,
    assignTask,
    startTask
  };
}