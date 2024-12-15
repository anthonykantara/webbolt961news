"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import type { Location } from "@/lib/types/location";

interface LocationSearchProps {
  onSelect: (location: Location) => void;
}

const MOCK_SUGGESTIONS: Location[] = [
  {
    id: "1",
    name: "National Museum of Beirut",
    address: "Museum Street, Beirut, Lebanon",
    coordinates: { lat: 33.8755485, lng: 35.5145445 }
  },
  {
    id: "2",
    name: "Beirut Grand Theatre",
    address: "Downtown, Beirut, Lebanon",
    coordinates: { lat: 33.8963, lng: 35.5018 }
  }
];

export function LocationSearch({ onSelect }: LocationSearchProps) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = MOCK_SUGGESTIONS.filter(loc =>
    loc.name.toLowerCase().includes(query.toLowerCase()) ||
    loc.address.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          placeholder="Search locations..."
          className="pl-9 pr-8"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 hover:bg-gray-100"
            onClick={() => {
              setQuery("");
              setShowSuggestions(false);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {showSuggestions && query && (
        <div className="absolute z-10 left-0 right-0 mt-1 bg-white rounded-lg border shadow-lg">
          <div className="p-2 space-y-1">
            {filteredSuggestions.map(location => (
              <button
                key={location.id}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md",
                  "hover:bg-gray-50 transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-red-100"
                )}
                onClick={() => {
                  onSelect(location);
                  setQuery("");
                  setShowSuggestions(false);
                }}
              >
                <div>
                  <p className="text-sm font-medium">{location.name}</p>
                  <p className="text-xs text-gray-500">{location.address}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}