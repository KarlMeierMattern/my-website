"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SESSION_KEY = "smiley-ring-seen";

export function SmileyRingWidget({ className }: { className?: string }) {
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") {
        setSkipAnimation(true);
        return;
      }

      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // sessionStorage unavailable (e.g. private browsing restrictions)
    }
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed bottom-4 right-4 z-10 opacity-60",
        skipAnimation && "smiley-ring-static",
        className
      )}
    >
      <svg
        viewBox="0 0 64 64"
        className="h-[52px] w-[52px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32"
          cy="32"
          r="24"
          className="smiley-ring-stroke"
          stroke="var(--line-strong)"
          strokeWidth="2"
        />
        <text
          x="32"
          y="35"
          textAnchor="middle"
          className="smiley-ring-label fill-[var(--ink-muted)] text-[9px] font-semibold"
        >
          100%
        </text>
        <circle
          cx="26"
          cy="17"
          r="1.75"
          className="smiley-ring-eye smiley-ring-eye-left fill-[var(--ink)]"
        />
        <circle
          cx="38"
          cy="17"
          r="1.75"
          className="smiley-ring-eye smiley-ring-eye-right fill-[var(--ink)]"
        />
        <path
          d="M 27 21 Q 32 24 37 21"
          className="smiley-ring-mouth stroke-[var(--ink)]"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
