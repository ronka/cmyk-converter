"use client";

import { Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PantoneMatch } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { rgbToHex } from "@/lib/color-conversions";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PantoneResultsProps {
  matches: PantoneMatch[];
  onSelectPantone: (match: PantoneMatch) => void;
}

export function PantoneResults({ matches, onSelectPantone }: PantoneResultsProps) {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Copied to clipboard",
          description: `${label} has been copied.`,
        });
      },
      () => {
        toast({
          title: "Copy failed",
          description: "Could not copy to clipboard.",
          variant: "destructive",
        });
      }
    );
  };

  // Function to determine if text should be dark or light based on background color
  const getTextColor = (rgb: { r: number; g: number; b: number }) => {
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return brightness > 128 ? 'black' : 'white';
  };

  if (matches.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No Pantone matches found for this color.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {matches.map((match, index) => {
        const textColor = getTextColor(match.rgb);
        const backgroundColor = `rgb(${match.rgb.r}, ${match.rgb.g}, ${match.rgb.b})`;
        const hexColor = rgbToHex(match.rgb);
        
        return (
          <div 
            key={`${match.name}-${index}`}
            className="group rounded-lg border overflow-hidden transition-all hover:shadow-md cursor-pointer"
            onClick={() => onSelectPantone(match)}
          >
            <div 
              className="p-4 h-20 flex items-center justify-between transition-all"
              style={{ backgroundColor, color: textColor }}
            >
              <div>
                <h3 className="font-bold">{match.name}</h3>
                <div className="opacity-80 text-sm">Pantone Matching System</div>
              </div>
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="secondary" 
                        size="icon"
                        className="h-8 w-8 opacity-80 hover:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(match.name, "Pantone code");
                        }}
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy code</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copy Pantone code</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="secondary" 
                        size="icon"
                        className="h-8 w-8 opacity-80 hover:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://www.pantone.com/color-finder/${match.name.replace(/\s+/g, '')}`, '_blank');
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">View on Pantone</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View on Pantone website</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="px-4 py-3 bg-card">
              <div className="flex flex-wrap gap-4">
                <div className="min-w-[140px]">
                  <div className="text-xs text-muted-foreground uppercase">CMYK</div>
                  <div className="text-sm">
                    C: {match.cmyk.c}% M: {match.cmyk.m}% Y: {match.cmyk.y}% K: {match.cmyk.k}%
                  </div>
                </div>
                
                <div className="min-w-[100px]">
                  <div className="text-xs text-muted-foreground uppercase">RGB</div>
                  <div className="text-sm">
                    {match.rgb.r}, {match.rgb.g}, {match.rgb.b}
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-muted-foreground uppercase">HEX</div>
                  <div className="text-sm">{hexColor}</div>
                </div>
                
                <div className="ml-auto">
                  <div className="text-xs text-muted-foreground uppercase">Similarity</div>
                  <div className="text-sm">{match.similarity.toFixed(2)}%</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}