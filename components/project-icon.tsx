import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectIconProps = {
  name: string;
  icon?: string;
  className?: string;
};

export function ProjectIcon({ name, icon, className }: ProjectIconProps) {
  const letter = name.charAt(0).toUpperCase();

  if (icon) {
    return (
      <div
        className={cn(
          "relative h-10 w-10 shrink-0 overflow-hidden rounded-[10px] border border-line",
          className
        )}
      >
        <Image
          src={icon}
          alt=""
          fill
          className="object-cover"
          sizes="40px"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-line text-sm font-semibold text-ink",
        className
      )}
      aria-hidden
    >
      {letter}
    </div>
  );
}
