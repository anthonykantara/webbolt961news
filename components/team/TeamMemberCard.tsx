"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import type { TeamMember } from "@/lib/types/team";
import { TEAM_ROLES, ROLE_LABELS } from "@/lib/types/team";

interface TeamMemberCardProps {
  member: TeamMember;
  onRemove: () => void;
  onRoleChange: (role: TeamMember['role']) => void;
}

export function TeamMemberCard({ member, onRemove, onRoleChange }: TeamMemberCardProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <>
      <Card className="p-3">
        <div className="flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-gray-900">John Smith</h3>
              <span className="text-sm text-gray-500">@{member.username}</span>
              {member.status === 'pending' && (
                <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded">
                  Pending
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400">
              {member.status === 'pending' ? 
                'Awaiting response' : 
                `Joined ${formatDistanceToNow(member.joinedAt)} ago`
              }
            </p>
          </div>

          <Select
            value={member.role}
            onValueChange={onRoleChange}
          >
            <SelectTrigger className="w-[130px] h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TEAM_ROLES.EDITOR}>
                {ROLE_LABELS[TEAM_ROLES.EDITOR]}
              </SelectItem>
              <SelectItem value={TEAM_ROLES.BREAKING_NEWS}>
                {ROLE_LABELS[TEAM_ROLES.BREAKING_NEWS]}
              </SelectItem>
              <SelectItem value={TEAM_ROLES.STAFF}>
                {ROLE_LABELS[TEAM_ROLES.STAFF]}
              </SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowDeleteDialog(true)}
            className="h-8 w-8 text-gray-400 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Team Member</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove @{member.username} from the team? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={onRemove}
              className="bg-red-600 hover:bg-red-700"
            >
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}