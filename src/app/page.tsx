'use client'

import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import dynamic from "next/dynamic"

const CastleScene = dynamic(() => import("@/components/CastleScene"), { ssr: false })

export default function Home() {
  return (
    <main className="h-full">
      <section id="hero">
        {/* <CastleScene /> */}
        <Hero />
      </section>

      <section id="features">
        <Features /> 
      </section>  

      <section id="whyus">
        <WhyUs /> 
      </section>  
      
      <section id="faq">
        <FAQ />
      </section>

      <section id="cta">
        <CTA /> 
      </section>
    </main>
  );
}
