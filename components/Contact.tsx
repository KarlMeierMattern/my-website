import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
          <p className="text-4xl sm:text-6xl md:text-8xl text-zinc-600 mb-8">
            tell me what&apos;s next...
          </p>{" "}
          <p className="text-xl sm:text-2xl md:text-4xl text-zinc-400 mb-4">
            karlmeiermattern@gmail.com
          </p>
          <div className="flex flex-row items-end text-sm sm:text-2xl md:text-4xl text-zinc-400 mb-8">
            <FontAwesomeIcon
              icon={faLinkedin as IconDefinition}
              className="text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl"
            />
            <a
              href="https://www.linkedin.com/in/karl-alexander-meier-mattern-16a3b919a/"
              className="text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl underline ml-2" // Added some margin to separate icon and text
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <hr className="mt-12 lg:mt-24 border-gray-300" />
          <p className="text-xs md:text-sm lg:text-base mt-8">
            © {new Date().getFullYear()} Alexander Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
