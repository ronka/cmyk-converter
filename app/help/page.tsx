import { Metadata } from "next";
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
  title: "Help Guide | CMYK to Pantone Converter",
  description:
    "Learn how to use our CMYK to Pantone converter tool. Find answers to frequently asked questions, usage instructions, and troubleshooting tips.",
  keywords:
    "CMYK converter help, Pantone matching guide, color conversion help, how to convert CMYK to Pantone, color matching FAQ",
  alternates: {
    canonical: "/help",
  },
  openGraph: {
    title: "Help Guide | CMYK to Pantone Converter",
    description:
      "Complete guide on using our CMYK to Pantone color converter tool. Get answers to common questions and learn conversion tips.",
    type: "website",
    url: "/help",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Guide | CMYK to Pantone Converter",
    description:
      "Complete guide on using our CMYK to Pantone color converter tool.",
  },
};

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
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
                  <BreadcrumbPage>Help</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero section */}
        <section className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-16">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Learn how to use our CMYK to Pantone converter and get answers to
              frequently asked questions.
            </p>
          </div>
        </section>

        {/* Main content */}
        <div className="container max-w-5xl mx-auto px-4 py-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Getting Started</h2>

              <div className="space-y-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Quick Guide</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      Enter your CMYK values using the sliders (values range
                      from 0-100%).
                    </li>
                    <li>
                      View the color preview and automatically generated RGB
                      values.
                    </li>
                    <li>
                      Check the "Closest Pantone Matches" tab to see the Pantone
                      colors that most closely match your CMYK values.
                    </li>
                    <li>
                      Click the "Save to History" button to keep track of colors
                      you've converted.
                    </li>
                    <li>
                      Use the "Color History" tab to revisit previously saved
                      colors.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Using the CMYK Sliders
                  </h3>
                  <p>
                    Our tool features interactive sliders for each CMYK
                    component:
                  </p>
                  <ul className="list-disc pl-6 my-4">
                    <li>
                      <strong>C (Cyan)</strong>: Adjusts the amount of cyan
                      (0-100%)
                    </li>
                    <li>
                      <strong>M (Magenta)</strong>: Adjusts the amount of
                      magenta (0-100%)
                    </li>
                    <li>
                      <strong>Y (Yellow)</strong>: Adjusts the amount of yellow
                      (0-100%)
                    </li>
                    <li>
                      <strong>K (Key/Black)</strong>: Adjusts the amount of
                      black (0-100%)
                    </li>
                  </ul>
                  <p>
                    You can also directly input specific values in the number
                    fields next to each slider for precision.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Understanding the Results
                  </h3>
                  <p>After entering CMYK values, the converter will display:</p>
                  <ul className="list-disc pl-6 my-4">
                    <li>
                      <strong>Color Preview</strong>: A visual representation of
                      your color
                    </li>
                    <li>
                      <strong>RGB Values</strong>: The equivalent RGB values for
                      digital displays
                    </li>
                    <li>
                      <strong>Pantone Matches</strong>: Closest Pantone colors
                      listed by proximity
                    </li>
                  </ul>
                  <p>
                    Each Pantone match shows the Pantone name/number and a
                    percentage indicating how close it is to your CMYK color.
                    The higher the percentage, the closer the match.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">URL Sharing</h2>
              <p>
                You can share specific colors by using the URL. The format is:
              </p>
              <div className="bg-muted p-3 rounded-md my-4 font-mono text-sm border border-border">
                https://cmykcolorconverter.com/C/M/Y/K
              </div>
              <p>
                For example, to share a color with C:50%, M:30%, Y:80%, K:10%,
                use:
              </p>
              <div className="bg-muted p-3 rounded-md my-4 font-mono text-sm border border-border">
                https://cmykcolorconverter.com/50/30/80/10
              </div>
              <p>
                The converter will automatically load with these values when
                someone visits the link.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Why do I get different Pantone matches for the same color?
                  </h3>
                  <p>
                    Pantone matching is based on visual proximity, and multiple
                    Pantone colors might appear similar to a specific CMYK
                    value. Our algorithm ranks matches based on calculated color
                    distance, but color perception is subjective and can vary
                    based on lighting, screen calibration, and individual
                    perception.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Are these Pantone matches exact?
                  </h3>
                  <p>
                    No. The matches provided are approximations. For critical
                    color matching, we recommend consulting official Pantone
                    color guides or working with a professional print provider
                    who can provide physical color samples.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Why can't I find an exact Pantone match for my CMYK color?
                  </h3>
                  <p>
                    CMYK and Pantone are different color systems with different
                    gamuts (ranges of reproducible colors). Some CMYK colors
                    simply don't have exact Pantone equivalents, especially for
                    very vibrant colors. Our tool provides the closest possible
                    matches based on color distance calculations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Can I use these conversions for professional printing?
                  </h3>
                  <p>
                    This tool is designed as a helpful reference, but for
                    professional printing projects where color accuracy is
                    critical, we recommend:
                  </p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Working with a professional printer</li>
                    <li>Using physical Pantone color guides</li>
                    <li>Requesting printed proofs</li>
                    <li>
                      Considering the specific substrate (paper type, finish,
                      etc.)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    How many colors can I save in my history?
                  </h3>
                  <p>
                    The tool currently saves your 10 most recent colors in the
                    Color History tab. These are stored in your browser's local
                    storage, so they'll remain available until you clear your
                    browser data.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Color display looks different from what I expected
                  </h3>
                  <p>
                    Screen calibration, browser differences, and display
                    settings can affect how colors appear. For consistent
                    results:
                  </p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Use a color-calibrated monitor when possible</li>
                    <li>
                      Ensure your screen brightness is at a moderate setting
                    </li>
                    <li>
                      Be aware that different screens may show the same color
                      differently
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    No Pantone matches are showing up
                  </h3>
                  <p>If no Pantone matches appear:</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Try adjusting your CMYK values slightly</li>
                    <li>
                      Check if you've set extremely high or low values that
                      might be outside typical ranges
                    </li>
                    <li>Refresh the page and try again</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    My color history disappeared
                  </h3>
                  <p>
                    Color history is stored in your browser's local storage. It
                    may be cleared if you:
                  </p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Cleared your browser data/cookies</li>
                    <li>Used incognito/private browsing mode</li>
                    <li>
                      Accessed the site from a different browser or device
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">
                    About Pantone Colors
                  </h3>
                  <p className="mb-4">
                    Learn about the Pantone Matching System and why it's
                    important in design.
                  </p>
                  <Link
                    href="/about-pantone"
                    className="text-primary hover:underline font-medium"
                  >
                    Read our Pantone guide →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">
                    Understanding Color Models
                  </h3>
                  <p className="mb-4">
                    Explore the differences between RGB, CMYK, Pantone, and
                    other color systems.
                  </p>
                  <a
                    href="https://www.pantone.com/color-systems/for-designers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Visit Pantone's official guide →
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
              <div className="bg-muted p-6 rounded-lg text-center">
                <p className="mb-6">
                  If you have additional questions or need further assistance,
                  please reach out to our support team.
                </p>
                <a
                  href="mailto:support@yourwebsite.com"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90"
                >
                  Contact Support
                </a>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-muted/50 rounded-xl p-8 text-center border">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Convert CMYK Colors?
            </h2>
            <p className="mb-6">
              Try our tool now to find Pantone matches for your CMYK values.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90"
            >
              Go to Converter
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
