'use client';

import FAQ from "@/components/FAQ";
import dynamic from "next/dynamic"

const CastleScene = dynamic(() => import("@/components/CastleScene"), { ssr: false })

export default function Home() {
  return (
    <main className="h-full">
      <FAQ />
    </main>
  );
}
