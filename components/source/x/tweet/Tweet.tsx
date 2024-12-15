"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { MessageCircle, Repeat2, Heart, Share } from "lucide-react";
import type { XPost } from "@/lib/types/x-feed";

interface TweetProps {
  tweet: XPost;
}

export function Tweet({ tweet }: TweetProps) {
  const username = tweet.source.name.replace("@", "");
  
  return (
    <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={`https://unavatar.io/${username}`} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold hover:underline">
              {username.replace(/([A-Z])/g, ' $1').trim()}
            </span>
            <span className="text-gray-500">{tweet.source.name}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500 hover:underline">
              {formatDistanceToNow(tweet.publishedAt)}
            </span>
          </div>
          
          <p className="mt-1 text-[15px] whitespace-pre-wrap">{tweet.content}</p>
          
          <div className="flex items-center justify-between mt-3 text-gray-500 max-w-md">
            <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">24</span>
            </button>
            <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
              <Repeat2 className="h-4 w-4" />
              <span className="text-sm">12</span>
            </button>
            <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Heart className="h-4 w-4" />
              <span className="text-sm">148</span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Share className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}