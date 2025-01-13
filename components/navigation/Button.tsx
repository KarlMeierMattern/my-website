import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  isSelected: boolean;
  isLargeScreen: boolean;
};

export default function Button({
  children,
  onClick,
  isSelected,
  isLargeScreen,
}: ButtonProps) {
  return (
    <button
      className={`text-black hover:bg-gray-100 transition-all  cursor-pointer ${
        isLargeScreen ? "px-4 py-2 rounded-xl" : "px-2 py-1 rounded-lg text-xs"
      } ${isSelected ? "bg-white" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
