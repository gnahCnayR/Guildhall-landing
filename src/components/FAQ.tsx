"use client";  

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQItem from './FAQItem';

const FAQ = () => {
  const faqItems = [
    {
      question: "What is GuildHall?",
      answer: "GuildHall is a gamified productivity app that transforms your tasks into RPG-style quests. Complete quests to earn XP, unlock achievements, and level up your character while staying organized and productive."
    },
    {
      question: "How does task ranking work?",
      answer: "When you create a quest (task), our AI analyzes the description and assigns it a rank and XP value based on difficulty, complexity, and importance. Ranks range from Cooper (easiest) to Adamantite (most challenging)."
    },
    {
      question: "Does GuildHall integrate with other productivity tools?",
      answer: "GuildHall currently integrates with your device's calendar for due dates and reminders. We're actively working on integrations with popular tools like Notion, Trello, and Google Tasks to make your experience even more seamless."
    },
    {
      question: "Is there a subscription fee?",
      answer: "GuildHall is completely free to use! Users can access all features without any subscription fees. We believe in providing a valuable experience without financial barriers. Any future premium features will be optional and not required for core functionality."
    }
  ];

  return (
    <div className="flex flex-col items-center w-full pt-9 pb-16 px-7">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold mb-8"
      >
        Frequently Asked Questions
      </motion.h1>

      <motion.div 
        className="w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
          >
            <FAQItem 
              question={item.question}
              answer={item.answer}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;