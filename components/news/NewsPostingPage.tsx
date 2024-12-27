"use client";

import { useState } from "react";
import { MessageGrid } from "./header/MessageGrid";
import { NewsContentInput } from "./content/NewsContentInput";
import { PrioritySelector } from "./priority/PrioritySelector";
import { AdditionalNewsContent } from "./content/AdditionalNewsContent";
import { FileUpload } from "./upload/FileUpload";
import { LocationSection } from "./location/LocationSection";
import { DistributionPanel } from "./distribution/DistributionPanel";
import { Button } from "@/components/ui/button";
import { NEWS_PRIORITIES, type NewsPriority } from "@/lib/types/news";
import { useNewsActions } from "@/lib/hooks/useNewsActions";
import { useKeyboardShortcuts } from "@/lib/hooks/useKeyboardShortcuts";

const templates = [
  "Airstrike in Dahye",
  "MK heard about Beirut and Mount Lebanon",
  "Fire at the National Museum of Beirut",
  "Protests in Downtown Beirut",
  "Breaking: Security Incident",
  "Weather Alert: Heavy Storm"
];

export function NewsPostingPage() {
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState<NewsPriority>(NEWS_PRIORITIES.NORMAL);
  const [additionalTitle, setAdditionalTitle] = useState("");
  const [additionalContent, setAdditionalContent] = useState("");
  const [arabicTitle, setArabicTitle] = useState("");
  const [arabicContent, setArabicContent] = useState("");
  const [frenchTitle, setFrenchTitle] = useState("");
  const [frenchContent, setFrenchContent] = useState("");

  const { isRunning, isPublishing, handleRun, handlePublish } = useNewsActions();

  const runContent = async () => {
    if (!content) return;
    
    try {
      const result = await handleRun(content);
      
      // Update translations with AI results
      setArabicTitle(result.translations.ar.title);
      setArabicContent(result.translations.ar.content);
      setFrenchTitle(result.translations.fr.title);
      setFrenchContent(result.translations.fr.content);
      
      // TODO: Update location with suggested coordinates
    } catch (error) {
      console.error("Failed to run content:", error);
    }
  };

  const publishContent = async () => {
    try {
      await handlePublish({
        content,
        priority,
        translations: {
          ar: { title: arabicTitle, content: arabicContent },
          fr: { title: frenchTitle, content: frenchContent }
        }
      });
    } catch (error) {
      console.error("Failed to publish:", error);
    }
  };

  useKeyboardShortcuts({
    onRun: runContent,
    onPublish: publishContent
  });

  return (
    <div className="p-6">
      <MessageGrid
        messages={templates}
        onSelect={(message) => setContent(message)}
      />
      <div className="mt-[30px] flex gap-4">
        <div className="flex gap-[15px]">
          <NewsContentInput
            value={content}
            onChange={setContent}
            isRunning={isRunning}
            onRun={runContent}
          />
          <PrioritySelector
            value={priority}
            onChange={setPriority}
          />
        </div>
      </div>
      <div className="mt-[19px] flex gap-[45px]">
        {/* Language content column */}
        <div className="flex flex-col gap-[15px]">
          <AdditionalNewsContent
            title={additionalTitle}
            content={additionalContent}
            onTitleChange={setAdditionalTitle}
            onContentChange={setAdditionalContent}
          />
          <AdditionalNewsContent
            title={arabicTitle}
            content={arabicContent}
            onTitleChange={setArabicTitle}
            onContentChange={setArabicContent}
            direction="rtl"
            placeholder={{
              title: "حريق في المتحف الوطني في بيروت",
              content: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاً طبيعياً"
            }}
          />
          <AdditionalNewsContent
            title={frenchTitle}
            content={frenchContent}
            onTitleChange={setFrenchTitle}
            onContentChange={setFrenchContent}
            placeholder={{
              title: "Incendie au Musée National de Beyrouth",
              content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
            }}
          />
        </div>
        {/* Upload and location column */}
        <div className="flex flex-col gap-[15px]">
          <FileUpload />
          <LocationSection />
        </div>
      </div>
      <div className="mt-[15px]">
        <DistributionPanel />
        <div className="mt-4 flex justify-end">
          <Button 
            onClick={publishContent}
            disabled={isPublishing || !content}
            className="bg-[#FF0000] hover:bg-[#E60000] min-w-[200px]"
          >
            {isPublishing ? "Publishing..." : "Publish"}
          </Button>
        </div>
      </div>
    </div>
  );
}