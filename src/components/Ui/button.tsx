import { cn } from "@/Lib/utils";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition-all font-semibold shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};