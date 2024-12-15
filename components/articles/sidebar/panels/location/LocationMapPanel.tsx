"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { LocationSearch } from "./LocationSearch";
import { LocationList } from "./LocationList";
import { cn } from "@/lib/utils/styles";
import type { Location } from "@/lib/types/location";

export function LocationMapPanel() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleAddLocation = (location: Location) => {
    setLocations(prev => [...prev, location]);
    setSelectedLocation(location);
  };

  const handleRemoveLocation = (locationId: string) => {
    setLocations(prev => prev.filter(loc => loc.id !== locationId));
    if (selectedLocation?.id === locationId) {
      setSelectedLocation(null);
    }
  };

  const handleMarkerDragEnd = (locationId: string, lat: number, lng: number) => {
    setLocations(prev => prev.map(loc => 
      loc.id === locationId 
        ? { ...loc, coordinates: { lat, lng } }
        : loc
    ));
  };

  return (
    <div className="h-[calc(100vh-84px)] flex">
      {/* Left panel */}
      <div className="w-[400px] border-r border-gray-200 bg-white p-6 flex flex-col">
        <LocationSearch onSelect={handleAddLocation} />
        <LocationList 
          locations={locations}
          selectedLocation={selectedLocation}
          onSelect={setSelectedLocation}
          onRemove={handleRemoveLocation}
        />
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <Card className="absolute inset-0 m-4 overflow-hidden">
          <div className="relative h-full bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">
                Map functionality temporarily disabled.
                <br />
                Click to add a location:
              </p>
            </div>
            <div 
              className="absolute inset-0 cursor-pointer"
              onClick={() => handleAddLocation({
                id: crypto.randomUUID(),
                name: `Location at ${lat.toFixed(6)}, ${lng.toFixed(6)}`,
                address: "Custom location",
                coordinates: { lat, lng }
              })}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}