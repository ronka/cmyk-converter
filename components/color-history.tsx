"use client";

import { CMYK } from "@/lib/types";
import { cmykToRgb } from "@/lib/color-conversions";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ColorHistoryProps {
  colors: CMYK[];
  onSelectColor: (color: CMYK) => void;
}

export function ColorHistory({ colors, onSelectColor }: ColorHistoryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  // Function to determine if text should be dark or light based on background color
  const getTextColor = (rgb: { r: number; g: number; b: number }) => {
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return brightness > 128 ? 'black' : 'white';
  };
  
  const handleColorSelect = (color: CMYK, index: number) => {
    onSelectColor(color);
    setSelectedIndex(index);
    
    toast({
      title: "Color loaded",
      description: `C:${color.c}% M:${color.m}% Y:${color.y}% K:${color.k}%`,
    });
  };

  if (colors.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No colors in history yet. Save colors to view them here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {colors.map((color, index) => {
        const rgb = cmykToRgb(color);
        const backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        const textColor = getTextColor(rgb);
        
        return (
          <div 
            key={`${color.c}-${color.m}-${color.y}-${color.k}-${index}`}
            className={`relative border rounded-lg overflow-hidden transition-all ${
              selectedIndex === index ? "ring-2 ring-primary" : "hover:shadow-md"
            }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleColorSelect(color, index)}
            >
              <div 
                className="p-4 flex items-center justify-between"
                style={{ backgroundColor, color: textColor }}
              >
                <div>
                  <div className="font-medium">C:{color.c}% M:{color.m}% Y:{color.y}% K:{color.k}%</div>
                  <div className="text-sm opacity-80">RGB: {rgb.r}, {rgb.g}, {rgb.b}</div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="opacity-80 hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleColorSelect(color, index);
                    }}
                  >
                    Load
                  </Button>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}