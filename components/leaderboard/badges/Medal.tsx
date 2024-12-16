"use client";

import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface MedalProps {
  position: 1 | 2 | 3;
}

export function Medal({ position }: MedalProps) {
  const colors = {
    1: "text-yellow-500",
    2: "text-gray-400",
    3: "text-amber-700"
  };

  return (
    <div className={cn(
      "w-8 h-8 flex items-center justify-center",
      colors[position]
    )}>
      <Trophy className="h-6 w-6" />
    </div>
  );
}