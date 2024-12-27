"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import type { Topic } from "@/lib/types/sections";

interface AddTopicDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (topic: Topic) => void;
  topic?: Topic | null;
}

export function AddTopicDialog({
  open,
  onOpenChange,
  onAdd,
  topic
}: AddTopicDialogProps) {
  const [name, setName] = useState(topic?.name || "");
  const [translations, setTranslations] = useState({
    ar: topic?.translations.ar || "",
    fr: topic?.translations.fr || ""
  });
  const [seo, setSeo] = useState({
    title: topic?.seo.title || "",
    description: topic?.seo.description || "",
    keyword: topic?.seo.keywords[0] || ""
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const topic: Topic = {
      id: crypto.randomUUID(),
      name: name.trim(),
      translations: {
        ar: translations.ar.trim(),
        fr: translations.fr.trim()
      },
      seo
    };

    onAdd(topic);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setTranslations({ ar: "", fr: "" });
    setSeo({ title: "", description: "", keywords: [] });
  };

  const handleGenerateTranslations = async () => {
    if (!name) return;
    
    setIsGenerating(true);
    try {
      // In a real app, call your translation API here
      const response = await fetch('/api/translate', {
        method: 'POST',
        body: JSON.stringify({
          text: name,
          type: 'topic',
          languages: ['ar', 'fr']
        })
      });
      const data = await response.json();
      setTranslations(data.translations);
    } catch (error) {
      console.error('Translation failed:', error);
      // Fallback mock translations
      setTranslations({
        ar: "موضوع جديد",
        fr: "Nouveau Sujet"
      });
    }
    setIsGenerating(false);
  };

  const handleGenerateSEO = async () => {
    if (!name) return;
    
    setIsGenerating(true);
    try {
      // In a real app, call your SEO API here
      const response = await fetch('/api/generate-seo', {
        method: 'POST',
        body: JSON.stringify({
          name,
          type: 'topic'
        })
      });
      const data = await response.json();
      setSeo(data.seo);
    } catch (error) {
      console.error('SEO generation failed:', error);
      // Fallback mock SEO
      setSeo({
        title: `${name} News and Updates`,
        description: `Latest ${name.toLowerCase()} news, analysis, and in-depth coverage.`,
        keyword: name.toLowerCase()
      });
    }
    setIsGenerating(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{topic ? 'Edit Topic' : 'Add Topic'}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label>Topic Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter topic name"
              className="mt-2"
            />
          </div>

          <Tabs defaultValue="translations">
            <TabsList>
              <TabsTrigger value="translations">Translations</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>

            <TabsContent value="translations" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <Label>Arabic</Label>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGenerateTranslations}
                  disabled={!name || isGenerating}
                  className="relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,0,0,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
                  <div className="relative flex items-center gap-2">
                    <Sparkles className={cn(
                      "h-4 w-4",
                      isGenerating && "animate-spin"
                    )} />
                    <span>Generate with Arze</span>
                  </div>
                </Button>
              </div>

              <Input
                value={translations.ar}
                onChange={(e) => setTranslations(prev => ({ ...prev, ar: e.target.value }))}
                placeholder="Arabic translation"
                className="mt-2"
                dir="rtl"
              />

              <div>
                <Label>French</Label>
                <Input
                  value={translations.fr}
                  onChange={(e) => setTranslations(prev => ({ ...prev, fr: e.target.value }))}
                  placeholder="French translation"
                  className="mt-2"
                />
              </div>
            </TabsContent>

            <TabsContent value="seo" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <Label>SEO Title</Label>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGenerateSEO}
                  disabled={!name || isGenerating}
                  className="relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,0,0,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
                  <div className="relative flex items-center gap-2">
                    <Sparkles className={cn(
                      "h-4 w-4",
                      isGenerating && "animate-spin"
                    )} />
                    <span>Generate with Arze</span>
                  </div>
                </Button>
              </div>

              <Input
                value={seo.title}
                onChange={(e) => setSeo(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter SEO title"
                className="mt-2"
              />

              <div>
                <Label>SEO Description</Label>
                <Textarea
                  value={seo.description}
                  onChange={(e) => setSeo(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Enter SEO description"
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Keyword</Label>
                <Input
                  value={seo.keyword}
                  onChange={(e) => setSeo(prev => ({
                    ...prev,
                    keyword: e.target.value.trim()
                  }))}
                  placeholder="Keyword"
                  className="mt-2"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                resetForm();
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!name.trim()}
              className="bg-[#FF0000] hover:bg-[#E60000]"
            >
              {topic ? 'Save Changes' : 'Add Topic'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}