"use client";

import { useState } from "react";
import { UpdateItem } from "./UpdateItem";
import { UpdateEditDialog } from "../edit/UpdateEditDialog";
import { DeleteConfirmDialog } from "../delete/DeleteConfirmDialog";
import type { Language, Update } from "@/lib/types/updates";

interface UpdatesListProps {
  searchQuery: string;
  language: Language;
}

const MOCK_UPDATES: Update[] = [
  {
    id: "1",
    content: {
      en: { title: "Breaking News", content: "Major update in downtown" },
      ar: { title: "خبر عاجل", content: "تحديث رئيسي في وسط المدينة" },
      fr: { title: "Dernière Minute", content: "Mise à jour majeure au centre-ville" }
    },
    lastModified: new Date(),
    languages: ["en", "ar", "fr"]
  }
];

export function UpdatesList({ searchQuery, language }: UpdatesListProps) {
  const [editingUpdate, setEditingUpdate] = useState<Update | null>(null);
  const [deletingUpdateId, setDeletingUpdateId] = useState<string | null>(null);
  const [updates] = useState<Update[]>(MOCK_UPDATES);

  const handleDelete = (id: string) => {
    // Implement delete logic
    setDeletingUpdateId(null);
  };

  return (
    <div className="space-y-4">
      {updates.map((update) => (
        <UpdateItem
          key={update.id}
          update={update}
          language={language}
          onEdit={() => setEditingUpdate(update)}
          onDelete={() => setDeletingUpdateId(update.id)}
        />
      ))}

      <UpdateEditDialog
        update={editingUpdate}
        open={!!editingUpdate}
        onOpenChange={(open) => !open && setEditingUpdate(null)}
      />

      <DeleteConfirmDialog
        open={!!deletingUpdateId}
        onOpenChange={() => setDeletingUpdateId(null)}
        onConfirm={() => deletingUpdateId && handleDelete(deletingUpdateId)}
      />
    </div>
  );
}