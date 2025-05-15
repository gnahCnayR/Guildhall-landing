'use client'

import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: "Level Up Through Real-World Progress",
      description: "Every task you complete earns XP and Quest Points. Whether it's writing, coding, or working out, turn your personal heroics into a grand.",
      image: "/assets/fantasy-background.png"
    },
    {
      title: "Build and Belong to Powerful Guilds",
      description: "Join forces with like-minded adventurers. Contribute time, complete guildwide quests, and upgrade your shared guild hall together.",
      image: "/assets/fantasy-background.png"
    },
    {
      title: "Enter Focus Mode at a Virtual Desk",
      description: "Tap to sit at your desk and trigger a focus session. While you work, your avatar stays locked in, your guild earns points, and distractions fade away.",
      image: "/assets/fantasy-background.png"
    }
  ];

  return (
    <section className="w-full min-h-svh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-30">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Features
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {/* Large feature box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-black text-2xl font-semibold mb-4">{features[0].title}</h3>
                <p className="text-gray-600 leading-relaxed">{features[0].description}</p>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={features[0].image} 
                  alt={features[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Two smaller feature boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.slice(1).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-black text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                </div>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;