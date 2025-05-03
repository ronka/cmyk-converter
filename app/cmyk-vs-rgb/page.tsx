import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "CMYK vs. RGB: Understanding the Key Differences",
  description:
    "Explore the differences between CMYK (print) and RGB (digital) color models. Learn when to use each for optimal results in design and media.",
  keywords: [
    "cmyk vs rgb",
    "rgb vs cmyk",
    "color models",
    "print design",
    "digital design",
    "color space comparison",
    "when to use cmyk",
    "when to use rgb",
  ],
};

export default function CmykVsRgbPage() {
  return (
    <>
      <div className="bg-muted py-2">
        <div className="container max-w-5xl mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>CMYK vs. RGB</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-white py-16">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            CMYK vs. RGB: What's the Difference?
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Choosing the right color model for print and digital media.
          </p>
        </div>
      </section>

      <div className="container max-w-5xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <section>
            <p className="mb-3">
              Understanding the difference between CMYK and RGB color models is
              fundamental for anyone working with visual media, whether for
              digital screens or print production. Choosing the wrong color
              space can lead to unexpected and often disappointing results.
              Let's break down what each model is and when to use it.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">
              RGB: The Additive Model for Screens
            </h2>
            <p className="mb-3">
              RGB stands for Red, Green, and Blue. It's an{" "}
              <strong>additive</strong> color model, meaning it creates colors
              by adding different intensities of red, green, and blue light
              together. Think of your computer monitor, TV, smartphone, or
              digital camera – they all use RGB.
            </p>
            <ul className="list-disc list-inside mb-3 space-y-1">
              <li>
                <strong>How it works:</strong> Starts with black (no light) and
                adds red, green, and blue light to create a spectrum of colors.
                Combining all three at full intensity produces white.
              </li>
              <li>
                <strong>Primary Use:</strong> Digital applications – websites,
                apps, online ads, social media graphics, video, digital
                photography.
              </li>
              <li>
                <strong>Color Gamut:</strong> RGB generally has a wider color
                gamut (range of possible colors) than CMYK, allowing for
                brighter and more vibrant colors, especially intense blues and
                greens.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">
              CMYK: The Subtractive Model for Print
            </h2>
            <p className="mb-3">
              CMYK stands for Cyan, Magenta, Yellow, and Key (Black). It's a{" "}
              <strong>subtractive</strong> color model, primarily used in
              printing. It works by subtracting or absorbing wavelengths of
              light reflected from white paper.
            </p>
            <ul className="list-disc list-inside mb-3 space-y-1">
              <li>
                <strong>How it works:</strong> Starts with white paper and uses
                inks (Cyan, Magenta, Yellow, Black) to absorb certain colors. As
                more ink is added, the result gets darker. Read more about{" "}
                <Link
                  href="/what-is-cmyk"
                  className="text-blue-600 hover:underline"
                >
                  what CMYK is
                </Link>
                .
              </li>
              <li>
                <strong>Primary Use:</strong> Print materials – brochures,
                flyers, business cards, magazines, newspapers, packaging.
              </li>
              <li>
                <strong>Color Gamut:</strong> CMYK has a smaller color gamut
                compared to RGB. Some vibrant colors seen on screen (especially
                bright blues, greens, and oranges) cannot be accurately
                reproduced using standard CMYK inks.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">When to Use Which?</h2>
            <table className="w-full border-collapse border border-gray-300 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">
                    Use RGB If...
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Use CMYK If...
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Designing for websites or apps
                  </td>
                  <td className="border border-gray-300 p-2">
                    Designing for print (brochures, posters, etc.)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Creating social media graphics or online ads
                  </td>
                  <td className="border border-gray-300 p-2">
                    Creating business cards or stationery
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Working with digital photos
                  </td>
                  <td className="border border-gray-300 p-2">
                    Designing packaging
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Creating videos or animations
                  </td>
                  <td className="border border-gray-300 p-2">
                    Preparing files for professional printing presses
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mb-3">
              <strong>Key Takeaway:</strong> Design in RGB for digital projects
              and CMYK for print projects. If your design needs to work for
              both, it's generally best to start in RGB (due to the wider gamut)
              and then carefully convert a version to CMYK for printing,
              managing any color shifts during the conversion process.
            </p>
            <p>
              Need help converting between color spaces? Try our{" "}
              <a href="/" className="text-primary hover:underline font-medium">
                Color Converter Tool
              </a>
              .
            </p>
          </section>
        </article>

        <div className="mt-16 bg-muted/50 rounded-xl p-8 text-center border">
          <h2 className="text-2xl font-bold mb-4">
            Convert Your Colors Accurately!
          </h2>
          <p className="mb-6">
            Whether you need CMYK for print or RGB/Hex for web, our converter
            helps you get the right values.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Use the Color Converter
          </Link>
        </div>
      </div>
    </>
  );
}
