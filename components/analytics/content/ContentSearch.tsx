```typescript
"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ContentSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ContentSearch({ value, onChange }: ContentSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search content..."
        className="pl-9 max-w-sm"
      />
    </div>
  );
}
```