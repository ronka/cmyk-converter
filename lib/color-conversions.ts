import { CMYK, RGB } from "./types";

// Convert CMYK to RGB
export function cmykToRgb(cmyk: CMYK): RGB {
  // Normalize CMYK values to 0-1 range
  const c = cmyk.c / 100;
  const m = cmyk.m / 100;
  const y = cmyk.y / 100;
  const k = cmyk.k / 100;
  
  // Calculate RGB values
  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));
  
  return { r, g, b };
}

// Convert RGB to CMYK
export function rgbToCmyk(rgb: RGB): CMYK {
  // Normalize RGB values to 0-1 range
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  
  // Calculate K (black)
  const k = 1 - Math.max(r, g, b);
  
  // Handle pure black
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }
  
  // Calculate C, M, Y
  const c = Math.round(((1 - r - k) / (1 - k)) * 100);
  const m = Math.round(((1 - g - k) / (1 - k)) * 100);
  const y = Math.round(((1 - b - k) / (1 - k)) * 100);
  const kPercent = Math.round(k * 100);
  
  return { c, m, y, k: kPercent };
}

// Convert RGB to HEX
export function rgbToHex(rgb: RGB): string {
  const componentToHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  
  return `#${componentToHex(rgb.r)}${componentToHex(rgb.g)}${componentToHex(rgb.b)}`;
}

// Calculate color distance between two RGB colors (Euclidean distance)
export function colorDistance(rgb1: RGB, rgb2: RGB): number {
  return Math.sqrt(
    Math.pow(rgb2.r - rgb1.r, 2) +
    Math.pow(rgb2.g - rgb1.g, 2) +
    Math.pow(rgb2.b - rgb1.b, 2)
  );
}

// Calculate similarity percentage between two RGB colors
export function calculateSimilarity(rgb1: RGB, rgb2: RGB): number {
  const maxDistance = Math.sqrt(3 * Math.pow(255, 2)); // Maximum possible distance
  const distance = colorDistance(rgb1, rgb2);
  return 100 - (distance / maxDistance) * 100;
}