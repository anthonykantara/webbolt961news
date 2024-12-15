"use client";

import { TemplateButton } from './TemplateButton';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TemplateListProps {
  templates: string[];
  onTemplateSelect: (template: string) => void;
}

export function TemplateList({ templates, onTemplateSelect }: TemplateListProps) {
  return (
    <div className="flex items-center gap-2 w-[988px]">
      <div className="flex-1 grid grid-cols-6 gap-2">
        {templates.map((template, index) => (
          <TemplateButton
            key={index}
            text={template}
            onClick={() => onTemplateSelect(template)}
          />
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="flex-shrink-0 text-gray-500 hover:text-gray-700"
      >
        <MoreHorizontal className="h-5 w-5" />
      </Button>
    </div>
  );
}