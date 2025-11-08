"use client";

import Button from "@/components/Button";

type NavbarProps = {
  setSection: (section: string) => void;
  selectedSection: string;
};

export default function Navbar({ setSection, selectedSection }: NavbarProps) {
  const navbarOptions = ["about", "portfolio", "resume", "library", "contact"];

  return (
    <div>
      <nav className="bg-zinc-400 bg-opacity-40 backdrop-blur-sm mx-auto rounded-lg p-1 md:rounded-xl md:p-1">
        {navbarOptions.map((option) => (
          <Button
            isSelected={selectedSection === option}
            key={option}
            onClick={() => setSection(option)}
          >
            {option}
          </Button>
        ))}
      </nav>
    </div>
  );
}
