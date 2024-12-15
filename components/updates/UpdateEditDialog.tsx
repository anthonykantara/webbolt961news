"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Update, UpdateFormData } from "@/lib/types/updates";

interface UpdateEditDialogProps {
  update: Update | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UpdateEditDialog({ update, open, onOpenChange }: UpdateEditDialogProps) {
  const [formData, setFormData] = useState<UpdateFormData>(update?.content || {
    en: { title: "", content: "" },
    ar: { title: "", content: "" },
    fr: { title: "", content: "" }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement save logic
    onOpenChange(false);
  };

  const handleChange = (lang: keyof UpdateFormData, field: "title" | "content", value: string) => {
    setFormData(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [field]: value
      }
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Update</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs defaultValue="en">
            <TabsList>
              <TabsTrigger value="en">English</TabsTrigger>
              <TabsTrigger value="ar">العربية</TabsTrigger>
              <TabsTrigger value="fr">Français</TabsTrigger>
            </TabsList>

            <TabsContent value="en" className="space-y-4">
              <Input 
                value={formData.en.title}
                onChange={(e) => handleChange("en", "title", e.target.value)}
                placeholder="Title"
              />
              <Textarea 
                value={formData.en.content}
                onChange={(e) => handleChange("en", "content", e.target.value)}
                placeholder="Content"
              />
            </TabsContent>

            <TabsContent value="ar" className="space-y-4">
              <Input 
                value={formData.ar.title}
                onChange={(e) => handleChange("ar", "title", e.target.value)}
                placeholder="العنوان"
                dir="rtl"
              />
              <Textarea 
                value={formData.ar.content}
                onChange={(e) => handleChange("ar", "content", e.target.value)}
                placeholder="المحتوى"
                dir="rtl"
              />
            </TabsContent>

            <TabsContent value="fr" className="space-y-4">
              <Input 
                value={formData.fr.title}
                onChange={(e) => handleChange("fr", "title", e.target.value)}
                placeholder="Titre"
              />
              <Textarea 
                value={formData.fr.content}
                onChange={(e) => handleChange("fr", "content", e.target.value)}
                placeholder="Contenu"
              />
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}