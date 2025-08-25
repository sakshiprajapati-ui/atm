import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("scroll-m-20 tracking-tight", {
  variants: {
    size: {
      h1: "text-4xl font-extrabold lg:text-5xl",
      h2: "text-3xl font-semibold lg:text-4xl",
      h3: "text-2xl font-semibold lg:text-3xl",
      h4: "text-xl font-medium lg:text-2xl",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      glow: "text-white drop-shadow-[0_0_12px_rgba(34,197,94,0.35)]",
    },
  },
  defaultVariants: {
    size: "h2",
    tone: "default",
  },
});

type HeadingBaseProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4";
  };

export function Heading({
  as: Tag = "h2",
  size,
  tone,
  className,
  ...props
}: HeadingBaseProps) {
  // If size not given, infer from the tag
  const inferred = size ?? (Tag as "h1" | "h2" | "h3" | "h4");
  return (
    <Tag className={cn(headingVariants({ size: inferred, tone }), className)} {...props} />
  );
}
