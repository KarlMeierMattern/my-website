import { cn } from "@/lib/utils";
import type { IconTone } from "@/lib/site-data";

const tones: Record<IconTone, { bg: string; fg: string }> = {
  stone: { bg: "#edeae4", fg: "#1a1a1a" },
  sage: { bg: "#e4ebe4", fg: "#1a1a1a" },
  sand: { bg: "#ebe4d8", fg: "#1a1a1a" },
  slate: { bg: "#e4e8ed", fg: "#1a1a1a" },
  clay: { bg: "#ebe2dc", fg: "#1a1a1a" },
  ocean: { bg: "#dce6e8", fg: "#1a1a1a" },
};

type ProjectIconProps = {
  name: string;
  glyph?: string;
  tone?: IconTone;
  className?: string;
};

export function ProjectIcon({
  name,
  glyph,
  tone = "stone",
  className,
}: ProjectIconProps) {
  const label = (glyph ?? name.charAt(0)).toLowerCase();
  const colors = tones[tone];

  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-line text-xs font-semibold tracking-tight",
        label.length > 1 ? "text-[11px]" : "text-sm",
        className
      )}
      style={{ backgroundColor: colors.bg, color: colors.fg }}
      aria-hidden
    >
      {label}
    </div>
  );
}
