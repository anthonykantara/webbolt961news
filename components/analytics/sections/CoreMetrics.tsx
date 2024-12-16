"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMetrics } from "@/lib/hooks/useMetrics";
import { formatNumber, formatCurrency } from "@/lib/utils/formatting";
import type { DateRange } from "@/lib/types/dashboard";

interface CoreMetricsProps {
  dateRange: DateRange;
}

export function CoreMetrics({ dateRange }: CoreMetricsProps) {
  const { metrics } = useMetrics();

  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Views Card */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Views</h3>
            <div className={cn(
              "flex items-center text-sm",
              metrics[0].trend === "up" ? "text-green-600" : "text-red-600"
            )}>
              {metrics[0].trend === "up" ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              {metrics[0].change}%
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-semibold">{formatNumber(metrics[0].value)}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>App</span>
              <span>65%</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Web</span>
              <span>35%</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Revenue Card */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
            <div className={cn(
              "flex items-center text-sm",
              metrics[2].trend === "up" ? "text-green-600" : "text-red-600"
            )}>
              {metrics[2].trend === "up" ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              {metrics[2].change}%
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-semibold">{formatCurrency(metrics[2].value)}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Advertising</span>
              <span>45%</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Subscriptions</span>
              <span>35%</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Donations</span>
              <span>20%</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Users Card */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Users</h3>
            <div className={cn(
              "flex items-center text-sm",
              metrics[1].trend === "up" ? "text-green-600" : "text-red-600"
            )}>
              {metrics[1].trend === "up" ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              {metrics[1].change}%
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-semibold">{formatNumber(metrics[1].value)}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Registered</span>
              <span>40%</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Visitors</span>
              <span>60%</span>
            </div>
            <div className="flex justify-between text-sm text-green-600 pt-2 border-t">
              <span>New Registrations</span>
              <span>+{formatNumber(150)}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}