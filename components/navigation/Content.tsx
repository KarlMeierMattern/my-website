"use client";

import React, { useRef, useEffect } from "react";
import About from "@/components/navigation/sections/About";
import Resume from "@/components/navigation/sections/Resume";
import Portfolio from "@/components/navigation/sections/Portfolio";
import Blog from "@/components/navigation/sections/Blog";
import Contact from "@/components/navigation/sections/Contact";

type ContentProps = {
  section: string;
};

export default function Content({ section }: ContentProps) {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const blogRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the selected section
  const scrollToSection = () => {
    switch (section) {
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "portfolio":
        portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "resume":
        resumeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "blog":
        blogRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  // Call scrollToSection when the component mounts
  useEffect(() => {
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
      <div ref={blogRef}>
        <Blog />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
