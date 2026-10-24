import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#F5B700] text-[#1C1C1C] border border-[#DF9F00] shadow-2xs font-bold",
        gold:
          "bg-[#FFF3CC] text-[#1C1C1C] border border-[#FCD566] font-semibold",
        dark:
          "bg-[#1C1C1C] text-[#FFF8E6] border border-[#333333]",
        cream:
          "bg-[#FFF8E6] text-[#1C1C1C] border border-[#EADBBA]",
        outline:
          "border border-[#1C1C1C] text-[#1C1C1C] bg-transparent",
        goldOutline:
          "border border-[#F5B700] text-[#1C1C1C] bg-[#FFF8E6]",
        secondary:
          "bg-[#F7EDD2] text-[#1C1C1C] border border-[#EADBBA]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
