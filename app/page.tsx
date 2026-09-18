import { SiteHeader } from "@/components/site-header";
import { ProjectSection } from "@/components/project-section";
import { ContactLinks } from "@/components/contact-links";
import {
  workProjects,
  exploringProjects,
  backgroundEntries,
} from "@/lib/site-data";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10 md:py-16">
      <SiteHeader />
      <ProjectSection label="work" projects={workProjects} className="mb-10" />
      <ProjectSection
        label="exploring"
        projects={exploringProjects}
        className="mb-10"
      />
      <ProjectSection
        label="background"
        projects={backgroundEntries}
        className="mb-10"
      />
      <ContactLinks />
    </main>
  );
}
