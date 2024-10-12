import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  isSelected: boolean;
}

export default function Button({ children, onClick, isSelected }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 text-black hover:bg-gray-100 transition-all rounded-xl cursor-pointer mr-1 ${
        isSelected ? "bg-white" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
