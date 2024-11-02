import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant: "red" | "blue" | "regular"; // Renamed 'type' to 'variant'
  type?: "button" | "submit" | "reset"; // HTML button type attribute
  onClick?: () => void;
}

const variantToBgColor = {
  red: "bg-red",
  blue: "bg-blue",
  regular: "bg-regular",
};

export default function Button({
  children,
  className,
  variant,
  type = "button", // Default type is 'button'
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type} // Native HTML type attribute
      className={`py-[0.5rem] px-[2rem] ${variantToBgColor[variant]} flex justify-center items-center text-[#fff] w-fit hover:scale-105 transition-all ease-linear shadow-md ${className}`}
    >
      <p className="uppercase font-medium">{children}</p>
    </button>
  );
}
