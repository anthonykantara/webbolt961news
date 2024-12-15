"use client";

import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmojiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const EmojiButton = forwardRef<HTMLButtonElement, EmojiButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        type="button"
        variant="ghost"
        size="icon"
        className={cn(
          "h-8 w-8 text-[#8A8A8E] hover:text-[#0E121B]",
          "transition-colors duration-200",
          className
        )}
        {...props}
      >
        <Smile className="h-5 w-5" />
      </Button>
    );
  }
);

EmojiButton.displayName = "EmojiButton";