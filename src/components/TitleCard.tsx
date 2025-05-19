'use client'

import { motion } from 'framer-motion';

export default function TitleCard() {
  return (
    <section className="w-full py-48 px-6 flex flex-col items-center text-center"
     style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/fantasy-forest.png')`
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-xl md:text-3xl max-w-3xl mx-auto italic opacity-80"
      >
        At Guildhall, we believe building better habits should feel like leveling up in a game — not checking boxes.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 text-base md:text-lg max-w-xl text-muted-foreground text-gray-300"
      >
        Whether you're forging discipline, mastering a craft, or just trying to get through your quest log — we're building a world where progress feels meaningful, not mechanical.
      </motion.p>

      <div className="mt-8 h-[1px] w-16 bg-[#2d594f] opacity-50" />
    </section>
  );
}
