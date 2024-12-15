"use client";

import { TemplateButton } from './TemplateButton';

interface TemplateGridProps {
  templates: string[][];
}

export function TemplateGrid({ templates }: TemplateGridProps) {
  return (
    <div className="grid grid-cols-3 gap-2 flex-1">
      {templates.flat().map((template, index) => (
        <TemplateButton
          key={index}
          text={template}
          onClick={() => console.log(`Selected: ${template}`)}
        />
      ))}
    </div>
  );
}