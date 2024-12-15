"use client";

import { TemplateCell } from "./TemplateCell";
import { Card } from "@/components/ui/card";

const templates = [
  ["Airstrike in Dahye", "MK heard about Beirut and Mount Lebanon", "Fire at the National Museum of Beirut"],
  ["Protests in Downtown Beirut", "Breaking: Security Incident", "Weather Alert: Heavy Storm"]
];

export function TemplateTable() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Template Messages</h3>
      <div className="grid grid-cols-3 gap-3">
        {templates.flat().map((template, index) => (
          <TemplateCell
            key={index}
            text={template}
            onClick={() => console.log(`Selected template: ${template}`)}
          />
        ))}
      </div>
    </Card>
  );
}