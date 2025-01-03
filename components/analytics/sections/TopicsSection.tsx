"use client";

import { Card } from "@/components/ui/card";
import { TopicsList } from "../content/TopicsList";
// import { TopicsChart } from "../content/TopicsChart";
import { useTopicsData } from "../hooks/useTopicsData";
import type { DateRange } from "../types";

interface TopicsSectionProps {
  dateRange: DateRange;
}

export function TopicsSection({ dateRange }: TopicsSectionProps) {
  const { topics, sections } = useTopicsData(dateRange);

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Topics & Sections</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-4">Trending Topics</h3>
          <TopicsList section={sections.map(section => section.name).join(", ")} topics={topics.map(topic => topic.name)} />
        </div>
        {/* <div>
          <h3 className="text-sm font-medium text-gray-500 mb-4">Section Performance</h3>
          <TopicsChart sections={sections} />
        </div> */}
      </div>
    </Card>
  );
}