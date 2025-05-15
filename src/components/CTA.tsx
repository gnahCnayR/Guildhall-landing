'use client'

import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div 
      className="relative flex flex-col items-center justify-center w-full pt-20 pb-24 px-6 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/fantasy-background.png')`
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center text-4xl font-bold mb-8 text-white"
      >
        Ready to Level Up Your Productivity?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative text-center text-lg text-white mb-12 max-w-2xl"
      >
        Join Guildhall today and transform your personal growth into an epic adventure!
      </motion.p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
        href="https://www.github.com/gnahCnayR/guildhall"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Started
      </motion.a>
    </div>
  );
};

export default CTA;