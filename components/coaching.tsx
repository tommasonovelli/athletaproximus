"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

interface CoachingItem {
  button: string;
  icon: React.ReactNode;
  description: string;
}

export function HomeCoaching({ data }: { data: CoachingItem[] }) {
  const [current, setCurrent] = useState<string>(data?.[0]?.button || "");
  const [index, setIndex] = useState<number>(0);

  // Cambia automaticamente ogni 10 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 6000);
    return () => clearInterval(interval); // Pulisce l'intervallo al dismount
  }, [data.length]);

  // Aggiorna il pulsante attivo quando l'index cambia
  useEffect(() => {
    setCurrent(data[index].button);
  }, [index, data]);

  return (
    <div className="w-full pl-8">
      {/* Pulsanti di selezione */}
      <div className="w-full flex justify-end gap-x-2">
        {data.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(item.button)}
            className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
              current === item.button
                ? "bg-palette-1 text-black"
                : "bg-neutral-200/60 text-neutral-400"
            }`}
          >
            {item.button}
          </button>
        ))}
      </div>

      {/* Contenuto con animazione */}
      <div className="flex justify-center items-center h-[460px] relative">
        <AnimatePresence mode="wait">
          {data.map((item, idx) =>
            item.button === current ? (
              <motion.div
                key={item.button} // Chiave dinamica per l'animazione
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute max-w-2xl"
              >
                <h3 className="text-3xl font-work tracking-tight flex items-center gap-x-2">
                  {item.icon} {item.button}
                </h3>
                <p className="text-neutral-400 font-inter text-xl mt-6 leading-9">
                  {item.description}
                </p>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Bottone di Join */}
      <div className="w-full flex justify-center">
        <Link
          href="/"
          className="bg-palette-1 items-center gap-x-1 py-3 px-6 rounded-2xl font-inter text-lg font-medium hover:bg-palette-2 transition-all duration-200 hidden lg:flex"
        >
          Join Us Now!
          <RiArrowRightUpLine className="w-7 h-7" />
        </Link>
      </div>
    </div>
  );
}