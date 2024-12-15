"use client";

import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export function ArticleList() {
  const router = useRouter();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">Articles</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search articles..."
              className="pl-9 w-[300px]"
            />
          </div>
        </div>
        <Button 
          onClick={() => router.push("/news/content/articles/new")}
          className="bg-[#FF0000] hover:bg-[#E60000]"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Article
        </Button>
      </div>
      
      <div className="text-center py-12 text-gray-500">
        No articles yet. Click the button above to create your first article.
      </div>
    </div>
  );
}