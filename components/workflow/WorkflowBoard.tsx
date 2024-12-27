"use client";

import { useState } from "react";
import { WorkflowColumn } from "./column/WorkflowColumn";
import { TaskDialog } from "./dialogs/TaskDialog";
import { WorkflowHeader } from "./header/WorkflowHeader";
import { useWorkflowTasks } from "@/lib/hooks/useWorkflowTasks";
import { useRouter } from "next/navigation";
import type { Task, TaskStatus } from "@/lib/types/workflow";

const COLUMNS: { id: TaskStatus; title: string }[] = [
  { id: "pitches", title: "Pitches" },
  { id: "to_be_assigned", title: "To Be Assigned" },
  { id: "assigned", title: "Assigned" },
  { id: "in_progress", title: "In Progress" },
  { id: "review", title: "Review" },
  { id: "published", title: "Published" }
];

export function WorkflowBoard() {
  const router = useRouter();
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const { tasks, createTask, updateTask, moveTask, deleteTask, assignTask, startTask } = useWorkflowTasks();

  const handleTaskCreate = (task: Partial<Task>) => {
    createTask(task);
    setIsTaskDialogOpen(false);
  };

  const handleTaskUpdate = (task: Task) => {
    updateTask(task.id, task);
    setEditingTask(null);
  };

  const handleTaskStart = (taskId: string) => {
    // Create new content and link it to the task
    const contentId = crypto.randomUUID();
    startTask(taskId, contentId);
    router.push(`/news/content/articles/new?taskId=${taskId}`);
  };

  const handleDragEnd = (taskId: string, newStatus: TaskStatus) => {
    moveTask(taskId, newStatus);
  };

  return (
    <div className="p-6">
      <WorkflowHeader onCreateTask={() => setIsTaskDialogOpen(true)} />

      <div className="mt-6 grid grid-cols-6 gap-6">
        {COLUMNS.map((column) => (
          <WorkflowColumn
            key={column.id}
            title={column.title}
            tasks={tasks.filter(task => task.status === column.id)}
            onTaskClick={setEditingTask}
            onTaskStart={handleTaskStart}
            onDrop={(taskId) => handleDragEnd(taskId, column.id)}
          />
        ))}
      </div>

      <TaskDialog
        task={editingTask}
        open={isTaskDialogOpen || !!editingTask}
        onOpenChange={(open) => {
          setIsTaskDialogOpen(open);
          if (!open) setEditingTask(null);
        }}
        onSave={editingTask ? handleTaskUpdate : handleTaskCreate}
        onDelete={deleteTask}
      />
    </div>
  );
}