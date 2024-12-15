export interface Template {
  id: string;
  name: string;
  content: string;
  visible: boolean;
  createdAt: Date;
  usageCount: number;
}

export interface TemplateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface TemplateSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export interface TemplateListProps {
  templates: Template[];
  onToggleVisibility: (id: string) => void;
  onDelete: (id: string) => void;
}