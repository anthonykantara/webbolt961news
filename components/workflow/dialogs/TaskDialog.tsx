"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Task } from "@/lib/types/workflow";

// Mock team members - in a real app, this would come from an API or context
const TEAM_MEMBERS = [
  { id: "2", name: "Mike Writer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" },
  { id: "3", name: "Alex Analyst", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
  { id: "4", name: "Lisa Tech", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa" },
  { id: "6", name: "Emma Green", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
  { id: "8", name: "Ryan Health", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan" },
  { id: "9", name: "Sophie Tourism", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie" }
];

interface TaskDialogProps {
  task?: Task | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (task: Partial<Task>) => void;
  onDelete: (id: string) => void;
}

export function TaskDialog({
  task,
  open,
  onOpenChange,
  onSave,
  onDelete
}: TaskDialogProps) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [assignedUserId, setAssignedUserId] = useState<string>(task?.assignedTo?.id || "");
  const [targetDate, setTargetDate] = useState<Date | undefined>(task?.targetDate);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !targetDate) return;

    const assignedTo = assignedUserId !== "unassigned" ? TEAM_MEMBERS.find(m => m.id === assignedUserId) : undefined;

    const taskData: Task = {
      id: task?.id || crypto.randomUUID(),
      title,
      description,
      targetDate,
      assignedTo: assignedTo ? {
        id: assignedTo.id,
        name: assignedTo.name,
        avatar: assignedTo.avatar
      } : undefined,
      ...task
    };

    onSave(taskData);
    onOpenChange(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{task ? "Edit Task" : "Create Task"}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
                className="mt-2"
              />
            </div>

            <div>
              <Label>Description</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter task description"
                className="mt-2"
              />
            </div>

            <div>
              <Label>Assign To</Label>
              <Select 
                value={assignedUserId || undefined}
                onValueChange={setAssignedUserId}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select team member" />
                </SelectTrigger>
                <SelectContent>
                  {TEAM_MEMBERS.map((member) => (
                    <SelectItem key={member.id} value={member.id}>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{member.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Target Publication Date</Label>
              <Calendar
                mode="single"
                selected={targetDate}
                onSelect={setTargetDate}
                className="mt-2 rounded-md border"
              />
            </div>

            <div className="flex justify-between pt-4">
              {task && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowDeleteDialog(true)}
                  className="text-red-600 hover:text-red-700"
                >
                  Delete
                </Button>
              )}
              <div className="flex gap-2 ml-auto">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!title || !targetDate}
                  className="bg-[#FF0000] hover:bg-[#E60000]"
                >
                  {task ? "Save Changes" : "Create Task"}
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Task</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this task? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (task) onDelete(task.id);
                setShowDeleteDialog(false);
                onOpenChange(false);
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}