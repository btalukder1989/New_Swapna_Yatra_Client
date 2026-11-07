
import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", type = "text", ...props }, ref) => {
        return (
            <input
                ref={ref}
                type={type}
                className={`
          flex h-11 w-full rounded-lg
          border border-[#EEEEEE]
          bg-white px-4 py-2
          text-sm text-[#333333]
          placeholder:text-[#999999]
          shadow-sm
          transition-all duration-200
          outline-none
          focus:border-[#F5820B]
          focus:ring-2 focus:ring-[#F5820B]/15
          disabled:cursor-not-allowed disabled:opacity-50
          ${className}
        `}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";
