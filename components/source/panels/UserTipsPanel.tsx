"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TipPreview } from "../tips/TipPreview";
import { TipDetail } from "../tips/TipDetail";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import type { Tip } from "@/lib/types/source";

const MOCK_TIPS: Tip[] = [
  {
    id: "1",
    content: "Fire spotted near downtown area",
    submitter: {
      name: "John Doe",
      username: "johndoe"
    },
    timestamp: new Date(),
    hasMedia: true,
    location: {
      lat: 33.8938,
      lng: 35.5018,
      name: "Downtown Beirut"
    }
  }
];

export function UserTipsPanel() {
  const [selectedTip, setSelectedTip] = useState<Tip | null>(null);
  const [tips, setTips] = useState<Tip[]>(MOCK_TIPS);
  const [tipToDelete, setTipToDelete] = useState<string | null>(null);

  const handleRun = (tip: Tip) => {
    // Implement run functionality
    console.log("Running tip:", tip);
  };

  const handleDelete = (id: string) => {
    setTips(prev => prev.filter(tip => tip.id !== id));
    if (selectedTip?.id === id) {
      setSelectedTip(null);
    }
    setTipToDelete(null);
  };

  return (
    <div className="grid grid-cols-[350px,1fr] gap-6 h-[calc(100vh-12rem)]">
      <Card className="p-4">
        <ScrollArea className="h-full">
          <div className="space-y-4">
            {tips.map((tip) => (
              <TipPreview
                key={tip.id}
                tip={tip}
                isSelected={selectedTip?.id === tip.id}
                onClick={() => setSelectedTip(tip)}
                onDelete={() => setTipToDelete(tip.id)}
              />
            ))}
          </div>
        </ScrollArea>
      </Card>

      <Card className="p-6">
        {selectedTip ? (
          <TipDetail
            tip={selectedTip}
            onRun={() => handleRun(selectedTip)}
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400">
            Select a tip to view details
          </div>
        )}
      </Card>

      <AlertDialog open={!!tipToDelete} onOpenChange={() => setTipToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Tip</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this tip? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => tipToDelete && handleDelete(tipToDelete)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}