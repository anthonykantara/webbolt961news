import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/styles";
import type { Language, DetectedLanguage } from "@/lib/types/article";

interface ContentSection {
  label: string;
  content: string;
  placeholder?: string;
}

const MOCK_ARTICLE = {
  headline: "Breaking: Major Development in Downtown Beirut",
  story: "Officials announce ambitious urban renewal project, marking a pivotal moment for the city's historic center. The $500 million initiative aims to preserve heritage while modernizing infrastructure.",
  seo: {
    title: "Beirut Urban Renewal: $500M Development Project Announced",
    description: "Major urban development project announced for downtown Beirut, focusing on heritage preservation and infrastructure modernization. Learn about the $500M initiative.",
    permalink: "beirut-urban-renewal-project-announced"
  },
  categories: ["News", "Urban Development", "Beirut"],
  tags: ["Infrastructure", "Heritage", "Downtown Beirut"]
};

interface TranslationContentProps {
  sourceLanguage: DetectedLanguage;
  targetLanguage: Language | null;
  isTranslated: boolean;
}

function ContentBlock({ label, content, isRtl = false }: { label: string; content: string; isRtl?: boolean }) {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-medium text-gray-700 mb-2">{label}</h4>
      <Textarea
        value={content}
        readOnly
        dir={isRtl ? "rtl" : "ltr"}
        className={cn(
          "resize-none",
          isRtl && "text-right"
        )}
      />
    </div>
  );
}

export function TranslationContent({
  sourceLanguage,
  targetLanguage,
  isTranslated
}: TranslationContentProps) {
  const getTranslatedContent = () => {
    if (!isTranslated || !targetLanguage) return null;
    
    if (targetLanguage.code === "ar") {
      return {
        headline: "عاجل: تطور كبير في وسط بيروت",
        story: "أعلن المسؤولون عن مشروع طموح لتجديد المناطق الحضرية، مما يمثل لحظة تحول للمركز التاريخي للمدينة. تهدف المبادرة البالغة 500 مليون دولار إلى الحفاظ على التراث مع تحديث البنية التحتية.",
        seoTitle: "تجديد وسط بيروت: الإعلان عن مشروع تطوير بقيمة 500 مليون دولار",
        seoDescription: "تم الإعلان عن مشروع تطوير حضري كبير لوسط بيروت، يركز على الحفاظ على التراث وتحديث البنية التحتية. تعرف على مبادرة الـ 500 مليون دولار.",
        permalink: "مشروع-تجديد-وسط-بيروت",
        categories: ["أخبار", "التطوير الحضري", "بيروت"],
        tags: ["البنية التحتية", "التراث", "وسط بيروت"]
      };
    }
    
    return {
      headline: "Breaking: Développement majeur au centre-ville de Beyrouth",
      story: "Les responsables annoncent un projet ambitieux de renouvellement urbain, marquant un moment décisif pour le centre historique de la ville. L'initiative de 500 millions de dollars vise à préserver le patrimoine tout en modernisant les infrastructures.",
      seoTitle: "Renouvellement urbain de Beyrouth : Projet de développement de 500M$ annoncé",
      seoDescription: "Important projet de développement urbain annoncé pour le centre-ville de Beyrouth, axé sur la préservation du patrimoine et la modernisation des infrastructures. Découvrez l'initiative de 500M$.",
      permalink: "projet-renouvellement-urbain-beyrouth-annonce",
      categories: ["Actualités", "Développement urbain", "Beyrouth"],
      tags: ["Infrastructure", "Patrimoine", "Centre-ville de Beyrouth"]
    };
  };

  return (
    <div className="flex-1 flex">
      {/* Target text panel */}
      <div className="flex-1 border-r border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-sm font-medium">
            {targetLanguage?.name || "Select a language"}
          </h3>
        </div>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="p-4">
            {targetLanguage ? (
              <div className="space-y-8">
                {/* Article Content */}
                <div className="space-y-6">
                  <ContentBlock
                    label="Headline"
                    content={isTranslated ? getTranslatedContent()?.headline || "" : ""}
                    isRtl={targetLanguage.direction === "rtl"}
                  />
                  <ContentBlock
                    label="Story"
                    content={isTranslated ? getTranslatedContent()?.story || "" : ""}
                    isRtl={targetLanguage.direction === "rtl"}
                  />
                </div>

                {/* SEO Content */}
                <div className="space-y-6">
                  <h3 className="text-sm font-medium text-gray-900">SEO</h3>
                  <ContentBlock
                    label="Title"
                    content={isTranslated ? getTranslatedContent()?.seoTitle || "" : ""}
                    isRtl={targetLanguage.direction === "rtl"}
                  />
                  <ContentBlock
                    label="Description"
                    content={isTranslated ? getTranslatedContent()?.seoDescription || "" : ""}
                    isRtl={targetLanguage.direction === "rtl"}
                  />
                  <ContentBlock
                    label="Permalink"
                    content={isTranslated ? getTranslatedContent()?.permalink || "" : ""}
                    isRtl={targetLanguage.direction === "rtl"}
                  />
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select a target language to view translation
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Source text panel */}
      <div className="flex-1">
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-sm font-medium">{sourceLanguage.name}</h3>
        </div>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="p-4">
            <div className="space-y-8">
              {/* Article Content */}
              <div className="space-y-6">
                <ContentBlock
                  label="Headline"
                  content={MOCK_ARTICLE.headline}
                />
                <ContentBlock
                  label="Story"
                  content={MOCK_ARTICLE.story}
                />
              </div>

              {/* SEO Content */}
              <div className="space-y-6">
                <h3 className="text-sm font-medium text-gray-900">SEO</h3>
                <ContentBlock
                  label="Title"
                  content={MOCK_ARTICLE.seo.title}
                />
                <ContentBlock
                  label="Description"
                  content={MOCK_ARTICLE.seo.description}
                />
                <ContentBlock
                  label="Permalink"
                  content={MOCK_ARTICLE.seo.permalink}
                />
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}