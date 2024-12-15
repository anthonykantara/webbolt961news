"use client";

import { TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { ContentStatus } from "@/lib/types/content";

interface StatusCellProps {
  status: ContentStatus;
}

export function StatusCell({ status }: StatusCellProps) {
  return (
    <TableCell>
      <Badge variant={status === "published" ? "success" : "secondary"}>
        {status}
      </Badge>
    </TableCell>
  );
}