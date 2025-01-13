import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  isSelected: boolean;
};

export default function Button({ children, onClick, isSelected }: ButtonProps) {
  return (
    <button
      className={`text-black hover:bg-gray-100 transition-all cursor-pointer px-2 py-1 m-0.5 rounded-lg text-xs md:px-4 md:py-2 md:m-1 md:rounded-xl md:text-sm
         ${isSelected ? "bg-white" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
