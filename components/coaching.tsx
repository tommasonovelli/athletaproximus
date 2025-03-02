"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// icons
import { RiArrowRightUpLine } from "react-icons/ri";

export function HomeCoaching({ data }: { data: any }) {
  const [current, setCurrent] = useState<string>(data[0].button);

  return (
    <div className="w-full pl-8">
      <div className="w-full flex justify-end gap-x-2">
        {data.map((item: any, index: number) => {
          return (
            <button
              onClick={() => setCurrent(item.button)}
              key={index}
              className={`px-4 py-2 text-sm rounded-full ${
                current === item.button
                  ? "bg-palette-1 text-black"
                  : "bg-neutral-200/60 text-neutral-400"
              } transition-all duration-200`}
            >
              {item.button}
            </button>
          );
        })}
      </div>

      <div className="flex justify-center items-center h-[460px]">
        {data.map((item: any, index: number) => {
          if (item.button === current) {
            return (
              <div className="max-w-2xl" key={index}>
                <h3 className="text-3xl font-work tracking-tight flex items-center gap-x-2">
                  {" "}
                  {item.icon} {item.button}
                </h3>
                <p className="text-neutral-400 font-inter text-xl mt-6 leading-9">{item.description}</p>
              </div>
            );
          } else {
            return;
          }
        })}
      </div>

      <div className="w-full flex justify-center">
        <Link href="/" className="bg-palette-1 items-center gap-x-1 py-3 px-6 rounded-2xl font-inter text-lg font-medium hover:bg-palette-2 transition-all duration-200 hidden lg:flex">
          Join Us Now!
          <RiArrowRightUpLine className="w-7 h-7" />
        </Link>
      </div>
    </div>
  );
}
