"use client";

import React, { useState } from 'react';
import About from "@/components/navigation/navbar/sections/About";
import Resume from "@/components/navigation/navbar/sections/Resume";
import Portfolio from "@/components/navigation/navbar/sections/Portfolio";
import Blog from "@/components/navigation/navbar/sections/Blog";
import Contact from "@/components/navigation/navbar/sections/Contact";

type NavbarProps = {
    setSection: (section: string) => void;
    setIsLoaded: (isLoaded: boolean) => void;
};

type MainContentProps = {
    section: string;
};

const NavOptions = ({ setSection, setIsLoaded }: NavbarProps) => {

  const handleClick = (section: string) => {
    setIsLoaded(false); // Trigger fade-out
    setTimeout(() => {
      setSection(section);
      setIsLoaded(true); // Trigger fade-in
    }, 400); // Duration of fade-out
  };

  return (
    <nav className="flex justify-items-center items-center text-white pt-4 pb-4 ml-8">
      <button onClick={() => handleClick('about')}>About</button>
      <button className="ml-4" onClick={() => handleClick('resume')}>Resume</button>
      <button className="ml-4" onClick={() => handleClick('portfolio')}>Portfolio</button>
      <button className="ml-4" onClick={() => handleClick('blog')}>Blog</button>
      <button className="ml-4" onClick={() => handleClick('contact')}>Contact</button>
    </nav>
  );
};

const MainContent = ({ section }: MainContentProps) => {
  switch (section) {
    case 'about':
      return <About />;
    case 'resume':
      return <Resume />;
    case 'portfolio':
      return <Portfolio />;
    case 'blog':
      return <Blog />;
    case 'contact':
      return <Contact />;
    default:
      return null;
  }
};

const Navbar = () => {
  const [section, setSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div className="flex flex-col h-full w-full">
      <NavOptions setSection={setSection} setIsLoaded={setIsLoaded} />
      <div className={`flex-grow transition-opacity duration-400 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <MainContent section={section} />
      </div>
    </div>
  );
};

export default Navbar;