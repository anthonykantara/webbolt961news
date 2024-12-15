"use client";

import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils/styles";
import type { Language } from "@/lib/types/article";

interface TranslationPreviewProps {
  language: Language;
  isTranslated: boolean;
}

export function TranslationPreview({ language, isTranslated }: TranslationPreviewProps) {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Additional translation fields */}
        <div className="space-y-6">
          <Card className="p-4">
            <h4 className="text-sm font-medium mb-3">SEO Translation</h4>
            <div className="space-y-4">
              <Textarea
                value={isTranslated ? "تطور كبير في وسط بيروت: مشروع تجديد حضري بقيمة 500 مليون دولار" : ""}
                placeholder="SEO Title translation..."
                dir={language.direction}
                className={cn(
                  "resize-none",
                  language.direction === "rtl" && "text-right"
                )}
              />
              <Textarea
                value={isTranslated ? "أعلن المسؤولون عن مشروع طموح لتجديد المناطق الحضرية في وسط بيروت، مما يمثل لحظة تحول للمركز التاريخي للمدينة..." : ""}
                placeholder="SEO Description translation..."
                dir={language.direction}
                className={cn(
                  "resize-none",
                  language.direction === "rtl" && "text-right"
                )}
              />
            </div>
          </Card>

          <Card className="p-4">
            <h4 className="text-sm font-medium mb-3">Section & Topics</h4>
            <div className="space-y-2">
              <Textarea
                value={isTranslated ? "الأخبار العاجلة" : ""}
                placeholder="Section translation..."
                dir={language.direction}
                className={cn(
                  "resize-none",
                  language.direction === "rtl" && "text-right"
                )}
              />
              <Textarea
                value={isTranslated ? "تطوير حضري، وسط بيروت، مشاريع تنموية" : ""}
                placeholder="Topics translation..."
                dir={language.direction}
                className={cn(
                  "resize-none",
                  language.direction === "rtl" && "text-right"
                )}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}