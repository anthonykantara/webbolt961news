"use client";

import { cn } from "@/lib/utils";
import { FileText, Image, Layout, Search, MapPin, Languages, Share, Sparkles } from "lucide-react";

const SECTIONS = [
  { id: "content", label: "Content", icon: FileText },
  { id: "featured", label: "Featured", icon: Image },
  { id: "section", label: "Section", icon: Layout },
  { id: "seo", label: "SEO", icon: Search },
  { id: "location", label: "Location", icon: MapPin },
  { id: "translate", label: "Translate", icon: Languages, width: "800px" },
  { id: "distribute", label: "Distribute", icon: Share },
  { id: "editor", label: "Editor", icon: Sparkles }
] as const;

interface EditorNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function EditorNav({ activeSection, onSectionChange }: EditorNavProps) {
  return (
    <nav className="flex items-center gap-8">
      {SECTIONS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onSectionChange(id)}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors h-16",
            activeSection === id
              ? "text-[#FF0000]"
              : "text-gray-500 hover:text-gray-900"
          )}
        >
          <Icon className="h-4 w-4" />
          {label}
        </button>
      ))}
    </nav>
  );
}