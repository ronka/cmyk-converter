import { CMYK, PantoneMatch, RGB } from "./types";
import { pantoneColors } from "./pantone-data";
import { cmykToRgb, calculateSimilarity } from "./color-conversions";

// Find closest Pantone colors to given CMYK color
export function cmykToPantone(cmyk: CMYK): PantoneMatch[] {
  // Convert input CMYK to RGB for comparison
  const inputRgb = cmykToRgb(cmyk);
  
  // Calculate similarity for all Pantone colors
  const matchesWithSimilarity = pantoneColors.map((pantone) => {
    const pantoneRgb = cmykToRgb(pantone.cmyk);
    const similarity = calculateSimilarity(inputRgb, pantoneRgb);
    
    return {
      ...pantone,
      rgb: pantoneRgb,
      similarity
    };
  });
  
  // Sort by similarity (highest first) and take top 5
  const topMatches = matchesWithSimilarity
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 5);
  
  return topMatches;
}