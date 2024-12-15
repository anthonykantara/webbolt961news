"use client";

import { TableCell } from "@/components/ui/table";

interface TitleCellProps {
  title: string;
}

export function TitleCell({ title }: TitleCellProps) {
  return (
    <TableCell className="font-medium">
      <div className="max-w-[300px] truncate">
        <a href="#" className="hover:text-blue-600">{title}</a>
      </div>
    </TableCell>
  );
}