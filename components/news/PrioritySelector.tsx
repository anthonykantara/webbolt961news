"use client";

import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { NEWS_PRIORITIES, type NewsPriority } from "@/lib/constants";

interface PrioritySelectorProps {
  priority: NewsPriority;
  onPriorityChange: (value: NewsPriority) => void;
}

export function PrioritySelector({ priority, onPriorityChange }: PrioritySelectorProps) {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Priority Level</h3>
      <RadioGroup 
        value={priority} 
        onValueChange={onPriorityChange}
        className="flex gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={NEWS_PRIORITIES.CRITICAL} id="critical" />
          <Label htmlFor="critical" className="flex items-center gap-1">
            <AlertCircle className="h-4 w-4 text-red-500" />
            Critical
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={NEWS_PRIORITIES.HIGH} id="high" />
          <Label htmlFor="high">High</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={NEWS_PRIORITIES.NORMAL} id="normal" />
          <Label htmlFor="normal">Normal</Label>
        </div>
      </RadioGroup>
    </Card>
  );
}