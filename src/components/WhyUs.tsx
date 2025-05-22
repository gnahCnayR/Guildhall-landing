'use client';

import { motion } from 'framer-motion';

const WhyUs = () => {
  const whyusItems = [
    {
      icon: "🧭",
      tag: "More than just a to-do list",
      desc: "Guildhall turns your personal growth into an adventure, complete with quests, XP, and friends to support you along the way."
    },
    {
      icon: "🛡️",
      tag: "Guilds > Daily Streaks",
      desc: "Your consistency contributes to your team. Build momentum together, or rally a party to help you get back on track."
    },
    {
      icon: "🎮",
      tag: "Work sessions that feel like play",
      desc: "Drop into deep work mode at your virtual desk. Your guild earns quest points while you focus."
    },
    {
      icon: "🤖",
      tag: "AI-powered quest board",
      desc: "Our AI receptionist assigns difficulty levels and rewards real progress—not just box-checking."
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full pt-20 pb-24 px-6 min-h-[80vh]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/fantasy-library.png')`
      }}
    >
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl font-bold mb-8"
        >
            Why Choose Guildhall?
        </motion.h1>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {whyusItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start text-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl mb-4">
              {item.icon}
            </div>
            <h2 className="text-xl font-bold mb-2 text-white">{item.tag}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
