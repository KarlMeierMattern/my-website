"use client";

import React, { useState } from "react";
import Button from "@/components/navigation/Button";

type NavbarProps = {
  setSection: (section: string) => void;
  setIsLoaded: (isLoaded: boolean) => void;
};

const NavOptions = ({ setSection, setIsLoaded }: NavbarProps) => {
  const [selectedSection, setSelectedSection] = useState<string>("about");

  // onclick, setSelected = true, className="... {setSelected && bg-white}"

  const handleClick = (section: string) => {
    setIsLoaded(false); // Trigger fade-out
    setSelectedSection(section); // Set the clicked section as selected
    setTimeout(() => {
      setSection(section);
      setIsLoaded(true); // Trigger fade-in
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

export default function Navbar({ setSection, setIsLoaded }: NavbarProps) {
  return (
    <div className="flex flex-col h-full w-full">
      <NavOptions setSection={setSection} setIsLoaded={setIsLoaded} />
    </div>
  );
}
