"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DateRange } from "@/lib/types/dashboard";

interface ContentItem {
  id: string;
  title: string;
  type: string;
  views: number;
  revenue: number;
  registrations: number;
  reactions: number;
  comments: number;
  shares: number;
  journalist: string;
}

const MOCK_DATA: ContentItem[] = [
  {
    id: "1",
    title: "Breaking: Major development in downtown Beirut",
    type: "article",
    views: 12500,
    revenue: 450,
    registrations: 25,
    reactions: 890,
    comments: 234,
    shares: 567,
    journalist: "Sarah Editor"
  },
  {
    id: "2",
    title: "Analysis: Economic Impact of Recent Events",
    type: "article",
    views: 8900,
    revenue: 320,
    registrations: 15,
    reactions: 456,
    comments: 123,
    shares: 345,
    journalist: "Mike Writer"
  }
];

interface ContentPerformanceProps {
  dateRange: DateRange;
}

export function ContentPerformance({ dateRange }: ContentPerformanceProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<keyof ContentItem>("views");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [selectedType, setSelectedType] = useState("all");

  const filteredData = MOCK_DATA
    .filter(item => 
      (selectedType === "all" || item.type === selectedType) &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      return sortDirection === "asc" 
        ? (aValue > bValue ? 1 : -1)
        : (aValue < bValue ? 1 : -1);
    });

  const handleSort = (field: keyof ContentItem) => {
    if (field === sortField) {
      setSortDirection(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Content Performance</h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search content..."
                className="pl-9 w-[300px]"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="article">Articles</SelectItem>
                <SelectItem value="video">Videos</SelectItem>
                <SelectItem value="update">Updates</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead onClick={() => handleSort("views")} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    Views
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("revenue")} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    Revenue
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("registrations")} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    Registrations
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("reactions")} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    Reactions
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("comments")} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    Comments
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("shares")} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    Shares
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Journalist</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium max-w-[300px] truncate">
                    {item.title}
                  </TableCell>
                  <TableCell className="capitalize">{item.type}</TableCell>
                  <TableCell>{formatNumber(item.views)}</TableCell>
                  <TableCell>${formatNumber(item.revenue)}</TableCell>
                  <TableCell>{formatNumber(item.registrations)}</TableCell>
                  <TableCell>{formatNumber(item.reactions)}</TableCell>
                  <TableCell>{formatNumber(item.comments)}</TableCell>
                  <TableCell>{formatNumber(item.shares)}</TableCell>
                  <TableCell>{item.journalist}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US', {
    notation: "compact",
    compactDisplay: "short"
  }).format(value);
}