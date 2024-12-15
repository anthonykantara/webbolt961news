"use client";

import { TableCell } from "@/components/ui/table";
import { format } from "date-fns";

interface DateCellProps {
  date: Date | null;
  format?: string;
}

export function DateCell({ date, format: dateFormat = "MM/dd/yy" }: DateCellProps) {
  return (
    <TableCell>
      {date ? format(date, dateFormat) : "-"}
    </TableCell>
  );
}