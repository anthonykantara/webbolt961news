"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/styles";

interface ToolbarButtonProps {
  icon: LucideIcon;
  tooltip: string;
  onClick: () => void;
  isActive?: boolean;
}

export function ToolbarButton({
  icon: Icon,
  tooltip,
  onClick,
  isActive
}: ToolbarButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-8 w-8 hover:bg-gray-100",
            isActive && "bg-gray-100 text-gray-900"
          )}
          onClick={onClick}
        >
          <Icon className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={5}>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}