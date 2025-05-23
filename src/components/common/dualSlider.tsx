// components/PriceSlider.tsx
'use client';

import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';

export default function DualSlider({
  min = 150,
  max = 1400,
  step = 10,
  defaultRange = [150, 1400],
  onChange,
}: {
  min?: number;
  max?: number;
  step?: number;
  defaultRange?: [number, number];
  onChange?: (values: number[]) => void;
}) {
  const [range, setRange] = useState<number[]>(defaultRange);

  const handleChange = (values: number[]) => {
    setRange(values);
    onChange?.(values);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>${range[0]}</span>
        <span>${range[1]}</span>
      </div>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        min={min}
        max={max}
        step={step}
        value={range}
        onValueChange={handleChange}
      >
        <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-primary rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-4 h-4 bg-white border-2 border-primary rounded-full shadow" />
        <Slider.Thumb className="block w-4 h-4 bg-white border-2 border-primary rounded-full shadow" />
      </Slider.Root>
    </div>
  );
}
