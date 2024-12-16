"use client";

interface TopicTagsProps {
  section: string;
  topics: string[];
}

export function TopicTags({ section, topics }: TopicTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
        {section}
      </span>
      {topics.map(topic => (
        <span 
          key={topic} 
          className="text-xs px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full"
        >
          {topic}
        </span>
      ))}
    </div>
  );
}