"use client";

import { useParams } from "next/navigation";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

export default function DynamicHead() {
  const params = useParams();
  const [mounted, setMounted] = useState(false);

  // Extract color values from URL params
  const c = params.c as string;
  const m = params.m as string;
  const y = params.y as string;
  const k = params.k as string;
  const pantone = params.pantone as string;
  const r = params.r as string;
  const g = params.g as string;
  const b = params.b as string;

  // Set default title and description
  let title = "CMYK Converter";
  let metaDescription =
    "Convert CMYK colors to their closest Pantone/RGB match";

  // Add CMYK values to title if available
  if (c && m && y && k) {
    title = `C:${c} M:${m} Y:${y} K:${k} - CMYK Converter`;
  }

  // Add metadata for Pantone and RGB values
  if (pantone) {
    metaDescription += ` | Pantone: ${pantone}`;
  }
  if (r && g && b) {
    metaDescription += ` | RGB: ${r},${g},${b}`;
  }

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
    </HelmetProvider>
  );
}
