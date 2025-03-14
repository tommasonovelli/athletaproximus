import React from "react";
import Link from "next/link";
import Image from "next/image";

// icons
import { RiArrowRightUpLine } from "react-icons/ri";

// components
import { MainNavigation } from "@/components/header/navigation";
import { MobileNavButton } from "@/components/mobile-menu/button";
import { HomeCoaching } from "@/components/coaching";
import { PricingStand } from "@/components/pricings";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// public
import Logo from "@/public/logo.png";

// constants
import {
  homeHeroLinks,
  homeTestimonial,
  homeOffers,
  homeCoaching,
  homeTeam,
} from "@/constants";

export default function Home() {
  return (
    <div className="w-full p-4">
      <div
        className="w-full h-screen bg-cover bg-top rounded-3xl flex flex-col justify-between"
        style={{
          height: "calc(100vh - 32px)",
          backgroundImage: "url(/hero.jpg)",
        }}
      >
        {/* navigation */}
        <div className="w-full px-4 py-3 lg:py-2 flex justify-between items-center">
          {/* logo */}
          <Link href="/" className="flex items-center space-x-4 pl-1">
            <Image
              src={Logo}
              alt="logo athleta proximus"
              className="w-10 sm:w-10"
            />
            <span className="text-white text-2xl hidden md:block font-light font-work">
              |
            </span>
            <span className="text-white text-xl hidden md:block font-work">
              ATHLETA PROXIMUS
            </span>
          </Link>

          {/* links */}
          <MainNavigation />

          <button className="bg-palette-1 items-center gap-x-1 py-3 px-6 rounded-2xl font-inter font-medium text-sm hover:bg-palette-2 transition-all duration-200 hidden lg:flex">
            Start Now
            <RiArrowRightUpLine className="w-6 h-6" />
          </button>

          <MobileNavButton />
        </div>

        <div className="w-full flex items-end">
          <div className="w-3/4 p-4">
            <h2 className="text-3xl mb-2 text-palette-1 font-semibold px-8">
              FUEL YOUR BODY, TRAIN YOUR MIND
            </h2>
            <h1 className="text-[128px] font-work leading-[128px] text-white pb-8 px-4 tracking-tight">
              Ready to <span className="text-palette-1">upgrade</span> <br />{" "}
              your game?
            </h1>
          </div>

          <div className="w-1/4 p-4">
            <div className="flex flex-col items-start mb-8 p-4 backdrop-blur-lg rounded-2xl">
              {homeHeroLinks.map((item, index) => {
                return (
                  <Link href={item.link} key={index}>
                    <div className="font-work flex text-white hover:text-palette-1 text-2xl px-4 py-3 w-fit transition-all duration-200 tracking-tight">
                      <p className="pr-2">{item.title}</p>
                      <RiArrowRightUpLine className="w-8 h-8 mt-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="w-full p-4 backdrop-blur-md rounded-2xl">
              <div className="w-full flex justify-between items-start">
                <h2 className="font-work text-2xl text-white tracking-tight">
                  Testimonial
                </h2>

                <Link href="/">
                  <RiArrowRightUpLine className="w-8 h-8 text-white" />
                </Link>
              </div>

              <div className="w-full px-4">
                <div className="w-full border-b my-4 border-white/30"></div>
              </div>

              <p className="font-inter text-white/75 px-4 pb-2">
                {homeTestimonial.description}
              </p>

              <p className="italic text-end text-sm text-white/75 px-4">
                {homeTestimonial.author}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div className="w-full mx-auto container py-24">
        <div className="w-full flex">
          <div className="w-1/3">
            <Link
              href="/"
              className="font-work text-3xl flex hover:text-neutral-500 transition-all duration-200 w-fit tracking-tight"
            >
              Athleta Proximus <RiArrowRightUpLine className="w-8 h-8 mt-0.5" />
            </Link>
            <h3 className="font-inter text-2xl text-neutral-400/60">
              Fitness Studio
            </h3>
          </div>
          <div className="w-2/3 flex flex-col items-end">
            <div className="w-fit">
              <h3 className="font-work text-4xl text-start w-full tracking-tight">
                Our Mission
              </h3>
              <div className="my-8 w-full border-b border-neutral-200/50"></div>
              <p className="font-inter text-2xl leading-9 bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-400/60">
                Athleta Proximus is a sports psychology and nutrition business
                dedicated to helping young athletes maximize their performance
                through mental performance coaching and sports nutrition
                education. Our mission is to bridge the gap in psychological and
                nutritional support for youth athletes in Ireland.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* why coaching is important */}
      <div className="w-full mx-auto container py-24">
        <div className="w-full pb-12">
          <h2 className="font-inter text-4xl text-neutral-400/60">
            Here's Why Coaching
          </h2>
          <h2 className="font-work text-5xl tracking-tight">
            Makes the Difference
          </h2>
        </div>
        <div className="w-full flex">
          <div className="w-1/3">
            <div
              className="h-[640px] bg-cover bg-center rounded-3xl flex justify-end items-end p-4"
              style={{
                backgroundImage: "url(/home-2.webp)",
              }}
            >
              <Link
                href="/"
                className="px-4 py-3 rounded-2xl backdrop-blur-md border border-white/10"
              >
                <h1 className="text-white flex gap-x-1">
                  Personalized Training Programs{" "}
                  <RiArrowRightUpLine className="w-6 h-6" />
                </h1>
              </Link>
            </div>
          </div>

          <div className="w-2/3">
            <HomeCoaching data={homeCoaching} />
          </div>
        </div>
      </div>

      {/* what we offer */}
      <div className="w-full mx-auto container py-24">
        <div className="w-full flex">
          <div className="w-2/3">
            <Accordion type="single" collapsible className="w-full">
              {homeOffers.map((item, index) => {
                return (
                  <AccordionItem value={index.toString()} key={index}>
                    <AccordionTrigger className="font-work text-3xl text-start w-full font-normal py-6 tracking-tight">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="font-inter text-xl leading-9 text-neutral-400/60">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <div className="w-1/3 flex flex-col items-end">
            <h3 className="font-work text-3xl flex tracking-tight">
              What we offer
            </h3>
            <h3 className="font-inter text-2xl text-neutral-400/60">
              Join us today
            </h3>
          </div>
        </div>
      </div>

      {/* our team */}
      <div className="bg-neutral-100 rounded-3xl">
        <div className="w-full mx-auto container py-24">
          <h2 className="font-work text-5xl tracking-tight">Our Team</h2>

          <div className="w-full border-b border-neural-200/60 my-8"></div>

          <div className="w-full flex gap-x-4">
            {homeTeam.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="min-w-[290px] max-w-[340px] p-1 transition-all duration-200"
                >
                  <div
                    className="w-full h-[400px] bg-cover bg-center rounded-3xl flex justify-end items-end p-4"
                    style={{
                      backgroundImage: `url(/${item.image})`,
                    }}
                  ></div>

                  <h3 className="font-work text-xl flex tracking-tight p-4 px-2 pb-0 items-center">
                    {item.name}
                  </h3>

                  <h4 className="font-inter text-sm text-neutral-400/60 p-4 px-2 pt-0">
                    {item.description}
                  </h4>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-[2000px]"></div>
    </div>
  );
}
