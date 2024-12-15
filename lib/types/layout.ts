import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  subItems?: NavigationSubItem[];
}

export interface NavigationSubItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface UserProfile {
  name: string;
  role: string;
  imageUrl: string;
}