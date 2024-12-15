"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function LocationSection() {
  return (
    <div className="w-[397px] h-[602px] bg-white rounded-lg border border-[#E4E4E7]">
      <div className="h-[52px] flex items-center justify-center px-4">
        <div className="relative w-[365px]">
          <Input
            placeholder="National Museum of Beirut"
            className="h-[36px] pl-10 rounded-[43px] border-[#E4E4E7] text-[#71717A] placeholder:text-[#71717A]"
          />
          <Search className="w-4 h-4 text-[#71717A] absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div className="h-[538px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5775366781584!2d35.5145445!3d33.8755485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17283df0d719%3A0x1c3207c2106955a9!2sNational%20Museum%20of%20Beirut!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
          width="397"
          height="538"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>
    </div>
  );
}