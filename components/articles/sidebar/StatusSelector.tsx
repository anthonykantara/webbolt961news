"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import type { ArticleStatus } from "@/lib/types/article";

const statusVariants = cva("capitalize pointer-events-none select-none", {
  variants: {
    variant: {
      draft: "bg-gray-100 text-gray-800",
      review: "bg-amber-100 text-amber-800",
      published: "bg-green-100 text-green-800"
    }
  }
});

interface StatusSelectorProps {
  value: ArticleStatus;
}

export function StatusSelector({ value }: StatusSelectorProps) {
  const labels = {
    draft: "Draft",
    review: "Under Review",
    published: "Published"
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Status</h3>
        <Badge className={statusVariants({ variant: value })}>
          {labels[value]}
        </Badge>
      </div>
    </Card>
  );
}