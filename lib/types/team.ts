export type TeamRole = 'editor' | 'breaking-news' | 'staff';

export interface TeamMember {
  id: string;
  username: string;
  role: TeamRole;
  status: 'active' | 'pending';
  joinedAt: Date;
}

export const TEAM_ROLES = {
  EDITOR: 'editor' as const,
  BREAKING_NEWS: 'breaking-news' as const,
  STAFF: 'staff' as const,
};

export const ROLE_LABELS: Record<TeamRole, string> = {
  editor: 'Editor',
  'breaking-news': 'Breaking News',
  staff: 'Staff',
};