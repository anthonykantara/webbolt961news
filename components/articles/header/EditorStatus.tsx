"use client";

import { cn } from "@/lib/utils";

interface EditorStatusProps {
  status: "saving" | "saved";
}

export function EditorStatus({ status }: EditorStatusProps) {
  return (
    <span 
      className={cn(
        "text-sm font-medium transition-colors duration-200",
        status === "saving" ? "text-gray-600" : "text-gray-400"
      )}
      role="status"
      aria-live="polite"
    >
      {status === "saving" ? "Saving" : "Saved"}
    </span>
  );
}