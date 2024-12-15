"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface WordCountProps {
  content?: string;
}

export function WordCount({ content = "" }: WordCountProps) {
  const [stats, setStats] = useState({ words: 0, characters: 0 });

  useEffect(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    const characters = content.length;
    setStats({ words, characters });
  }, [content]);

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Word Count</h3>
        <p className="text-sm font-medium text-[#A0A4B0]">{stats.words}</p>
      </div>
    </Card>
  );
}