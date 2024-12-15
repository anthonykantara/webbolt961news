"use client";

import { TableCell } from "@/components/ui/table";
import { formatNumber } from "@/lib/utils/formatting";

interface MetricCellProps {
  value: number;
  className?: string;
}

export function MetricCell({ value, className }: MetricCellProps) {
  return (
    <TableCell className={className}>
      {formatNumber(value)}
    </TableCell>
  );
}