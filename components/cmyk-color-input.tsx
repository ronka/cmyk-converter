"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { CMYK } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CmykColorInputProps {
  color: CMYK;
  onChange: (color: CMYK) => void;
}

export function CmykColorInput({ color, onChange }: CmykColorInputProps) {
  const [sliderValues, setSliderValues] = useState({
    c: [color.c],
    m: [color.m],
    y: [color.y],
    k: [color.k],
  });

  const [inputValues, setInputValues] = useState({
    c: color.c.toString(),
    m: color.m.toString(),
    y: color.y.toString(),
    k: color.k.toString(),
  });

  useEffect(() => {
    // Update sliders and inputs when color prop changes (e.g. from history)
    setSliderValues({
      c: [color.c],
      m: [color.m],
      y: [color.y],
      k: [color.k],
    });
    
    setInputValues({
      c: color.c.toString(),
      m: color.m.toString(),
      y: color.y.toString(),
      k: color.k.toString(),
    });
  }, [color]);

  const handleSliderChange = (key: keyof CMYK, value: number[]) => {
    const numberValue = value[0];
    
    // Update slider state
    setSliderValues((prev) => ({
      ...prev,
      [key]: value,
    }));
    
    // Update input value state
    setInputValues((prev) => ({
      ...prev,
      [key]: numberValue.toString(),
    }));
    
    // Notify parent component of color change
    onChange({
      ...color,
      [key]: numberValue,
    });
  };

  const handleInputChange = (key: keyof CMYK, value: string) => {
    // Update input state
    setInputValues((prev) => ({
      ...prev,
      [key]: value,
    }));
    
    // Only update slider and notify parent if we have a valid number
    const numberValue = parseInt(value, 10);
    
    if (!isNaN(numberValue) && numberValue >= 0 && numberValue <= 100) {
      setSliderValues((prev) => ({
        ...prev,
        [key]: [numberValue],
      }));
      
      onChange({
        ...color,
        [key]: numberValue,
      });
    }
  };

  const handleInputBlur = (key: keyof CMYK) => {
    const value = inputValues[key];
    let numberValue = parseInt(value, 10);
    
    // Sanitize input on blur
    if (isNaN(numberValue)) numberValue = 0;
    if (numberValue < 0) numberValue = 0;
    if (numberValue > 100) numberValue = 100;
    
    // Update both states with sanitized value
    setInputValues((prev) => ({
      ...prev,
      [key]: numberValue.toString(),
    }));
    
    setSliderValues((prev) => ({
      ...prev,
      [key]: [numberValue],
    }));
    
    onChange({
      ...color,
      [key]: numberValue,
    });
  };

  return (
    <div className="space-y-6">
      {/* Cyan */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Cyan (C)</label>
          <div className="w-16">
            <Input
              type="number"
              min="0"
              max="100"
              value={inputValues.c}
              onChange={(e) => handleInputChange("c", e.target.value)}
              onBlur={() => handleInputBlur("c")}
              className="h-8"
            />
          </div>
        </div>
        <Slider
          value={sliderValues.c}
          min={0}
          max={100}
          step={1}
          onValueChange={(value) => handleSliderChange("c", value)}
          className={cn("", {
            "slider-cyan": true
          })}
        />
      </div>
      
      {/* Magenta */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Magenta (M)</label>
          <div className="w-16">
            <Input
              type="number"
              min="0"
              max="100"
              value={inputValues.m}
              onChange={(e) => handleInputChange("m", e.target.value)}
              onBlur={() => handleInputBlur("m")}
              className="h-8"
            />
          </div>
        </div>
        <Slider
          value={sliderValues.m}
          min={0}
          max={100}
          step={1}
          onValueChange={(value) => handleSliderChange("m", value)}
          className={cn("", {
            "slider-magenta": true
          })}
        />
      </div>
      
      {/* Yellow */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Yellow (Y)</label>
          <div className="w-16">
            <Input
              type="number"
              min="0"
              max="100"
              value={inputValues.y}
              onChange={(e) => handleInputChange("y", e.target.value)}
              onBlur={() => handleInputBlur("y")}
              className="h-8"
            />
          </div>
        </div>
        <Slider
          value={sliderValues.y}
          min={0}
          max={100}
          step={1}
          onValueChange={(value) => handleSliderChange("y", value)}
          className={cn("", {
            "slider-yellow": true
          })}
        />
      </div>
      
      {/* Black */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Black (K)</label>
          <div className="w-16">
            <Input
              type="number"
              min="0"
              max="100"
              value={inputValues.k}
              onChange={(e) => handleInputChange("k", e.target.value)}
              onBlur={() => handleInputBlur("k")}
              className="h-8"
            />
          </div>
        </div>
        <Slider
          value={sliderValues.k}
          min={0}
          max={100}
          step={1}
          onValueChange={(value) => handleSliderChange("k", value)}
          className={cn("", {
            "slider-black": true
          })}
        />
      </div>
    </div>
  );
}