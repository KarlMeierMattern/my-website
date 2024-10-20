"use client";

import React, { useRef, useEffect } from "react";
import About from "@/components/navigation/sections/About";
import Resume from "@/components/navigation/sections/Resume";
import Portfolio from "@/components/navigation/sections/Portfolio";
import Blog from "@/components/navigation/sections/Blog";

type ContentProps = {
  section: string;
};

export default function Content({ section }: ContentProps) {
  // myRef is an object that has a single property called .current initially set to null
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const blogRef = useRef<HTMLDivElement | null>(null);

  // .current holds a reference to the DOM element
  // After the component mounts, myRef.current will point to the corresponding DOM element to which you’ve attached the ref
  useEffect(() => {
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
        default:
          break;
      }
    };

    scrollToSection();
  }, [section]); // Only depend on section

  // each ref will point to the corresponding DOM element
  return (
    <div className="flex flex-col h-full w-full">
      <div ref={aboutRef}>
        <About />
      </div>
      <div className="mt-12" ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={resumeRef}>
        <Resume />
      </div>
      <div ref={blogRef}>
        <Blog />
      </div>
    </div>
  );
}

<h1>Test 2</h1>;
