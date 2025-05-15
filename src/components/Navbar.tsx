'use client';

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface TabProps {
  children: React.ReactNode;
  setPosition: (position: Position) => void;
  sectionId: string;
}

interface CursorProps {
  position: Position;
}

const Tab: React.FC<TabProps> = ({ children, setPosition, sectionId }) => {
  const ref = useRef<HTMLLIElement>(null);

  const scrollToSection = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={scrollToSection}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm font-medium uppercase transition-colors hover:text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      initial={false}
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
      className="absolute z-0 h-full top-0 rounded-full bg-black"
    />
  );
};

const Navbar = () => {
  const [position, setPosition] = React.useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [activeSection, setActiveSection] = React.useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'whyus', 'features'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center px-4 py-6 z-50 bg-transparent">
      <ul
        onMouseLeave={() => {
          setPosition((prev) => ({
            ...prev,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit items-center gap-1 rounded-full bg-white/80 backdrop-blur-sm p-1"
      >
        <Tab sectionId="hero" setPosition={setPosition}>Home</Tab>
        <Tab sectionId="features" setPosition={setPosition}>Features</Tab>
        <Tab sectionId="whyus" setPosition={setPosition}>Why Us</Tab>
        <Tab sectionId="faq" setPosition={setPosition}>FAQ</Tab>
        <Tab sectionId="cta" setPosition={setPosition}>Get Started</Tab>
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

export default Navbar;