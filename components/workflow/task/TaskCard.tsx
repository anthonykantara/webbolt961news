"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Link as LinkIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import type { Task } from "@/lib/types/workflow";

interface TaskCardProps {
  task: Task;
  onClick: () => void;
  onStart: () => void;
}

export function TaskCard({ task, onClick, onStart }: TaskCardProps) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", task.id);
    e.currentTarget.classList.add("opacity-50");
  };

  const handleDragEnd = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("opacity-50");
  };

  return (
    <Card
      draggable
      className={cn(
        "p-4 cursor-pointer hover:shadow-md transition-all duration-200",
        "border-l-4",
        "bg-white hover:bg-gray-50",
        task.status === "review" && "border-l-amber-500",
        task.status === "published" && "border-l-green-500",
        task.status === "in_progress" && "border-l-blue-500",
        !["review", "published", "in_progress"].includes(task.status) && "border-l-gray-300"
      )}
      onClick={onClick}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 flex-1">
            <h4 className="text-sm font-medium leading-tight">{task.title}</h4>
            <p className="text-xs text-gray-500 line-clamp-2">{task.description}</p>
          </div>
          {task.contentId && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 flex-shrink-0 hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                window.open(`/news/content/articles/${task.contentId}`, '_blank');
              }}
            >
              <LinkIcon className="h-4 w-4 text-gray-500 hover:text-blue-500" />
            </Button>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span className="font-medium">{format(task.targetDate, "MMM d")}</span>
          </div>
          {task.assignedTo ? (
            <Avatar className="h-6 w-6 ring-2 ring-white">
              <AvatarImage src={task.assignedTo.avatar} />
              <AvatarFallback>{task.assignedTo.name[0]}</AvatarFallback>
            </Avatar>
          ) : (
            <Badge variant="outline" className="text-xs bg-gray-50">Unassigned</Badge>
          )}
        </div>

        {task.status === "assigned" && (
          <Button
            size="sm"
            className="w-full h-7 bg-[#FF0000] hover:bg-[#E60000]"
            onClick={(e) => {
              e.stopPropagation();
              onStart();
            }}
          >
            <Play className="h-3 w-3 mr-2" />
            Start
          </Button>
        )}
      </div>
    </Card>
  );
}