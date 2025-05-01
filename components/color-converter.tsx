"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CmykColorInput } from "@/components/cmyk-color-input";
import { PantoneResults } from "@/components/pantone-results";
import { ColorHistory } from "@/components/color-history";
import { ColorPreview } from "@/components/color-preview";
import { cmykToPantone } from "@/lib/cmyk-to-pantone";
import { useToast } from "@/hooks/use-toast";
import {
  usePersistentState,
  isValidCmykArray,
} from "@/hooks/use-persistent-state";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CMYK, PantoneMatch } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ColorConverterProps {
  initialColor?: CMYK;
}

type ColorFormat = "cmyk" | "rgb" | "pantone";

export function ColorConverter({ initialColor }: ColorConverterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [cmykColor, setCmykColor] = useState<CMYK>(
    initialColor || { c: 0, m: 0, y: 0, k: 0 }
  );
  const [pantoneMatches, setPantoneMatches] = useState<PantoneMatch[]>([]);
  const [colorHistory, setColorHistory] = usePersistentState<CMYK[]>(
    "colorHistory",
    [],
    isValidCmykArray
  );
  const [outputFormat, setOutputFormat] = useState<ColorFormat>("cmyk");
  const { toast } = useToast();

  useEffect(() => {
    if (initialColor) {
      setCmykColor(initialColor);
    }
  }, [initialColor]);

  useEffect(() => {
    try {
      const matches = cmykToPantone(cmykColor);
      setPantoneMatches(matches);

      // Update URL with query parameters
      const params = new URLSearchParams(searchParams.toString());
      params.set("c", cmykColor.c.toString());
      params.set("m", cmykColor.m.toString());
      params.set("y", cmykColor.y.toString());
      params.set("k", cmykColor.k.toString());
      router.push(`/?${params.toString()}`);
    } catch (error) {
      toast({
        title: "Error finding Pantone matches",
        description: "There was a problem converting your CMYK color.",
        variant: "destructive",
      });
    }
  }, [cmykColor, router, searchParams, toast]);

  const handleColorChange = (newColor: CMYK) => {
    setCmykColor(newColor);
  };

  const saveToHistory = () => {
    if (
      colorHistory.length === 0 ||
      JSON.stringify(colorHistory[0]) !== JSON.stringify(cmykColor)
    ) {
      const updatedHistory = [cmykColor, ...colorHistory.slice(0, 9)];
      setColorHistory(updatedHistory);

      toast({
        title: "Color saved to history",
        description: `C:${cmykColor.c}% M:${cmykColor.m}% Y:${cmykColor.y}% K:${cmykColor.k}%`,
      });
    }
  };

  const loadFromHistory = (color: CMYK) => {
    setCmykColor(color);
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>CMYK Color Input</CardTitle>
              <CardDescription>
                Adjust the CMYK values to convert to other formats
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CmykColorInput color={cmykColor} onChange={handleColorChange} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-4">
              <div className="flex justify-between items-center">
                <CardTitle>Color Preview</CardTitle>
                <Select
                  value={outputFormat}
                  onValueChange={(value) =>
                    setOutputFormat(value as ColorFormat)
                  }
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Output Format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cmyk">CMYK</SelectItem>
                    <SelectItem value="rgb">RGB</SelectItem>
                    <SelectItem value="pantone">Pantone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CardDescription>
                {outputFormat === "cmyk" && "View CMYK values"}
                {outputFormat === "rgb" && "View converted RGB values"}
                {outputFormat === "pantone" && "View closest Pantone matches"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ColorPreview
                cmyk={cmykColor}
                saveToHistory={saveToHistory}
                outputFormat={outputFormat}
              />
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="matches">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="matches">Pantone Matches</TabsTrigger>
              <TabsTrigger value="history">Color History</TabsTrigger>
            </TabsList>

            <TabsContent value="matches" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Closest Pantone Matches</CardTitle>
                  <CardDescription>
                    {pantoneMatches.length > 0
                      ? `Found ${pantoneMatches.length} close matches`
                      : "No matches found"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PantoneResults
                    matches={pantoneMatches}
                    onSelectPantone={(match) => {
                      setCmykColor(match.cmyk);
                      toast({
                        title: "Pantone color loaded",
                        description: match.name,
                      });
                    }}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Color History</CardTitle>
                  <CardDescription>
                    {colorHistory.length > 0
                      ? `${colorHistory.length} recent colors`
                      : "No color history yet"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ColorHistory
                    colors={colorHistory}
                    onSelectColor={loadFromHistory}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
