// Navigation styles
export const NAVIGATION_STYLES = {
  base: "w-full flex items-center py-2 px-4 text-[18px] font-semibold relative transition-colors duration-200",
  active: "text-[#FF0000] bg-red-50",
  inactive: "text-[#0E121B] hover:bg-gray-50",
  icon: {
    wrapper: "ml-[19px] mr-[19px] flex items-center justify-center",
    base: "h-5 w-5 transition-colors duration-200",
    active: "text-[#FF0000]",
    default: "text-[#8A8A8E]"
  },
  highlight: "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#FF0000] before:rounded-r"
} as const;