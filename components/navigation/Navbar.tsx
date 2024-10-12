"use client";

import React, { useState } from "react";
import Button from "@/components/navigation/Button";

type NavbarProps = {
  setSection: (section: string) => void;
  setIsLoaded: (isLoaded: boolean) => void;
  scrollToContent: React.RefObject<HTMLDivElement>; // Add the scrollToContent prop
};

const NavOptions = ({
  setSection,
  setIsLoaded,
  scrollToContent,
}: NavbarProps) => {
  const [selectedSection, setSelectedSection] = useState<string>("about");

  const handleClick = (section: string) => {
    setIsLoaded(false); // Trigger fade-out
    setSelectedSection(section); // Set the clicked section as selected
    setTimeout(() => {
      setSection(section);
      setIsLoaded(true); // Trigger fade-in
      scrollToContent.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 400); // Duration of fade-out
  };

  return (
    <nav className="flex justify-items-center items-center text-black p-2 ml-8 bg-gray-200 rounded-xl w-fit mx-auto mt-4">
      <Button
        onClick={() => handleClick("about")}
        isSelected={selectedSection === "about"}
      >
        About
      </Button>
      <div>
        <Button
          onClick={() => handleClick("resume")}
          isSelected={selectedSection === "resume"}
        >
          Resume
        </Button>
      </div>
      <div>
        <Button
          onClick={() => handleClick("portfolio")}
          isSelected={selectedSection === "portfolio"}
        >
          Portfolio
        </Button>
      </div>
      <div>
        <Button
          onClick={() => handleClick("blog")}
          isSelected={selectedSection === "blog"}
        >
          Blog
        </Button>
      </div>
      <div>
        <Button
          onClick={() => handleClick("contact")}
          isSelected={selectedSection === "contact"}
        >
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default function Navbar({
  setSection,
  setIsLoaded,
  scrollToContent,
}: NavbarProps) {
  return (
    <div className="flex flex-col w-full">
      <NavOptions
        setSection={setSection}
        setIsLoaded={setIsLoaded}
        scrollToContent={scrollToContent}
      />
    </div>
  );
}
