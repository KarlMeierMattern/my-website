"use client";

import React from "react";
import About from "@/components/navigation/sections/About";
import Resume from "@/components/navigation/sections/Resume";
import Portfolio from "@/components/navigation/sections/Portfolio";
import Blog from "@/components/navigation/sections/Blog";
import Contact from "@/components/navigation/sections/Contact";

type MainContentProps = {
  section: string;
  isLoaded: boolean;
};

const MainContent = ({ section }: MainContentProps) => {
  switch (section) {
    case "about":
      return <About />;
    case "resume":
      return <Resume />;
    case "portfolio":
      return <Portfolio />;
    case "blog":
      return <Blog />;
    case "contact":
      return <Contact />;
    default:
      return null;
  }
};

export default function Content({ section, isLoaded }: MainContentProps) {
  return (
    <div className="flex flex-col h-full w-full">
      <div
        className={`flex-grow transition-opacity duration-400 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <MainContent section={section} />
      </div>
    </div>
  );
}
