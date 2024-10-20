"use client";

import Button from "@/components/navigation/Button";

type NavbarProps = {
  setSection: (section: string) => void;
  selectedSection: string;
};

export default function Navbar({ setSection, selectedSection }: NavbarProps) {
  const navbarOptions = ["about", "portfolio", "resume", "blog", "contact"];

  return (
    <div className="flex flex-col w-full">
      <nav className="flex justify-items-center items-center text-black p-2 ml-8 bg-gray-200 rounded-xl w-fit mx-auto mt-4">
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
