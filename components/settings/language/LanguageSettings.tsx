"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import { LanguageDialog } from "./LanguageDialog";
import type { Language } from "@/lib/types/settings";

export function LanguageSettings() {
  const [languages, setLanguages] = useState<Language[]>([
    { code: "en", name: "English", direction: "ltr", isActive: true },
    { code: "ar", name: "العربية", direction: "rtl", isActive: true },
    { code: "fr", name: "Français", direction: "ltr", isActive: true }
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddDialog, setShowAddDialog] = useState(false);

  const handleAddLanguage = (language: Language) => {
    setLanguages(prev => [...prev, language]);
    setShowAddDialog(false);
  };

  const handleRemoveLanguage = (code: string) => {
    setLanguages(prev => prev.filter(lang => lang.code !== code));
  };

  const handleToggleLanguage = (code: string) => {
    setLanguages(prev => prev.map(lang => 
      lang.code === code ? { ...lang, isActive: !lang.isActive } : lang
    ));
  };

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Languages</h2>
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Language
          </Button>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search languages..."
              className="pl-9"
            />
          </div>

          <div className="space-y-2">
            {filteredLanguages.map((language) => (
              <div
                key={language.code}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg",
                  "border transition-colors",
                  language.isActive ? "bg-gray-50" : "bg-white"
                )}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-sm text-gray-500">({language.code})</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Direction: {language.direction.toUpperCase()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={language.isActive ? "default" : "outline"}
                    onClick={() => handleToggleLanguage(language.code)}
                    className="h-8"
                  >
                    {language.isActive ? "Active" : "Inactive"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveLanguage(language.code)}
                    className="h-8 w-8 text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-8 border-t">
        <h2 className="text-lg font-semibold mb-4">Translation Settings</h2>
        <div className="space-y-4">
          <div>
            <Label>Translation Prompt</Label>
            <Textarea
              placeholder="Enter translation prompt for AI..."
              placeholder="Enter translation prompt for AI..."
              className="mt-2"
              rows={4}
            />
          </div>
        </div>
      </div>

      <LanguageDialog
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
        onSubmit={handleAddLanguage}
      />
    </div>
  );
}