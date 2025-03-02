"use client";
import { useState } from "react";

// icons
import { ArrowUpRight } from "lucide-react";

// components
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "@/components/mobile-menu/navigation";

// icons
import { Menu } from "lucide-react";

export function MobileNavButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <button className="p-2 bg-white/10 backdrop-blur-md rounded-2xl">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="max-w-[340px] min-w-[280px] p-4 py-14 bg-white border-neutral-950 flex flex-col justify-between"
      >
        <MobileNav />

        <button className="bg-palette-1 justify-center items-center gap-x-1 py-4 px-6 rounded-2xl font-inter font-medium text-sm hover:bg-palette-2 transition-all duration-200 hidden lg:flex">
          Start Now
          <ArrowUpRight />
        </button>
      </SheetContent>
    </Sheet>
  );
}
