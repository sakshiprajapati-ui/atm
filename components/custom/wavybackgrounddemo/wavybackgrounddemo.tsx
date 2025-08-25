"use client";

import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function WavyBackgroundDemo({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center">
        {title}
      </p>
      <p className="text-base md:text-lg mt-4 text-white/80 text-center">
        {subtitle}
      </p>
    </WavyBackground>
  );
}
