"use client";

import { MessageGrid } from './MessageGrid';

const templates = [
  "Airstrike in Dahye",
  "MK heard about Beirut and Mount Lebanon",
  "Fire at the National Museum of Beirut",
  "Protests in Downtown Beirut",
  "Breaking: Security Incident",
  "Weather Alert: Heavy Storm"
];

export function TopNavigation() {
  return (
    <header className="h-[84px] px-6 border-b border-[#E4E4E7] bg-white flex items-center">
      <MessageGrid
        messages={templates}
        onSelect={(message) => console.log('Selected:', message)}
      />
    </header>
  );
}