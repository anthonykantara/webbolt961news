"use client";

import { TableCell } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { ContentUser } from "@/lib/types/content";

interface UsersCellProps {
  users: ContentUser[];
}

export function UsersCell({ users }: UsersCellProps) {
  return (
    <TableCell>
      <div className="flex -space-x-2">
        {users.map((user) => (
          <Tooltip key={user.id}>
            <TooltipTrigger>
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>{user.name} - {user.action}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TableCell>
  );
}