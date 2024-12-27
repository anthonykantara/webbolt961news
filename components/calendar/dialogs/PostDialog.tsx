"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import type { CalendarPost } from "@/lib/types/calendar";

interface PostDialogProps {
  post?: CalendarPost | null;
  selectedDate: Date;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (post: CalendarPost) => void;
  onDelete: (id: string) => void;
}

export function PostDialog({
  post,
  selectedDate,
  open,
  onOpenChange,
  onSave,
  onDelete
}: PostDialogProps) {
  const [title, setTitle] = useState(post?.title || "");
  const [type, setType] = useState<CalendarPost["type"]>(post?.type || "article");
  const [date, setDate] = useState<Date>(post?.scheduledDate || selectedDate);

  // Reset form when post changes
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setType(post.type);
      setDate(post.scheduledDate);
      // Reset form when dialog closes
      return () => {
        setTitle("");
        setType("article");
        setDate(selectedDate);
      };
    } else {
      setTitle("");
      setType("article");
      setDate(selectedDate);
    }
  }, [post, selectedDate]);

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const postData: CalendarPost = {
      id: post?.id || crypto.randomUUID(),
      title,
      type,
      status: "scheduled",
      scheduledDate: date,
      author: {
        id: "1", // In a real app, get from auth context
        name: "Sarah Editor"
      }
    };

    onSave(postData);
    onOpenChange(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{post ? "Edit Scheduled Post" : "Schedule Post"}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
                className="mt-2"
              />
            </div>

            <div>
              <Label>Type</Label>
              <Select value={type} onValueChange={(value) => setType(value as CalendarPost["type"])}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="article">Article</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Scheduled Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => date && setDate(date)}
                className="mt-2 rounded-md border"
              />
            </div>

            <div className="flex justify-between pt-4">
              {post && (
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
                  disabled={!title}
                  className="bg-[#FF0000] hover:bg-[#E60000]"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this scheduled post? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (post) onDelete(post.id);
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