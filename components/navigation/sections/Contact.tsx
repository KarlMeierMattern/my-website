import React, { useRef, useEffect } from "react";

type ContentProps = {
  section: string;
  className: string;
};

export default function Contact({ section, className }: ContentProps) {
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollToSection = () => {
      switch (section) {
        case "contact":
          contactRef.current?.scrollIntoView({ behavior: "smooth" }); // contactRef.current points to the div element
          break;
        default:
          break;
      }
    };
    scrollToSection();
  }, [section]);

  return (
    <div
      ref={contactRef}
      className={`col-span-3 min-h-screen flex flex-col ${className}`}
    >
      <footer className="bg-zinc-100 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-9xl text-zinc-600 mb-8">
            tell me what&apos;s next...
          </p>
          <a
            href="https://www.linkedin.com/in/karl-alexander-meier-mattern-16a3b919a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <p className="text-4xl text-zinc-400 mb-8">
              karlmeiermattern@gmail.com
            </p>
          </a>
          <hr className="mt-24 border-gray-300" />
          <p className="mt-8">
            © {new Date().getFullYear()} Alexander Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
