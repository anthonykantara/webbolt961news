"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import type { ArticleStatus } from "@/lib/types/article";

interface ActionButtonsProps {
  status: ArticleStatus;
  onSave: () => void;
  onUnpublish: () => void;
  onDelete: () => void;
}

export function ActionButtons({ status, onSave, onUnpublish, onDelete }: ActionButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-6 text-sm">
      <button
        className="text-gray-600 hover:text-gray-900 transition-colors"
        onClick={onSave}
      >
        Save
      </button>
      <button
        className="text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={status !== "published"}
        onClick={onUnpublish}
      >
        Unpublish
      </button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="text-red-600 hover:text-red-700 transition-colors">
            Delete
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Article</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the article
              and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}