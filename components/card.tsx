import React from 'react'
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode,
}

export default function Card({ children }: CardProps) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-slate-200 rounded-3xl font-mono m-auto">
      {children}
    </div>
  )
}