"use client";
import React from "react";

export function AuroraBackground({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      {/* Aurora gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(40% 40% at 20% 10%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(40% 40% at 80% 20%, rgba(236,72,153,0.35), transparent 60%), radial-gradient(40% 40% at 50% 90%, rgba(34,197,94,0.35), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
