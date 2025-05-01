import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
  title:
    "About Pantone Colors: The Complete Guide to Pantone Matching System (PMS)",
  description:
    "Learn everything about Pantone colors, the Pantone Matching System (PMS), and how designers use Pantone standards for color accuracy across print and digital media.",
  keywords:
    "Pantone, PMS, Pantone Matching System, color standards, CMYK to Pantone, Pantone colors guide, color matching, graphic design colors",
  alternates: {
    canonical: "/about-pantone",
  },
  openGraph: {
    title:
      "About Pantone Colors: Complete Guide to the Pantone Matching System",
    description:
      "Learn about the Pantone color system, how it works, its history, and why it is essential for designers and brands worldwide.",
    type: "article",
    url: "/about-pantone",
    publishedTime: "2023-08-01T00:00:00Z",
    modifiedTime: new Date().toISOString(),
    authors: ["Color Experts Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pantone Colors: The Complete Guide to PMS",
    description:
      "Learn about the Pantone color system, how it works, its history, and why it is essential for designers and brands worldwide.",
  },
};

export default function AboutPantonePage() {
  // Get current year for copyright/date references
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb navigation */}
        <div className="bg-muted py-2">
          <div className="container max-w-5xl mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>About Pantone</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Pantone Colors
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              The complete guide to understanding the Pantone Matching System
              and its importance in design and color reproduction.
            </p>
          </div>
        </section>

        {/* Main content */}
        <div className="container max-w-5xl mx-auto px-4 py-12">
          <article className="prose prose-lg max-w-none">
            <section>
              <h2 className="text-3xl font-bold mb-6">
                What is the Pantone Matching System (PMS)?
              </h2>
              <p>
                The Pantone Matching System (PMS) is a standardized color
                reproduction system developed by Pantone Inc. in 1963. It allows
                designers, brands, and manufacturers to ensure color consistency
                across different materials and production processes, regardless
                of the equipment used.
              </p>

              <p>
                Unlike CMYK colors (Cyan, Magenta, Yellow, and Key/Black) which
                are created by mixing four ink colors, Pantone colors are
                pre-mixed inks created according to specific formulas. This
                makes Pantone colors more precise and consistent, especially for
                reproducing colors that are difficult to achieve with CMYK, such
                as metallics, fluorescents, and certain vibrant hues.
              </p>

              <div className="my-8 p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Key Facts About Pantone
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Founded in 1963 by Lawrence Herbert</li>
                  <li>Headquartered in Carlstadt, New Jersey</li>
                  <li>Features over 2,000 standardized colors</li>
                  <li>
                    Used in industries including fashion, product design,
                    graphic arts, and manufacturing
                  </li>
                  <li>Announces a "Color of the Year" annually since 2000</li>
                  <li>
                    Was acquired by X-Rite in 2007, which is now part of Danaher
                    Corporation
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold mb-6">
                How Pantone Colors Work
              </h2>

              <p>
                Pantone colors are identified by a specific numbering system.
                For example, "Pantone 185 C" refers to a specific red color,
                where:
              </p>
              <ul className="list-disc pl-6 my-4">
                <li>The number (185) identifies the specific color</li>
                <li>
                  The letter suffix indicates the material or substrate (C =
                  Coated paper, U = Uncoated paper, etc.)
                </li>
              </ul>

              <p>
                Designers use Pantone color guides or digital equivalents to
                select colors. These guides contain thousands of standardized
                colors with their corresponding identification numbers. Once a
                Pantone color is chosen, its formula specifies exactly how to
                mix the ink to reproduce that color accurately.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Converting Between Color Systems
              </h3>

              <p>
                While Pantone colors are precise, they often need to be
                converted to other color systems like CMYK for standard printing
                or RGB for digital displays. However, these conversions are
                approximations and may not perfectly match the original Pantone
                color.
              </p>

              <div className="my-6 p-5 border border-blue-200 rounded-lg bg-blue-50 text-blue-800">
                <h4 className="font-bold mb-2">
                  Why use our CMYK to Pantone converter?
                </h4>
                <p>
                  Finding the closest Pantone match for a CMYK color can be
                  challenging. Our{" "}
                  <Link
                    href="/"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    CMYK to Pantone converter
                  </Link>{" "}
                  simplifies this process by algorithmically identifying the
                  Pantone colors that most closely match your CMYK values,
                  helping designers bridge the gap between different color
                  systems.
                </p>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold mb-6">
                Why Pantone Colors Matter in Design
              </h2>

              <p>
                Pantone colors have become the industry standard for several
                important reasons:
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                1. Brand Consistency
              </h3>
              <p>
                Major brands rely on consistent color reproduction across all
                materials. Think of Coca-Cola red, Tiffany blue, or McDonald's
                golden arches – these colors are often specified as Pantone
                colors to ensure they look exactly the same everywhere.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                2. Accurate Color Communication
              </h3>
              <p>
                Pantone provides a universal "color language" that works across
                industries and international borders. A designer in Tokyo can
                specify "Pantone 300 C" and a printer in London will know
                exactly which blue to use.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                3. Special Color Effects
              </h3>
              <p>
                Pantone offers specialty inks like metallics, neons, and pastels
                that cannot be accurately reproduced with CMYK printing. These
                allow for creative effects and enhanced visual impact in design
                projects.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                4. Color Forecasting
              </h3>
              <p>
                Pantone's Color of the Year and seasonal color trend forecasts
                influence design, fashion, and consumer products across the
                globe. The {currentYear} Color of the Year serves as a color
                trend indicator for design across many industries.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold mb-6">
                Pantone Color Books and Resources
              </h2>

              <p>
                Pantone offers various tools for designers and color
                professionals:
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Pantone Guides</h3>
              <ul className="list-disc pl-6 my-4">
                <li>
                  <strong>Formula Guide</strong> – Contains solid Pantone colors
                  with their CMYK equivalents
                </li>
                <li>
                  <strong>Color Bridge</strong> – Shows Pantone spot colors
                  alongside their CMYK, RGB, and HTML equivalents
                </li>
                <li>
                  <strong>Metallics Guide</strong> – Features metallic Pantone
                  colors
                </li>
                <li>
                  <strong>Pastels & Neons Guide</strong> – Contains pastel and
                  neon Pantone colors
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Digital Solutions
              </h3>
              <p>
                Pantone also offers digital tools like Pantone Connect, which
                integrates with design software like Adobe Creative Cloud to
                provide access to Pantone color libraries and conversion tools.
              </p>

              <div className="my-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Did You Know?</h3>
                <p>
                  Pantone's physical color guides need to be replaced
                  approximately every 12-18 months because the inks can fade or
                  yellow over time, affecting color accuracy.
                </p>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold mb-6">
                Converting CMYK to Pantone
              </h2>

              <p>
                Finding the right Pantone match for an existing CMYK color can
                be challenging. Here's why:
              </p>

              <ul className="list-disc pl-6 my-4">
                <li>CMYK has a smaller color gamut than Pantone</li>
                <li>
                  Some vibrant Pantone colors cannot be reproduced in CMYK
                </li>
                <li>
                  The visual perception of colors can vary based on lighting,
                  substrate, and personal factors
                </li>
              </ul>

              <p>
                Our{" "}
                <Link
                  href="/"
                  className="text-blue-600 hover:underline font-medium"
                >
                  CMYK to Pantone converter tool
                </Link>{" "}
                uses advanced color matching algorithms to help you find the
                closest Pantone equivalents to your CMYK values, making the
                conversion process much simpler and more accurate.
              </p>

              <div className="my-8 flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow hover:bg-primary/90"
                >
                  Try Our CMYK to Pantone Converter
                </Link>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked Questions About Pantone
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    How many Pantone colors are there?
                  </h3>
                  <p>
                    There are over 2,000 colors in the Pantone Matching System,
                    with new colors added regularly. The total number varies
                    across different Pantone guides and specialized collections.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Are Pantone colors more expensive to print?
                  </h3>
                  <p>
                    Yes, printing with Pantone colors (also called spot colors)
                    typically costs more than standard CMYK printing because
                    they require special pre-mixed inks and additional printing
                    plates.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Can all Pantone colors be converted to CMYK?
                  </h3>
                  <p>
                    Not perfectly. Many Pantone colors, especially vibrant
                    oranges, blues, and greens, fall outside the CMYK color
                    gamut and can only be approximated in CMYK, resulting in
                    less vibrant reproductions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">
                    How do I know which Pantone color to use?
                  </h3>
                  <p>
                    Designers typically use physical Pantone color guides to
                    select colors under proper lighting conditions. Digital
                    representations should be used as references only, as screen
                    colors can vary significantly from printed results.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">
                    What is Pantone Color of the Year?
                  </h3>
                  <p>
                    Since 2000, Pantone has selected a "Color of the Year" that
                    reflects design trends, cultural moods, and social
                    movements. This color often influences product design,
                    fashion, and home décor in the following year.
                  </p>
                </div>
              </div>
            </section>
          </article>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Convert Your CMYK Colors to Pantone?
            </h2>
            <p className="mb-6">
              Use our free online tool to find the closest Pantone matches for
              your CMYK color values.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90"
            >
              Try the CMYK to Pantone Converter
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
