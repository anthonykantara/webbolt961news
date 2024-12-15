"use client";

import { TableHeader, TableRow, TableHead } from "@/components/ui/table";

export function ContentTableHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Title</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Published</TableHead>
        <TableHead>Modified</TableHead>
        <TableHead className="text-right">Views</TableHead>
        <TableHead className="text-right">Shares</TableHead>
        <TableHead className="text-right">Comments</TableHead>
        <TableHead className="text-right">Reactions</TableHead>
        <TableHead>Active Users</TableHead>
      </TableRow>
    </TableHeader>
  );
}