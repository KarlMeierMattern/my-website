import type { Project } from "@/lib/site-data";
import { ProjectList } from "@/components/project-list";

type ProjectSectionProps = {
  label: string;
  projects: Project[];
  className?: string;
};

export function ProjectSection({
  label,
  projects,
  className,
}: ProjectSectionProps) {
  return (
    <section className={className}>
      <h2 className="section-label mb-3 text-ink-muted">{label}</h2>
      <ProjectList projects={projects} />
    </section>
  );
}
