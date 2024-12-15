"use client";

import { TeamMemberCard } from "./TeamMemberCard";
import type { TeamMember } from "@/lib/types/team";

interface TeamListProps {
  members: TeamMember[];
  onRemove: (id: string) => void;
  onRoleChange: (id: string, role: TeamMember['role']) => void;
}

export function TeamList({ members, onRemove, onRoleChange }: TeamListProps) {
  return (
    <div className="space-y-2">
      {members.map((member) => (
        <TeamMemberCard
          key={member.id}
          member={member}
          onRemove={() => onRemove(member.id)}
          onRoleChange={(role) => onRoleChange(member.id, role)}
        />
      ))}
    </div>
  );
}