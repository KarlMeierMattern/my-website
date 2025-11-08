import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`flex flex-col items-start justify-center w-full h-full p-8 bg-zinc-200 rounded-3xl shadow-2xl shadow-black/50 lg:min-h-[500px] lg:p-12 ${className}`}
    >
      {children}
    </div>
  );
}
