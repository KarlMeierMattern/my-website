import Image from "next/image";
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

function faviconFromUrl(url: string): string | undefined {
  try {
    const siteUrl = new URL(url).origin;
    const params = new URLSearchParams({
      client: "SOCIAL",
      type: "FAVICON",
      fallback_opts: "TYPE,SIZE,URL",
      url: siteUrl,
      size: "128",
    });
    return `https://t1.gstatic.com/faviconV2?${params.toString()}`;
  } catch {
    return undefined;
  }
}

function isRemoteSrc(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}

export function resolveProjectIconSrc(
  icon?: string,
  url?: string
): string | undefined {
  if (icon) return icon;
  if (url) return faviconFromUrl(url);
  return undefined;
}

type ProjectIconProps = {
  name: string;
  glyph?: string;
  tone?: IconTone;
  icon?: string;
  url?: string;
  className?: string;
};

export function ProjectIcon({
  name,
  glyph,
  tone = "stone",
  icon,
  url,
  className,
}: ProjectIconProps) {
  const iconSrc = resolveProjectIconSrc(icon, url);

  if (iconSrc) {
    return (
      <div
        className={cn(
          "relative h-10 w-10 shrink-0 overflow-hidden rounded-[10px] border border-line bg-white",
          className
        )}
      >
        {isRemoteSrc(iconSrc) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={iconSrc}
            alt=""
            className={cn(
              "h-full w-full",
              iconSrc.includes("/icons/projects/")
                ? "object-cover"
                : "object-contain p-1.5"
            )}
            aria-hidden
          />
        ) : (
          <Image
            src={iconSrc}
            alt=""
            fill
            sizes="40px"
            className={cn(
              iconSrc.includes("/icons/projects/")
                ? "object-cover"
                : "object-contain p-1.5"
            )}
            aria-hidden
          />
        )}
      </div>
    );
  }

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
