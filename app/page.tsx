import { Metadata } from "next";
import { CmykPageClient } from "@/components/cmyk-page-client";

export const metadata: Metadata = {
  title: "CMYK to Pantone Converter | Convert CMYK Colors to Pantone Matches",
  description:
    "Free online tool to convert CMYK colors to their closest Pantone matches. Find Pantone equivalents for your CMYK values instantly.",
  openGraph: {
    title: "CMYK to Pantone Converter | Free Online Color Matching Tool",
    description:
      "Convert CMYK values to Pantone colors with our free online tool. Perfect for designers needing to match colors across different systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMYK to Pantone Converter",
    description:
      "Convert CMYK values to Pantone colors with our free online tool.",
  },
};

export default function HomePage() {
  // Provide default CMYK values for the root page
  const defaultCmykValues = {
    c: 0,
    m: 0,
    y: 0,
    k: 0,
  };

  return <CmykPageClient initialColor={defaultCmykValues} />;
}
