import type { ReactNode } from "react";

interface ButtonProps {
  label: string | ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "sm" | "base" | "xl";
  variant?: "primary" | "secondary" | "disabled" | "success" | "danger"; // Se añaden nuevas variantes
  className?: string;
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "text-sm",
  base: "text-base",
  xl: "text-xl",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-black/75 text-white hover:bg-black/60 active:bg-black/75 " +
    "dark:bg-white dark:text-black/80 dark:hover:bg-white/90 dark:active:bg-white " +
    "cursor-pointer hover:scale-105 active:scale-95 transition-all",
  secondary:
    "border-2 border-black text-black hover:bg-black hover:text-white active:bg-black/55 " +
    "dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white/90 " +
    "cursor-pointer hover:scale-105 active:scale-95 transition-all",
  // Nuevas variantes de color
  success:
    "bg-green-600 text-white hover:bg-green-700 active:bg-green-600 " +
    "dark:bg-green-500 dark:hover:bg-green-600 dark:active:bg-green-500 " +
    "cursor-pointer hover:scale-105 active:scale-95 transition-all",
  danger:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-600 " +
    "dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-500 " +
    "cursor-pointer hover:scale-105 active:scale-95 transition-all",
  disabled: "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50",
};

export const Button = ({
  label,
  onClick,
  size = "sm",
  variant = "primary",
  className,
}: ButtonProps) => {
  const currentVariant = variant === "disabled" ? "disabled" : variant;

  return (
    <button
      onClick={onClick}
      disabled={variant === "disabled"}
      className={`rounded-md p-3 font-semibold ${sizeClasses[size]} ${
        variantClasses[currentVariant]
      } ${className || ""}`}
    >
      {label}
    </button>
  );
};
