import React from "react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`card flex flex-col items-start justify-center w-full bg-zinc-200 rounded-3xl shadow-2xl shadow-black/50 p-6 ${className}`}
    >
      {children}
    </div>
  );
}
