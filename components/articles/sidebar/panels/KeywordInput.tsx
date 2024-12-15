"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils/styles";

interface KeywordInputProps {
  primaryKeyword: string;
  secondaryKeywords: string[];
  onPrimaryChange: (keyword: string) => void;
  onSecondaryChange: (keywords: string[]) => void;
}

export function KeywordInput({
  primaryKeyword,
  secondaryKeywords,
  onPrimaryChange,
  onSecondaryChange
}: KeywordInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const keyword = inputValue.trim();
      if (!keyword) return;

      if (!primaryKeyword) {
        onPrimaryChange(keyword);
      } else {
        onSecondaryChange([...secondaryKeywords, keyword]);
      }
      setInputValue("");
    }
  };

  const handlePillClick = (keyword: string) => {
    if (keyword === primaryKeyword) return;
    
    // Store current primary if it exists
    const oldPrimary = primaryKeyword;
    
    // Remove clicked keyword from secondary keywords
    const newSecondaryKeywords = secondaryKeywords.filter(k => k !== keyword);
    
    // Make clicked keyword the new primary
    onPrimaryChange(keyword);
    
    // Add old primary to secondary keywords if it exists
    if (primaryKeyword) {
      onSecondaryChange([...newSecondaryKeywords, oldPrimary]);
    } else {
      onSecondaryChange(newSecondaryKeywords);
    }
  };

  const handleRemoveKeyword = (keyword: string, isPrimary: boolean) => {
    if (isPrimary) {
      onPrimaryChange("");
    } else {
      onSecondaryChange(secondaryKeywords.filter(k => k !== keyword));
    }
  };

  return (
    <div className={cn(
      "p-3 rounded-lg min-h-[120px]",
      "border border-gray-200",
      "focus-within:ring-2 focus-within:ring-red-100 focus-within:border-red-200",
      "transition-all duration-200"
    )}>
      <div className="flex flex-wrap gap-2">
        {primaryKeyword && (
          <div className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full",
            "bg-gradient-to-r from-red-500 to-red-600",
            "text-white text-sm font-medium"
          )}>
            <span>{primaryKeyword}</span>
            <button
              onClick={() => handleRemoveKeyword(primaryKeyword, true)}
              className="hover:bg-white/20 rounded-full p-0.5"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
        
        {secondaryKeywords.map((keyword, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full",
              "bg-gray-100 hover:bg-gray-200 cursor-pointer",
              "text-gray-700 text-sm"
            )}
            onClick={() => handlePillClick(keyword)}
          >
            <span>{keyword}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveKeyword(keyword, false);
              }}
              className="hover:bg-gray-300/50 rounded-full p-0.5"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
        
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={!primaryKeyword ? "Enter primary keyword" : "Add secondary keyword"}
          className={cn(
            "flex-1 min-w-[200px] outline-none bg-transparent",
            "text-sm placeholder:text-gray-400"
          )}
        />
      </div>
    </div>
  );
}