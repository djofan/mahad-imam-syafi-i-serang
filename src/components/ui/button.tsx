import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#F5B700] text-[#1C1C1C] hover:bg-[#DF9F00] shadow-sm hover:shadow-md font-bold tracking-tight",
        dark:
          "bg-[#1C1C1C] text-[#FFF8E6] hover:bg-[#2B2B2B] hover:text-white border border-[#333333] shadow-sm",
        goldOutline:
          "border-2 border-[#F5B700] text-[#1C1C1C] bg-transparent hover:bg-[#F5B700]/15 font-semibold",
        darkOutline:
          "border-2 border-[#1C1C1C] text-[#1C1C1C] bg-transparent hover:bg-[#1C1C1C] hover:text-[#FFF8E6] font-semibold",
        secondary:
          "bg-[#F7EDD2] text-[#1C1C1C] hover:bg-[#EADBBA] border border-[#EADBBA]",
        ghost:
          "text-[#1C1C1C] hover:bg-[#F5B700]/15 hover:text-[#1C1C1C]",
        link:
          "text-[#1C1C1C] underline-offset-4 hover:underline hover:text-[#F5B700] p-0 h-auto font-medium",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-md px-3.5 text-xs",
        lg: "h-12 rounded-xl px-7 text-base font-bold",
        icon: "h-10 w-10 p-0 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
