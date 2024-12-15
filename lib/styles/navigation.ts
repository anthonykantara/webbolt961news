export const NAVIGATION_STYLES = {
  sidebar: {
    wrapper: "w-[220px] border-r bg-white h-screen flex flex-col fixed left-0 top-0",
    logo: "px-6 py-6",
    nav: "flex-1",
    footer: "mt-auto border-t"
  },
  item: {
    base: "w-full flex items-center gap-3 px-6 py-2 text-[16px] font-medium relative transition-colors duration-200",
    active: "text-[#FF0000] bg-red-50",
    inactive: "text-[#0E121B] hover:bg-gray-50",
    highlight: "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[#FF0000] before:rounded-r"
  },
  icon: {
    wrapper: "ml-[19px] mr-[19px] flex items-center justify-center",
    base: "h-5 w-5 transition-colors duration-200",
    active: "text-[#FF0000]",
    default: "text-[#8A8A8E]"
  },
  subItem: {
    wrapper: "ml-[35px] relative before:absolute before:left-[15px] before:top-0 before:bottom-0 before:w-[1px] before:bg-[#808080]",
    base: "w-full flex items-center gap-3 px-6 py-1.5 text-[14px] font-medium transition-colors duration-200 relative",
    active: "text-[#FF0000]",
    inactive: "text-[#8A8A8E] hover:text-[#0E121B]",
    connector: "absolute left-[15px] top-1/2 -translate-y-1/2 w-3 h-[1px] bg-[#808080]"
  }
} as const;