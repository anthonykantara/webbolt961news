```typescript
"use client";

interface TopicsListProps {
  section: string;
  topics: string[];
}

export function TopicsList({ section, topics }: TopicsListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
        {section}
      </span>
      {topics.map(topic => (
        <span 
          key={topic} 
          className="text-xs px-2 py-0.5 bg-gray-100 text-gray-800 rounded"
        >
          {topic}
        </span>
      ))}
    </div>
  );
}
```