"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, ArrowUpDown, FileText, Video, Play, Send, MessageSquare, Heart, DollarSign, Users } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { DateRange } from "../utils/types";

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
   <TooltipProvider>
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-gray-500" />
            <h3 className="text-lg font-semibold">Content Performance</h3>
          </div>
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
                <TableHead onClick={() => handleSort("views")} className="cursor-pointer text-right">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-gray-500" />
                    Views
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("revenue")} className="cursor-pointer text-right">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    Revenue
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("registrations")} className="cursor-pointer text-right">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    Registrations
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("reactions")} className="cursor-pointer text-right">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-gray-500" />
                    Reactions
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("comments")} className="cursor-pointer text-right">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-gray-500" />
                    Comments
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("shares")} className="cursor-pointer text-right">
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4 text-gray-500 rotate-45" />
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
                  <TableCell>
                    {item.type === "article" && <FileText className="h-4 w-4 text-blue-500" />}
                    {item.type === "video" && <Video className="h-4 w-4 text-purple-500" />}
                    {item.type === "clip" && <Play className="h-4 w-4 text-[#FF0000] fill-current" />}
                  </TableCell>
                  <TableCell className="text-right">{formatNumber(item.views)}</TableCell>
                  <TableCell className="text-right">${formatNumber(item.revenue)}</TableCell>
                  <TableCell className="text-right">{formatNumber(item.registrations)}</TableCell>
                  <TableCell className="text-right">{formatNumber(item.reactions)}</TableCell>
                  <TableCell className="text-right">{formatNumber(item.comments)}</TableCell>
                  <TableCell className="text-right">{formatNumber(item.shares)}</TableCell>
                  <TableCell>
                    <Tooltip>
                      <TooltipTrigger>
                        <Avatar className="h-8 w-8 ring-2 ring-[#FF0000]/10 hover:ring-[#FF0000]/20 transition-all">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.journalist}`} />
                          <AvatarFallback>{item.journalist[0]}</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>{item.journalist}</TooltipContent>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
   </TooltipProvider>
  );
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US', {
    notation: "compact",
    compactDisplay: "short"
  }).format(value);
}