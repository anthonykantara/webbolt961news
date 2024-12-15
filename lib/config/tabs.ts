export const SOURCE_MONITORING_TABS = [
  { id: "user-tips", label: "User Tips" },
  { id: "websites", label: "Websites" },
  { id: "x", label: "X" },
  { id: "telegram", label: "Telegram" },
  { id: "whatsapp", label: "WhatsApp" }
] as const;

export type SourceMonitoringTabId = typeof SOURCE_MONITORING_TABS[number]["id"];