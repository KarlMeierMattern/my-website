"use client";

import React, { useRef, useEffect } from "react";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Library from "./Library";

type ContentProps = {
  section: string;
};

export default function Content({ section }: ContentProps) {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const libraryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollToSection = () => {
      switch (section) {
        case "about":
          aboutRef.current?.scrollIntoView({
            behavior: "smooth",
          });
          break;
        case "portfolio":
          portfolioRef.current?.scrollIntoView({
            behavior: "smooth",
          });
          break;
        case "resume":
          resumeRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "library":
          libraryRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    };

    scrollToSection();
  }, [section]);

  return (
    <div className="flex flex-col h-full w-full">
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={resumeRef}>
        <Resume />
      </div>
      <div ref={libraryRef}>
        <Library />
      </div>
    </div>
  );
}
