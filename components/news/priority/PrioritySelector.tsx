"use client";

import { PriorityButton } from "./PriorityButton";
import { NEWS_PRIORITIES, type NewsPriority } from "@/lib/types/news";

interface PrioritySelectorProps {
  value: NewsPriority;
  onChange: (priority: NewsPriority) => void;
}

export function PrioritySelector({ value, onChange }: PrioritySelectorProps) {
  return (
    <div className="w-[465px] h-[133px] bg-white rounded-lg p-4 border border-[#E4E4E7] flex items-center gap-3 flex-shrink-0">
      <PriorityButton
        label="Critical"
        variant="critical"
        isSelected={value === NEWS_PRIORITIES.CRITICAL}
        onClick={() => onChange(NEWS_PRIORITIES.CRITICAL)}
      />
      <PriorityButton
        label="High"
        variant="high"
        isSelected={value === NEWS_PRIORITIES.HIGH}
        onClick={() => onChange(NEWS_PRIORITIES.HIGH)}
      />
      <PriorityButton
        label="Normal"
        variant="normal"
        isSelected={value === NEWS_PRIORITIES.NORMAL}
        onClick={() => onChange(NEWS_PRIORITIES.NORMAL)}
      />
    </div>
  );
}