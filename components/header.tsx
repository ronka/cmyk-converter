"use client";

import { useEffect, useState } from "react";
import { Menu, Palette } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 max-w-5xl mx-auto px-4">
        <div className="flex gap-2 items-center text-primary">
          <Link href="/" className="flex gap-2 items-center">
            <Palette className="h-6 w-6" />
            <span className="font-bold text-lg hidden md:block">
              CMYK Converter
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Converter
            </Link>
            <Link
              href="/about-pantone"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About Pantone
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Help
            </Link>
          </nav>

          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>CMYK Converter</SheetTitle>
                <SheetDescription>
                  Convert CMYK colors to their closest Pantone match
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-primary px-2 py-1"
                >
                  Converter
                </Link>
                <Link
                  href="/about-pantone"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-2 py-1"
                >
                  About Pantone
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-2 py-1"
                >
                  Help
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
