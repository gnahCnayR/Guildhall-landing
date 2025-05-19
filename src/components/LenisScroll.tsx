'use client'

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 2, 
      infinite: false,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update();
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    
    requestAnimationFrame(raf);

    const onFocusChange = () => {
      if (!document.hasFocus()) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    window.addEventListener('focus', onFocusChange);
    window.addEventListener('blur', onFocusChange);

    return () => {
      if (lenisRef.current) {
        window.removeEventListener('focus', onFocusChange);
        window.removeEventListener('blur', onFocusChange);
        lenisRef.current.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}