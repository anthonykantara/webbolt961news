"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import type { Location } from "@/lib/types/location";

interface LocationMapProps {
  locations: Location[];
  selectedLocation: Location | null;
  onMarkerClick: (location: Location) => void;
  onMarkerDragStart: () => void;
  onMarkerDragEnd: (locationId: string, lat: number, lng: number) => void;
  onMapClick: (lat: number, lng: number) => void;
}

function LeafletMap({
  locations,
  selectedLocation,
  onMarkerClick,
  onMarkerDragStart,
  onMarkerDragEnd,
  onMapClick,
}: LocationMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  // Initialize map
  useEffect(() => {
    const initMap = async () => {
      if (mapRef.current) return;

      const L = (await import("leaflet")).default;

      // Fix Leaflet icon path issue
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      const defaultCenter = { lat: 33.8938, lng: 35.5018 }; // Beirut

      mapRef.current = L.map("map", {
        center: [defaultCenter.lat, defaultCenter.lng],
        zoom: 13,
        zoomControl: true,
      });

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapRef.current);

      // Add click listener
      mapRef.current.on("click", (e) => {
        onMapClick(e.latlng.lat, e.latlng.lng);
      });
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [onMapClick]);

  // Update markers
  useEffect(() => {
    if (!mapRef.current) return;

    // Remove old markers
    markersRef.current.forEach((marker, id) => {
      if (!locations.find((loc) => loc.id === id)) {
        marker.remove();
        markersRef.current.delete(id);
      }
    });

    // Add/update markers
    locations.forEach((location) => {
      const existing = markersRef.current.get(location.id);

      if (existing) {
        existing.setLatLng([location.coordinates.lat, location.coordinates.lng]);
      } else {
        const marker = L.marker(
          [location.coordinates.lat, location.coordinates.lng],
          { draggable: true }
        ).addTo(mapRef.current!);

        marker.on("click", () => onMarkerClick(location));
        marker.on("dragstart", onMarkerDragStart);
        marker.on("dragend", (e) => {
          const latlng = e.target.getLatLng();
          onMarkerDragEnd(location.id, latlng.lat, latlng.lng);
        });

        markersRef.current.set(location.id, marker);
      }

      // Update marker style if selected
      const marker = markersRef.current.get(location.id);
      if (marker) {
        if (selectedLocation?.id === location.id) {
          marker.setZIndexOffset(1000); // Bring to front
        } else {
          marker.setZIndexOffset(0);
        }
      }
    });
  }, [locations, selectedLocation, onMarkerClick, onMarkerDragStart, onMarkerDragEnd]);

  // Pan to selected location
  useEffect(() => {
    if (!mapRef.current || !selectedLocation) return;

    mapRef.current.setView(
      [selectedLocation.coordinates.lat, selectedLocation.coordinates.lng],
      mapRef.current.getZoom()
    );
  }, [selectedLocation]);

  return <div id="map" className="w-full h-full" />;
}

// Dynamically import the LeafletMap component without SSR
const DynamicLeafletMap = dynamic(() => Promise.resolve(LeafletMap), { ssr: false });

export function LocationMap(props: LocationMapProps) {
  return <DynamicLeafletMap {...props} />;
}
