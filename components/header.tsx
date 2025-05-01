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
          <Palette className="h-6 w-6" />
          <span className="font-bold text-lg hidden md:block">CMYK to Pantone</span>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Converter
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              About Pantone
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Help
            </a>
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
                <SheetTitle>CMYK to Pantone</SheetTitle>
                <SheetDescription>
                  Convert CMYK colors to their closest Pantone match
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                <a href="#" className="text-sm font-medium transition-colors hover:text-primary px-2 py-1">
                  Converter
                </a>
                <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-2 py-1">
                  About Pantone
                </a>
                <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-2 py-1">
                  Help
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}