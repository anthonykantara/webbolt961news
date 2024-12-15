"use client";

import { useState } from "react";
import { TemplateMessage } from './TemplateMessage';
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { cn } from '@/lib/utils';
import { TemplateManagementDialog } from "../templates/TemplateManagementDialog";

interface MessageGridProps {
  messages: string[];
  onSelect: (message: string) => void;
}

export function MessageGrid({ messages, onSelect }: MessageGridProps) {
  const [isManageOpen, setIsManageOpen] = useState(false);
  const firstRow = messages.slice(0, 3);
  const secondRow = messages.slice(3, 6);

  return (
    <>
      <div className="flex items-center gap-[35px]">
        <div className="flex items-center gap-2">
          <div className="w-[988px] h-[78px] flex items-center my-[3px]">
            <div className="flex-1 border border-[#E4E4E7] rounded-lg">
              <div className="grid grid-rows-2 h-full divide-y divide-[#E4E4E7]">
                <div className="grid grid-cols-3 h-full">
                  {firstRow.map((message, index) => (
                    <TemplateMessage
                      key={index}
                      message={message}
                      onSelect={() => onSelect(message)}
                      isLast={index === firstRow.length - 1}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-3 h-full">
                  {secondRow.map((message, index) => (
                    <TemplateMessage
                      key={index + 3}
                      message={message}
                      onSelect={() => onSelect(message)}
                      isLast={index === secondRow.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#8A8A8E] hover:text-[#0E121B]"
            onClick={() => setIsManageOpen(true)}
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-[35px]">
          <Button
            className={cn(
              "h-[84px] w-[106px] bg-[#0084FF] hover:bg-[#0074E5]",
              "flex flex-col items-center justify-center"
            )}
          >
            <span className="font-medium">Run</span>
            <span className="text-[12px] text-white/50 mt-1">
              Shift + R
            </span>
          </Button>
          <Button
            className={cn(
              "h-[84px] w-[160px] bg-[#FF0000] hover:bg-[#E60000]",
              "flex flex-col items-center justify-center"
            )}
          >
            <span className="font-medium">Publish</span>
            <span className="text-[12px] text-white/50 mt-1">
              Shift + Enter
            </span>
          </Button>
        </div>
      </div>

      <TemplateManagementDialog
        open={isManageOpen}
        onOpenChange={setIsManageOpen}
      />
    </>
  );
}