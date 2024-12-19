"use client";

import { useEffect } from "react";

interface KeyboardShortcutHandlers {
  onRun: () => void;
  onPublish: () => void;
}

export function useKeyboardShortcuts({ onRun, onPublish }: KeyboardShortcutHandlers) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Shift + R to run
      if (e.shiftKey && e.key.toLowerCase() === "r") {
        e.preventDefault();
        onRun();
      }
      
      // Shift + Enter to publish
      if (e.shiftKey && e.key === "Enter") {
        e.preventDefault();
        onPublish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onRun, onPublish]);
}