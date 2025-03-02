"use client";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { navItems } from "@/constants";

export function MobileNav() {
  return (
    <>
      <Accordion type="single" collapsible className="bg-white">
        {navItems.map((item, index) => (
          <AccordionItem
            className="border-none"
            value={`item-${index}`}
            key={item.href}
          >
            {item.items ? (
              <>
                <AccordionTrigger className="px-4 hover:bg-neutral-100 rounded-2xl transition-all duration-200">{item.title}</AccordionTrigger>

                <AccordionContent className="border-b border-neutral-100 mx-4">
                  <div className="flex flex-col gap-y-1">
                    {item.items.map((subItem) => (
                      <Link className="py-4 px-4 hover:bg-neutral-100 rounded-2xl transition-all duration-200" key={subItem.href} href={subItem.href}>
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </>
            ) : (
              <Link className="font-inter text-sm font-medium" href={item.href}>
                <div className="py-4 px-4 hover:bg-neutral-100 rounded-2xl transition-all duration-200">
                  {item.title}
                </div>
              </Link>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
