"use client";

import { useCallback, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { LocationSearch } from "./LocationSearch";
import { LocationList } from "./LocationList";
import { cn } from "@/lib/utils/styles";
import type { Location } from "@/lib/types/location";
import { LocationMap } from "./LocationMap";

export function LocationMapPanel() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleAddLocation = useCallback((location: Location) => {
    setLocations(prev => [...prev, location]);
    setSelectedLocation(location);
  }, {});

  const handleRemoveLocation = useCallback((locationId: string) => {
    setLocations(prev => prev.filter(loc => loc.id !== locationId));
    if (selectedLocation?.id === locationId) {
      setSelectedLocation(null);
    }
  }, [selectedLocation]);

  const handleMarkerDragEnd = useCallback((locationId: string, lat: number, lng: number) => {
    setLocations(prev => prev.map(loc => 
      loc.id === locationId 
        ? { ...loc, coordinates: { lat, lng } }
        : loc
    ));
  }, []);

  const handleMapClick = useCallback((lat: number, lng: number) => {
    const newLocation: Location = {
      id: crypto.randomUUID(),
      name: `Location at ${lat.toFixed(6)}, ${lng.toFixed(6)}`,
      address: "Custom location",
      coordinates: { lat, lng },
    };
    handleAddLocation(newLocation);
  }, [handleAddLocation]);

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
        <LocationMap
          locations={locations}
          selectedLocation={selectedLocation}
          onMarkerClick={setSelectedLocation}
          onMarkerDragStart={() => {}}
          onMarkerDragEnd={handleMarkerDragEnd}
          onMapClick={handleMapClick}
        />
      </div>
    </div>
  );
}