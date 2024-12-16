"use client";

import { formatNumber, formatPercentage } from "../utils/formatting";
import type { UserTypes } from "../utils/types";

interface UserTypeBreakdownProps {
  userTypes: UserTypes;
}

export function UserTypeBreakdown({ userTypes }: UserTypeBreakdownProps) {
  const total = userTypes.registered + userTypes.visitors;

  return (
    <div className="space-y-2 pt-2 border-t">
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Registered Users</span>
        <div className="text-right">
          <span>{formatNumber(userTypes.registered)}</span>
          <span className="ml-2 text-gray-400">
            ({formatPercentage(userTypes.registered, total)})
          </span>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Visitors</span>
        <div className="text-right">
          <span>{formatNumber(userTypes.visitors)}</span>
          <span className="ml-2 text-gray-400">
            ({formatPercentage(userTypes.visitors, total)})
          </span>
        </div>
      </div>
      {userTypes.newRegistrations && (
        <div className="flex justify-between text-sm text-green-600">
          <span>New Registrations</span>
          <span>+{userTypes.newRegistrations}</span>
        </div>
      )}
    </div>
  );
}