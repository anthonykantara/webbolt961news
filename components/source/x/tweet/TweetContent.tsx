"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TweetContentProps {
  username: string;
  displayName: string;
  content: string;
}

export function TweetContent({ username, displayName, content }: TweetContentProps) {
  const formattedContent = content.split(' ').map((word, index) => {
    if (word.startsWith('#')) {
      return (
        <span key={index} className="text-blue-500 hover:underline cursor-pointer">
          {word}{' '}
        </span>
      );
    }
    if (word.startsWith('@')) {
      return (
        <span key={index} className="text-blue-500 hover:underline cursor-pointer">
          {word}{' '}
        </span>
      );
    }
    return word + ' ';
  });

  return (
    <div className="flex gap-3">
      <Avatar className="h-10 w-10 flex-shrink-0">
        <AvatarImage src={`https://unavatar.io/${username}`} />
        <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold hover:underline cursor-pointer">
            {displayName}
          </span>
          <span className="text-gray-500">@{username}</span>
        </div>
        <p className="text-[15px] text-gray-900 break-words mt-1">
          {formattedContent}
        </p>
      </div>
    </div>
  );
}