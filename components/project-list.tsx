"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/site-data";
import { ProjectIcon } from "@/components/project-icon";

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="divide-y divide-line">
      {projects.map((project, index) => {
        const isOpen = openIndex === index;

        return (
          <li key={project.name} className="border-b border-line last:border-b-0">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="group flex w-full items-center gap-x-3 py-2.5 text-left"
            >
              <ProjectIcon name={project.name} icon={project.icon} />
              <span className="min-w-[8rem] shrink-0 basis-full text-[15.5px] font-semibold text-ink sm:basis-0 sm:whitespace-nowrap">
                {project.name}
              </span>
              <span className="hidden flex-1 text-[15.5px] text-ink-muted sm:block">
                {project.summary}
              </span>
              <ChevronDown
                className={cn(
                  "ml-auto h-4 w-4 shrink-0 text-ink-muted transition-transform duration-300 group-hover:text-ink",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-4 pt-1 sm:pl-[calc(2.5rem+0.75rem)]">
                  <p className="mb-3 text-[15.5px] text-ink-muted sm:hidden">
                    {project.summary}
                  </p>
                  <ul className="space-y-1.5">
                    {project.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex gap-x-2 text-[15.5px] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-line-strong" />
                        <span>
                          {bulletIndex === 0 && project.year
                            ? `${project.year} — ${bullet}`
                            : bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {project.url && (
                    <p className="mt-3 text-[15.5px]">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quiet-link"
                      >
                        {project.url.replace(/^https?:\/\//, "")}
                      </a>
                    </p>
                  )}
                  {project.screenshots.length > 0 && (
                    <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
                      {project.screenshots.map((src) => (
                        <div
                          key={src}
                          className="relative h-44 w-auto shrink-0 overflow-hidden rounded-lg border border-line"
                        >
                          <Image
                            src={src}
                            alt={`${project.name} screenshot`}
                            width={320}
                            height={176}
                            className="h-44 w-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
