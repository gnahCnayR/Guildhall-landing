'use client'

import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import WhyUs from "@/components/WhyUs";
import dynamic from "next/dynamic"

const CastleScene = dynamic(() => import("@/components/CastleScene"), { ssr: false })

export default function Home() {
  return (
    <main className="h-full">
      <section id="whyus" className="relative h-screen">
        <WhyUs /> 
      </section>  
      
      <section id="faq" className="relative h-screen">
        <FAQ />
      </section>

      <section id="cta" className="relative h-screen">
        <CTA /> 
      </section>
    </main>
  );
}
