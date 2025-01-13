"use client";

import Button from "@/components/navigation/Button";

type NavbarProps = {
  setSection: (section: string) => void;
  selectedSection: string;
  isLargeScreen: boolean;
};

export default function Navbar({
  setSection,
  selectedSection,
  isLargeScreen,
}: NavbarProps) {
  const navbarOptions = ["about", "portfolio", "resume", "library", "contact"];

  return (
    <div>
      <nav
        className={`bg-zinc-400 bg-opacity-40 backdrop-blur-sm mx-auto ${
          isLargeScreen ? "rounded-xl p-1" : "rounded-lg p-1"
        }`}
      >
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
