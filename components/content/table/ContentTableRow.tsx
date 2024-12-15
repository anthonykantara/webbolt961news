"use client";

import { TableRow } from "@/components/ui/table";
import { TitleCell } from "./cells/TitleCell";
import { StatusCell } from "./cells/StatusCell";
import { DateCell } from "./cells/DateCell";
import { MetricCell } from "./cells/MetricCell";
import { UsersCell } from "./cells/UsersCell";
import type { ContentItem } from "@/lib/types/content";

interface ContentTableRowProps {
  item: ContentItem;
}

export function ContentTableRow({ item }: ContentTableRowProps) {
  return (
    <TableRow>
      <TitleCell title={item.title} />
      <StatusCell status={item.status} />
      <DateCell date={item.publishedAt} />
      <DateCell date={item.modifiedAt} />
      <MetricCell value={item.metrics.views} className="text-right" />
      <MetricCell value={item.metrics.shares} className="text-right" />
      <MetricCell value={item.metrics.comments} className="text-right" />
      <MetricCell value={item.metrics.reactions} className="text-right" />
      <UsersCell users={item.activeUsers} />
    </TableRow>
  );
}