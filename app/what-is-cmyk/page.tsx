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
  title: "What is CMYK Color? | Understanding the CMYK Color Model",
  description:
    "Learn what the CMYK color model (Cyan, Magenta, Yellow, Key/Black) is, how it's used in printing, and why it's crucial for accurate color reproduction.",
  keywords: [
    "what is cmyk",
    "cmyk color",
    "cmyk meaning",
    "cmyk for printing",
    "cyan magenta yellow black",
    "color model",
    "print design",
  ],
};

export default function WhatIsCmykPage() {
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
                <BreadcrumbPage>What is CMYK?</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-16">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What is CMYK Color?
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Understanding the core color model for professional printing.
          </p>
        </div>
      </section>

      <div className="container max-w-5xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <section>
            <h2 className="text-3xl font-bold mb-6">
              Understanding the CMYK Color Model
            </h2>
            <p className="mb-3">
              CMYK stands for Cyan, Magenta, Yellow, and Key (Black). It's a
              subtractive color model used primarily in color printing. Unlike
              the RGB (Red, Green, Blue) model used for digital displays which
              adds light to create colors, CMYK works by subtracting or
              absorbing brightness from white light reflected off paper.
            </p>
            <p className="mb-3">
              Imagine starting with white paper. Applying cyan ink absorbs red
              light, magenta absorbs green, and yellow absorbs blue. By layering
              these inks in varying percentages, a wide spectrum of colors can
              be produced.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">
              The Role of 'K' (Key/Black)
            </h2>
            <p className="mb-3">
              While combining Cyan, Magenta, and Yellow ink at full strength
              theoretically produces black, the result in practice is often a
              muddy dark brown. More importantly, using three inks to create
              black is expensive and can oversaturate the paper, leading to
              drying issues.
            </p>
            <p className="mb-3">
              Therefore, 'K' (Key), representing black ink, is added. It
              provides depth, contrast, and true black tones much more
              efficiently and crisply than combining C, M, and Y. The term "Key"
              is used because black often serves as the detail layer or outline,
              printed first, to which the other colors are aligned (keyed).
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">
              Why is CMYK Important for Printing?
            </h2>
            <p className="mb-3">
              Most professional printing presses use the CMYK color process.
              Designing directly in CMYK or converting your designs accurately
              to CMYK before printing is crucial for several reasons:
            </p>
            <ul className="list-disc list-inside mb-3 space-y-1">
              <li>
                <strong>Color Accuracy:</strong> What you see on your RGB screen
                might not perfectly match the final printed output. Converting
                to CMYK provides a more accurate preview of how colors will
                appear on paper.
              </li>
              <li>
                <strong>Print Compatibility:</strong> Print devices are built to
                work with CMYK inks. Providing files in this format ensures
                compatibility and avoids unexpected color shifts during the
                printing process.
              </li>
              <li>
                <strong>Cost-Effectiveness:</strong> Using black ink (K) instead
                of mixing C, M, and Y for black tones saves ink and reduces
                cost.
              </li>
            </ul>
            <p>
              Understanding CMYK is essential for graphic designers, marketers,
              photographers, and anyone involved in creating materials destined
              for print, ensuring that the final product matches the intended
              design vision.
            </p>
          </section>
        </article>

        <div className="mt-16 bg-muted/50 rounded-xl p-8 text-center border">
          <h2 className="text-2xl font-bold mb-4">
            Need to Convert Colors for Print?
          </h2>
          <p className="mb-6">
            Use our free online tool to easily convert RGB, Hex, and other color
            formats to CMYK.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Try the CMYK Converter Tool
          </Link>
        </div>
      </div>
    </>
  );
}
