"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { DateRange, StaffMember } from "../types";

const MOCK_DATA: StaffMember[] = [
  {
    id: "1",
    name: "John Smith",
    contentCount: 45,
    totalRevenue: 12500,
    averageRevenue: 277.78,
    totalViews: 150000,
    engagementRate: 78,
    topContent: "Breaking: Major development in downtown Beirut"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    contentCount: 38,
    totalRevenue: 9800,
    averageRevenue: 257.89,
    totalViews: 120000,
    engagementRate: 82,
    topContent: "Analysis: Economic Impact of Recent Events"
  }
];

interface StaffTableProps {
  dateRange: DateRange;
}

export function StaffTable({ dateRange }: StaffTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Content</TableHead>
          <TableHead className="text-right">Revenue</TableHead>
          <TableHead className="text-right">Avg Revenue</TableHead>
          <TableHead className="text-right">Views</TableHead>
          <TableHead className="text-right">Engagement</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {MOCK_DATA.map((member) => (
          <TableRow key={member.id}>
            <TableCell className="font-medium">{member.name}</TableCell>
            <TableCell className="text-right">{member.contentCount}</TableCell>
            <TableCell className="text-right">${member.totalRevenue.toLocaleString()}</TableCell>
            <TableCell className="text-right">${member.averageRevenue.toFixed(2)}</TableCell>
            <TableCell className="text-right">{member.totalViews.toLocaleString()}</TableCell>
            <TableCell className="text-right">{member.engagementRate}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}