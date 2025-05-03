"use client";

import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { ColorConverter } from "@/components/color-converter";
import { Footer } from "@/components/footer";
import { CMYK } from "@/lib/types";

// Make initialColor optional
interface CmykPageClientProps {
  initialColor?: CMYK;
}

// This component handles all client-side logic including route parameter extraction
export function CmykPageClient({ initialColor }: CmykPageClientProps = {}) {
  // Extract route parameters directly in the client component
  const params = useParams();

  // Default values
  const DEFAULT_C = 0;
  const DEFAULT_M = 0;
  const DEFAULT_Y = 0;
  const DEFAULT_K = 0;

  // Use initialColor from props if provided, otherwise parse from route params
  const cmykValues: CMYK = initialColor || {
    c: Math.min(100, Math.max(0, Number(params?.c as string) || DEFAULT_C)),
    m: Math.min(100, Math.max(0, Number(params?.m as string) || DEFAULT_M)),
    y: Math.min(100, Math.max(0, Number(params?.y as string) || DEFAULT_Y)),
    k: Math.min(100, Math.max(0, Number(params?.k as string) || DEFAULT_K)),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container max-w-5xl mx-auto px-4 py-8">
        {/* The H1 can also receive data from the prop */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          CMYK Color Converter: C{cmykValues.c}% M{cmykValues.m}% Y
          {cmykValues.y}% K{cmykValues.k}%
        </h1>
        <ColorConverter initialColor={cmykValues} />
      </main>
    </div>
  );
}
