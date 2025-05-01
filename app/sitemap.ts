import type { MetadataRoute } from "next";

const BASE_URL = "https://cmykcolorconverter.com";

// Include a selection of common and useful CMYK combinations
function generateCmykColorUrls(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const today = new Date();

  // Common colors and their CMYK values
  const commonColors = [
    { name: "Black", c: 0, m: 0, y: 0, k: 100 },
    { name: "White", c: 0, m: 0, y: 0, k: 0 },
    { name: "Red", c: 0, m: 100, y: 100, k: 0 },
    { name: "Green", c: 100, m: 0, y: 100, k: 0 },
    { name: "Blue", c: 100, m: 100, y: 0, k: 0 },
    { name: "Yellow", c: 0, m: 0, y: 100, k: 0 },
    { name: "Magenta", c: 0, m: 100, y: 0, k: 0 },
    { name: "Cyan", c: 100, m: 0, y: 0, k: 0 },
    { name: "Orange", c: 0, m: 50, y: 100, k: 0 },
    { name: "Purple", c: 50, m: 100, y: 0, k: 0 },
    { name: "Brown", c: 30, m: 70, y: 100, k: 30 },
    { name: "Light Gray", c: 0, m: 0, y: 0, k: 20 },
    { name: "Medium Gray", c: 0, m: 0, y: 0, k: 50 },
    { name: "Dark Gray", c: 0, m: 0, y: 0, k: 80 },
    // Popular brand colors
    { name: "Coca Cola Red", c: 0, m: 100, y: 100, k: 0 },
    { name: "Facebook Blue", c: 97, m: 71, y: 0, k: 0 },
    { name: "Twitter Blue", c: 85, m: 35, y: 0, k: 0 },
    { name: "Instagram Purple", c: 30, m: 90, y: 0, k: 0 },
    { name: "Spotify Green", c: 75, m: 0, y: 100, k: 0 },
    { name: "UPS Brown", c: 0, m: 70, y: 100, k: 50 },
  ];

  // Add common colors as individual URLs
  commonColors.forEach((color) => {
    sitemapEntries.push({
      url: `${BASE_URL}/${color.c}/${color.m}/${color.y}/${color.k}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  // Add systematic color combinations in increments of 25%
  // This provides a grid of colors for users to discover
  // Limiting to these increments keeps the sitemap at a reasonable size
  const increments = [0, 25, 50, 75, 100];

  // Priority decreases as we add more combinations to focus crawlers on the most important pages
  increments.forEach((c) => {
    increments.forEach((m) => {
      // Only include a subset of combinations to keep sitemap size reasonable
      // Full increments would be 5^4 = 625 combinations
      if ((c + m) % 50 === 0) {
        // This pattern reduces combinations while maintaining coverage
        increments.forEach((y) => {
          if ((c + m + y) % 75 === 0) {
            increments.forEach((k) => {
              // Skip combinations already added in common colors
              if (
                !commonColors.some(
                  (color) =>
                    color.c === c &&
                    color.m === m &&
                    color.y === y &&
                    color.k === k
                )
              ) {
                sitemapEntries.push({
                  url: `${BASE_URL}/${c}/${m}/${y}/${k}`,
                  lastModified: today,
                  changeFrequency: "monthly",
                  priority: 0.5,
                });
              }
            });
          }
        });
      }
    });
  });

  return sitemapEntries;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URLs for static pages
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-pantone`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/help`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Combine static URLs with CMYK color combinations
  return [...staticUrls, ...generateCmykColorUrls()];
}
