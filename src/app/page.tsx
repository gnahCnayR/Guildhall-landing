'use client'

import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import WhyUs from "@/components/WhyUs";
import dynamic from "next/dynamic"

const CastleScene = dynamic(() => import("@/components/CastleScene"), { ssr: false })

export default function Home() {
  return (
    <main className="h-full">
      <WhyUs />
      <FAQ />
      <CTA />
    </main>
  );
}
