import { Metadata } from "next";
import { CmykPageClient } from "@/components/cmyk-page-client";

// Static metadata - no params access needed
export const metadata: Metadata = {
  title: "CMYK to Pantone & RGB Converter",
  description:
    "Convert CMYK colors to their closest Pantone matches and RGB equivalents. Online CMYK color conversion tool.",
  openGraph: {
    title: "CMYK to Pantone & RGB Converter",
    description:
      "Convert CMYK colors to their closest Pantone matches and RGB equivalents.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMYK to Pantone & RGB Converter",
    description:
      "Convert CMYK colors to their closest Pantone matches and RGB equivalents.",
  },
};

// Make the page component async and pass no props to the client component
export default async function CMYKPage() {
  // No params handling at all in the server component
  // Let the client component handle all parameter extraction

  return <CmykPageClient />;
}
