"use client";

import { useState } from "react";
import { TeamHeader } from "./TeamHeader";
import { TeamList } from "./TeamList";
import { AddMemberDialog } from "./AddMemberDialog";
import type { TeamMember } from "@/lib/types/team";
import { TEAM_ROLES } from "@/lib/types/team";

// Dummy team members data
const INITIAL_MEMBERS: TeamMember[] = [
  {
    id: "1",
    username: "sarah_editor",
    role: TEAM_ROLES.EDITOR,
    status: "active",
    joinedAt: new Date(2024, 0, 15)
  },
  {
    id: "2",
    username: "mike_breaking",
    role: TEAM_ROLES.BREAKING_NEWS,
    status: "active",
    joinedAt: new Date(2024, 1, 1)
  },
  {
    id: "3",
    username: "alex_staff",
    role: TEAM_ROLES.STAFF,
    status: "active",
    joinedAt: new Date(2024, 1, 10)
  },
  {
    id: "4",
    username: "lisa_writer",
    role: TEAM_ROLES.STAFF,
    status: "pending",
    joinedAt: new Date()
  }
];

export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [members, setMembers] = useState<TeamMember[]>(INITIAL_MEMBERS);

  const handleAddMember = (member: TeamMember) => {
    setMembers(prev => [...prev, member]);
    setIsAddingMember(false);
  };

  const handleRemoveMember = (id: string) => {
    setMembers(prev => prev.filter(member => member.id !== id));
  };

  const handleRoleChange = (id: string, role: TeamMember['role']) => {
    setMembers(prev => prev.map(member => 
      member.id === id ? { ...member, role } : member
    ));
  };

  return (
    <div className="p-6">
      <TeamHeader onAddMember={() => setIsAddingMember(true)} />
      <TeamList
        members={members}
        onRemove={handleRemoveMember}
        onRoleChange={handleRoleChange}
      />
      <AddMemberDialog
        open={isAddingMember}
        onOpenChange={setIsAddingMember}
        onAdd={handleAddMember}
      />
    </div>
  );
}