import type { ReactNode } from "react";

interface ButtonProps {
  label: string | ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  size?: "sm" | "base" | "xl";
  variant?: "primary" | "secundary" | "disabled";
  className?: string;
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "text-sm",
  base: "text-base",
  xl: "text-xl",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-black/75 text-white hover:bg-black/60 active:bg-black/75 cursor-pointer hover:scale-105 active:scale-95 transition-all",
  secundary:
    "border-2 border-black text-black hover:bg-black hover:text-white active:bg-black/55 cursor-pointer hover:scale-105 active:scale-95 transition-all",
  disabled: "bg-gray-300 cursor-not-allowed opacity-50 ",
};

export const Button = ({
  label,
  onClick,
  size = "sm",
  variant = "primary",
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md p-3 ${className} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {label}
    </button>
  );
};
