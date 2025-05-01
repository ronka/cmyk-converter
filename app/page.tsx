"use client";

import { Header } from "@/components/header";
import { ColorConverter } from "@/components/color-converter";
import { Footer } from "@/components/footer";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  
  const initialColor = {
    c: Math.min(100, Math.max(0, parseInt(searchParams.get('c') || '0', 10))),
    m: Math.min(100, Math.max(0, parseInt(searchParams.get('m') || '0', 10))),
    y: Math.min(100, Math.max(0, parseInt(searchParams.get('y') || '0', 10))),
    k: Math.min(100, Math.max(0, parseInt(searchParams.get('k') || '0', 10))),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-5xl mx-auto px-4 py-8">
        <ColorConverter initialColor={initialColor} />
      </main>
      <Footer />
    </div>
  );
}