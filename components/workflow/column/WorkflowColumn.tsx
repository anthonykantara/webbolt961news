"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TaskCard } from "../task/TaskCard";
import { cn } from "@/lib/utils";
import type { Task } from "@/lib/types/workflow";

interface WorkflowColumnProps {
  title: string;
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onTaskStart: (taskId: string) => void;
  onDrop: (taskId: string) => void;
}

export function WorkflowColumn({
  title,
  tasks,
  onTaskClick,
  onTaskStart,
  onDrop
}: WorkflowColumnProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add("bg-gray-50");
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("bg-gray-50");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove("bg-gray-50");
    const taskId = e.dataTransfer.getData("text/plain");
    onDrop(taskId);
  };

  return (
    <Card
      className={cn(
        "flex flex-col h-[calc(100vh-12rem)] bg-gray-50/50",
        "transition-colors duration-200"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="p-4 border-b bg-white">
        <h3 className="font-medium flex items-center gap-2">
          <span>{title}</span>
          <span className="text-sm font-normal text-gray-400">({tasks.length})</span>
        </h3>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-2">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onClick={() => onTaskClick(task)}
              onStart={() => onTaskStart(task.id)}
            />
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}