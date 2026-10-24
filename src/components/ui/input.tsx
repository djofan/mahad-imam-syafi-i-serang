import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-[#EADBBA] bg-[#FFFDF8] px-3.5 py-2 text-sm text-[#1C1C1C] placeholder:text-stone-400 focus-visible:outline-none focus-visible:border-[#F5B700] focus-visible:ring-2 focus-visible:ring-[#F5B700]/30 disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-2xs",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
