"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DateRange } from "@/lib/types/dashboard";

interface JournalistStats {
  id: string;
  name: string;
  username: string;
  totalViews: number;
  totalRevenue: number;
  publishedContent: number;
  avgViewsPerContent: number;
  avgRevenuePerContent: number;
  avgPublishingTime: number;
  engagement: {
    reactions: number;
    comments: number;
    shares: number;
  };
}

const MOCK_DATA: JournalistStats[] = [
  {
    id: "1",
    name: "Sarah Editor",
    username: "sarah_editor",
    totalViews: 125000,
    totalRevenue: 4500,
    publishedContent: 45,
    avgViewsPerContent: 2778,
    avgRevenuePerContent: 100,
    avgPublishingTime: 45,
    engagement: {
      reactions: 8900,
      comments: 2340,
      shares: 5670
    }
  },
  {
    id: "2",
    name: "Mike Writer",
    username: "mike_writer",
    totalViews: 98000,
    totalRevenue: 3800,
    publishedContent: 38,
    avgViewsPerContent: 2579,
    avgRevenuePerContent: 100,
    avgPublishingTime: 52,
    engagement: {
      reactions: 6700,
      comments: 1890,
      shares: 4320
    }
  }
];

interface JournalistPerformanceProps {
  dateRange: DateRange;
}

export function JournalistPerformance({ dateRange }: JournalistPerformanceProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<keyof JournalistStats>("totalViews");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const filteredData = MOCK_DATA
    .filter(journalist => 
      journalist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      journalist.username.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      return sortDirection === "asc" 
        ? (aValue > bValue ? 1 : -1)
        : (aValue < bValue ? 1 : -1);
    });

  const handleSort = (field: keyof JournalistStats) => {
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
          <h3 className="text-lg font-semibold">Journalist Performance</h3>
          <div className="relative w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search journalists..."
              className="pl-9"
            />
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Journalist</TableHead>
                <TableHead onClick={() => handleSort("totalViews")} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    Total Views
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("totalRevenue")} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    Total Revenue
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("publishedContent")} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    Published
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("avgViewsPerContent")} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    Avg Views
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("avgPublishingTime")} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    Avg Time
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Engagement</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((journalist) => (
                <TableRow key={journalist.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${journalist.username}`} />
                        <AvatarFallback>{journalist.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{journalist.name}</div>
                        <div className="text-sm text-gray-500">@{journalist.username}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{formatNumber(journalist.totalViews)}</TableCell>
                  <TableCell>${formatNumber(journalist.totalRevenue)}</TableCell>
                  <TableCell>{journalist.publishedContent}</TableCell>
                  <TableCell>{formatNumber(journalist.avgViewsPerContent)}</TableCell>
                  <TableCell>{journalist.avgPublishingTime}m</TableCell>
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Reactions</span>
                        <span>{formatNumber(journalist.engagement.reactions)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Comments</span>
                        <span>{formatNumber(journalist.engagement.comments)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Shares</span>
                        <span>{formatNumber(journalist.engagement.shares)}</span>
                      </div>
                    </div>
                  </TableCell>
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