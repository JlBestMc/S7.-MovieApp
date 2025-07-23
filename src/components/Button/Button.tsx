import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  styles?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
  styles = "",
}) => {
  const baseClasses =
    "px-4 py-2 rounded-full font-semibold transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-950 to-purple-950 text-white hover:bg-blue-700 disabled:bg-blue-300",
    secondary:
      "bg-gradient-to-r from-blue-950 to-purple-950 text-white disabled:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
