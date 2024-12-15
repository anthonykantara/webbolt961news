"use client";

import { cn } from "@/lib/utils";
import { FileText, Star, Layout, Search, MapPin, Languages, Share, Edit } from "lucide-react";

const SECTIONS = [
  { id: "content", label: "Content", icon: FileText },
  { id: "featured", label: "Featured", icon: Star },
  { id: "section", label: "Section", icon: Layout },
  { id: "seo", label: "SEO", icon: Search },
  { id: "location", label: "Location", icon: MapPin },
  { id: "translate", label: "Translate", icon: Languages },
  { id: "distribute", label: "Distribute", icon: Share },
  { id: "editor", label: "Editor", icon: Edit }
] as const;

interface EditorNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function EditorNav({ activeSection, onSectionChange }: EditorNavProps) {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="px-6 flex items-center gap-6">
        {SECTIONS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={cn(
              "flex items-center gap-2 py-3 text-sm font-medium transition-colors border-b-2",
              activeSection === id
                ? "text-[#FF0000] border-[#FF0000]"
                : "text-gray-500 hover:text-gray-900 border-transparent"
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}