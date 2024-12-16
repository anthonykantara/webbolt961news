/**
 * Format a number with thousands separators
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

/**
 * Format a number as currency
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

/**
 * Format a value as a percentage of a total
 */
export function formatPercentage(value: number, total: number): string {
  return `${Math.round((value / total) * 100)}%`;
}

export function formatMetricValue(value: number, metric: string): string {
  switch (metric) {
    case "views":
    case "average":
      return value.toLocaleString();
    case "engagement":
      return `${value.toLocaleString()} interactions`;
    case "shares":
      return `${value.toLocaleString()} shares`;
    case "speed":
      return `${value} minutes`;
    default:
      return value.toString();
  }
}

/**
 * Format a duration in seconds to HH:MM:SS
 */
export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
}