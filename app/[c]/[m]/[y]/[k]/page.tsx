"use client";

import { Header } from "@/components/header";
import { ColorConverter } from "@/components/color-converter";
import { Footer } from "@/components/footer";
import { useParams } from "next/navigation";

export default function CMYKPage() {
  const params = useParams();
  
  const cmykValues = {
    c: Math.min(100, Math.max(0, parseInt(params.c as string, 10) || 0)),
    m: Math.min(100, Math.max(0, parseInt(params.m as string, 10) || 0)),
    y: Math.min(100, Math.max(0, parseInt(params.y as string, 10) || 0)),
    k: Math.min(100, Math.max(0, parseInt(params.k as string, 10) || 0)),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-5xl mx-auto px-4 py-8">
        <ColorConverter initialColor={cmykValues} />
      </main>
      <Footer />
    </div>
  );
}