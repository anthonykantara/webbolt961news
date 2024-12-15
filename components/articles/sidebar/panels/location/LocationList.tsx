"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import type { Location } from "@/lib/types/location";

interface LocationListProps {
  locations: Location[];
  selectedLocation: Location | null;
  onSelect: (location: Location) => void;
  onRemove: (locationId: string) => void;
}

export function LocationList({
  locations,
  selectedLocation,
  onSelect,
  onRemove
}: LocationListProps) {
  if (locations.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-center text-gray-500">
        <div>
          <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">
            Search for locations or click on the map<br />to add markers
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto space-y-2">
      {locations.map(location => (
        <div
          key={location.id}
          className={cn(
            "p-3 rounded-lg border transition-colors cursor-pointer",
            "hover:bg-gray-50",
            selectedLocation?.id === location.id && "border-red-200 bg-red-50/50"
          )}
          onClick={() => onSelect(location)}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-medium text-sm">{location.name}</p>
              <p className="text-xs text-gray-500">{location.address}</p>
              <p className="text-xs font-mono text-gray-400 mt-1">
                {location.coordinates.lat.toFixed(6)}, {location.coordinates.lng.toFixed(6)}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(location.id);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}