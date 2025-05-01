"use client";

import { 
  Copy, 
  Download,
  Save 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CMYK } from "@/lib/types";
import { cmykToRgb, rgbToHex } from "@/lib/color-conversions";
import { useToast } from "@/hooks/use-toast";
import { cmykToPantone } from "@/lib/cmyk-to-pantone";

interface ColorPreviewProps {
  cmyk: CMYK;
  saveToHistory: () => void;
  outputFormat: "cmyk" | "rgb" | "pantone";
}

export function ColorPreview({ cmyk, saveToHistory, outputFormat }: ColorPreviewProps) {
  const { toast } = useToast();
  
  // Convert CMYK to RGB for display
  const rgb = cmykToRgb(cmyk);
  const hex = rgbToHex(rgb);
  const backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const pantoneMatches = cmykToPantone(cmyk);
  const closestPantone = pantoneMatches[0];
  
  // For text color contrast
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  const textColor = brightness > 128 ? 'black' : 'white';

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Copied to clipboard",
          description: `${label} values have been copied.`,
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

  const handleSave = () => {
    saveToHistory();
  };

  const handleExport = () => {
    const colorData = {
      cmyk,
      rgb,
      hex,
      pantone: closestPantone?.name,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(colorData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = `color-export-${cmyk.c}-${cmyk.m}-${cmyk.y}-${cmyk.k}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Color exported",
      description: "Color data has been exported as JSON."
    });
  };

  return (
    <div className="space-y-4">
      <div 
        className="aspect-video rounded-lg flex items-center justify-center transition-all duration-300"
        style={{ backgroundColor, color: textColor }}
      >
        <div className="text-center p-4">
          <div className="text-lg font-bold mb-1">Color Preview</div>
          <div className="opacity-90">
            {outputFormat === "cmyk" && `C: ${cmyk.c}% M: ${cmyk.m}% Y: ${cmyk.y}% K: ${cmyk.k}%`}
            {outputFormat === "rgb" && `R: ${rgb.r} G: ${rgb.g} B: ${rgb.b}`}
            {outputFormat === "pantone" && closestPantone && closestPantone.name}
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        {outputFormat === "cmyk" && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">CMYK:</span>
            <div className="flex items-center gap-2">
              <span className="text-sm">
                {cmyk.c}%, {cmyk.m}%, {cmyk.y}%, {cmyk.k}%
              </span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7"
                onClick={() => copyToClipboard(`${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}`, "CMYK")}
              >
                <Copy className="h-3.5 w-3.5" />
                <span className="sr-only">Copy CMYK</span>
              </Button>
            </div>
          </div>
        )}
        
        {outputFormat === "rgb" && (
          <>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">RGB:</span>
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {rgb.r}, {rgb.g}, {rgb.b}
                </span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => copyToClipboard(`${rgb.r}, ${rgb.g}, ${rgb.b}`, "RGB")}
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span className="sr-only">Copy RGB</span>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">HEX:</span>
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {hex}
                </span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-7 w-7"
                  onClick={() => copyToClipboard(hex, "HEX")}
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span className="sr-only">Copy HEX</span>
                </Button>
              </div>
            </div>
          </>
        )}
        
        {outputFormat === "pantone" && closestPantone && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Closest Match:</span>
            <div className="flex items-center gap-2">
              <span className="text-sm">
                {closestPantone.name}
              </span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7"
                onClick={() => copyToClipboard(closestPantone.name, "Pantone")}
              >
                <Copy className="h-3.5 w-3.5" />
                <span className="sr-only">Copy Pantone</span>
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex gap-4 pt-2">
        <Button 
          className="flex-1"
          onClick={handleSave}
        >
          <Save className="h-4 w-4 mr-2" />
          Save to History
        </Button>
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={handleExport}
        >
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
}