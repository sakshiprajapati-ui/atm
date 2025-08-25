"use client";

import React, { useRef, useEffect } from "react";

interface SparklesCoreProps {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
}

export function SparklesCore({
  className,
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  particleDensity = 100,
  particleColor = "rgba(255,255,255,0.85)",
}: SparklesCoreProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let w = (c.width = c.offsetWidth);
    let h = (c.height = c.offsetHeight);

    const particles = Array.from({ length: particleDensity }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * (maxSize - minSize) + minSize,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = c.width = c.offsetWidth;
      h = c.height = c.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [background, minSize, maxSize, particleDensity, particleColor]);

  return <canvas ref={ref} className={`absolute inset-0 w-full h-full ${className || ""}`} />;
}
