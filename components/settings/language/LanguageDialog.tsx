"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { Language } from "@/lib/types/settings";

interface LanguageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (language: Language) => void;
}

export function LanguageDialog({
  open,
  onOpenChange,
  onSubmit
}: LanguageDialogProps) {
  const [formData, setFormData] = useState<Partial<Language>>({
    direction: "ltr",
    isActive: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.code || !formData.name) return;

    onSubmit({
      code: formData.code,
      name: formData.name,
      direction: formData.direction || "ltr",
      isActive: formData.isActive ?? true
    });

    setFormData({ direction: "ltr", isActive: true });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Language</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Language Code</Label>
            <Input
              value={formData.code || ""}
              onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value }))}
              placeholder="e.g., en, fr, ar"
              className="mt-2"
            />
          </div>

          <div>
            <Label>Language Name</Label>
            <Input
              value={formData.name || ""}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="e.g., English, Français, العربية"
              className="mt-2"
            />
          </div>

          <div>
            <Label>Text Direction</Label>
            <RadioGroup
              value={formData.direction}
              onValueChange={(value) => setFormData(prev => ({ ...prev, direction: value as "ltr" | "rtl" }))}
              className="flex gap-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ltr" id="ltr" />
                <Label htmlFor="ltr">Left to Right (LTR)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rtl" id="rtl" />
                <Label htmlFor="rtl">Right to Left (RTL)</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!formData.code || !formData.name}
            >
              Add Language
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}