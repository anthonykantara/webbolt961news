export interface Template {
  id: string;
  text: string;
  isVisible: boolean;
  createdAt: Date;
  usageCount: number;
}

export interface TemplateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface TemplateListProps {
  templates: Template[];
  onToggleVisibility: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface TemplateSearchProps {
  value: string;
  onChange: (value: string) => void;
}