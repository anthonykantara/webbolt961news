"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AtSign, Shield, Zap, Users } from "lucide-react";
import type { TeamMember, TeamRole } from "@/lib/types/team";
import { TEAM_ROLES, ROLE_LABELS } from "@/lib/types/team";
import { cn } from "@/lib/utils";

interface AddMemberDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (member: TeamMember) => void;
}

export function AddMemberDialog({ open, onOpenChange, onAdd }: AddMemberDialogProps) {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<TeamRole>(TEAM_ROLES.STAFF);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    onAdd({
      id: crypto.randomUUID(),
      username: username.trim(),
      role,
      status: 'pending',
      joinedAt: new Date()
    });

    setUsername("");
    setRole(TEAM_ROLES.STAFF);
  };

  const roleIcons = {
    [TEAM_ROLES.EDITOR]: Shield,
    [TEAM_ROLES.BREAKING_NEWS]: Zap,
    [TEAM_ROLES.STAFF]: Users,
  };

  const roleDescriptions = {
    [TEAM_ROLES.EDITOR]: "Full access to manage content and team members",
    [TEAM_ROLES.BREAKING_NEWS]: "Can post and manage breaking news updates",
    [TEAM_ROLES.STAFF]: "Can create and edit regular content"
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Add Team Member</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-3">
            <Label htmlFor="username" className="text-sm font-medium">
              Username
            </Label>
            <div className="relative">
              <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter 961 username"
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">Role</Label>
            <RadioGroup 
              value={role} 
              onValueChange={(value) => setRole(value as TeamRole)}
              className="grid gap-3"
            >
              {Object.entries(ROLE_LABELS).map(([value, label]) => {
                const Icon = roleIcons[value as TeamRole];
                return (
                  <div
                    key={value}
                    className={cn(
                      "flex items-start space-x-3 rounded-lg border p-4 cursor-pointer transition-colors",
                      role === value ? "border-primary bg-primary/5" : "hover:bg-gray-50"
                    )}
                    onClick={() => setRole(value as TeamRole)}
                  >
                    <RadioGroupItem value={value} id={value} className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-gray-500" />
                        <Label htmlFor={value} className="font-medium cursor-pointer">
                          {label}
                        </Label>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {roleDescriptions[value as TeamRole]}
                      </p>
                    </div>
                  </div>
                );
              })}
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
              className="bg-[#FF0000] hover:bg-[#E60000]"
              disabled={!username.trim()}
            >
              Add Member
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}