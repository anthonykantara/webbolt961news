"use client"; 

import { Table, TableBody } from "@/components/ui/table";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ContentTableHeader } from "./ContentTableHeader";
import { ContentTableRow } from "./ContentTableRow";
import type { ContentItem } from "@/lib/types/content";
import { Skeleton } from "@/components/ui/skeleton";

interface ContentTableProps {
  items: ContentItem[];
  isLoading: boolean;
}

export function ContentTable({ items, isLoading }: ContentTableProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-16 w-full" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No content found. Try adjusting your filters.
      </div>
    );
  }

  return (
    <TooltipProvider>
      <Table className="border rounded-lg">
        <ContentTableHeader />
        <TableBody>
          {items.map((item) => (
            <ContentTableRow key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
    </TooltipProvider>
  );
}