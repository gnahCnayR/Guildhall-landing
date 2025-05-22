'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: "Level Up Through Real-World Progress",
    description:
      "Every task you complete earns XP and Quest Points. Whether it's writing, coding, or working out, turn your personal heroics into a grand."
  },
  {
    title: "Build and Belong to Powerful Guilds",
    description:
      "Join forces with like-minded adventurers. Contribute time, complete guildwide quests, and upgrade your shared guild hall together."
  },
  {
    title: "Enter Focus Mode at a Virtual Desk",
    description:
      "Tap to sit at your desk and trigger a focus session. While you work, your avatar stays locked in, your guild earns points, and distractions fade away."
  }
];

export default function Features() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full px-6 py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold mb-6">Features</h2>

          <div className="space-y-4">
            {features.map((feature, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-full text-left p-4 rounded-xl border transition ${
                  selected === i
                    ? 'bg-white text-black border-gray-300 hover:border-black'
                    : 'bg-black text-white border-black'
                }`}
              >
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={selected}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 mt-6 text-lg"
            >
              {features[selected].description}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/assets/quest-creation.gif"
            alt="Feature preview"
            className="max-h-[80vh] w-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}