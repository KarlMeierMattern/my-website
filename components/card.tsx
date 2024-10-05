import React from 'react'
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode,
}

export default function Card({ children }: CardProps) {
  return (
    <div className="flex items-center justify-center w-96 h-96 bg-slate-200 rounded-3xl font-mono">
      {children}
    </div>
  )
}