import { contactLinks } from "@/lib/site-data";

export function ContactLinks() {
  return (
    <section className="mb-8 mt-12">
      <h2 className="section-label mb-3 text-ink-muted">contact</h2>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {contactLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="quiet-link text-[15.5px] lowercase text-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
