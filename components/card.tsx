import React from "react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-zinc-200 rounded-3xl font-mono shadow-2xl shadow-black/50">
      {children}
    </div>
  );
}
