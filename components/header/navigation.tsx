"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// public
import LogoBlack from "@/public/logo-black.png";

import { navServices } from "@/constants";

export function MainNavigation() {
  return (
    <NavigationMenu className="backdrop-blur-md px-4 py-2 rounded-2xl font-inter hidden lg:flex">
      <NavigationMenuList>
        {/* home */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* services */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {navServices.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* pricing */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* research */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Research
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* our team */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Team</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-b from-palette-2/80 to-palette-2 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src={LogoBlack}
                      alt="logo athleta proximus"
                      className="w-10"
                    />
                    <div className="mb-1 mt-1 text-lg font-medium">
                      Our Team
                    </div>
                    <p className="text-sm leading-tight text-black font-light">
                      Fuel your body, train your mind.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <ListItem href="/docs" title="Ethan">
                Mental Performance Coach <br /> Founder
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Serena">
                Sports Nutritionist <br /> Co-Founder
              </ListItem>
              <ListItem href="/docs/installation" title="Giada">
                Mental Performance Coach
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* home */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none font-work">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-black font-light">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
