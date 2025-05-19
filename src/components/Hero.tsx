'use client'

import { motion } from 'framer-motion';
import CastleScene from './CastleScene';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#0f0f0f]">
      <div className="absolute inset-1 w-full h-full">
        <CastleScene />
      </div>

      <div className="relative h-full flex flex-col items-center pt-40 px-4">
        <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-8 left-12 z-10 text-white font-tinos bold text-4xl md:text-5xl tracking-wide"
        >
        Guildhall
        </motion.div>

        {/* Credit to Hoover.dev :) */}
        <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-white text-4xl md:text-5xl lg:text-7xl font-tinos italic text-center leading-relaxed tracking-wide"
        >
            Build your{" "}
            <span className="relative inline-block">
                habits
                <svg
                viewBox="0 0 286 146"
                fill="none"
                className="absolute -left-2 -right-2 -top-2 bottom-0 h-[2.5em] w-[3.25em] translate-y-1"
                >
                <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                    duration: 2,
                    ease: "easeInOut",
                    }}
                    d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                    stroke="#8C7F93"
                    strokeWidth="3"
                />
                </svg>
            </span>
            . Slay your{" "}
            <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#dc143c" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                className="inline-block"
            >
                vices.
            </motion.span>
        </motion.h1>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/60 font-tinos text-sm mb-2">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-6 border-2 border-white/60 rounded-full"
          >
            <div className="w-1 h-1 bg-white/60 rounded-full mx-auto mt-1" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}