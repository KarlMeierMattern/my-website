"use client"

import React, { useState } from 'react';
import About from "@/components/navigation/navbar/sections/About";
import Resume from "@/components/navigation/navbar/sections/Resume";
import Portfolio from "@/components/navigation/navbar/sections/Portfolio";
import Blog from "@/components/navigation/navbar/sections/Blog";
import Contact from "@/components/navigation/navbar/sections/Contact";

type NavbarProps = {
    setSection: (section: string) => void;
}

type MainContentProps = {
    section: string;
}

const Navoptions = ({ setSection }: NavbarProps) => (
  <nav className="flex justify-items-center items-center text-white pt-4 pb-4 ml-8">
    <button className="" onClick={() => setSection('about')}>About</button>
    <button className="ml-2" onClick={() => setSection('resume')}>Resume</button>
    <button className="ml-2" onClick={() => setSection('portfolio')}>Portfolio</button>
    <button className="ml-2" onClick={() => setSection('blog')}>Blog</button>
    <button className="ml-2" onClick={() => setSection('contact')}>Contact</button>
  </nav>
);

const MainContent = ({ section }: MainContentProps) => {
  switch (section) {
    case 'about':
      return <About />;
    case 'resume':
      return <Resume />;
    case 'portfolio':
      return <Portfolio />;
    case 'blog':
        return <Blog />
    case 'contact':
        return <Contact />
    default:
      return null;
  }
};

const Navbar = () => {
  const [section, setSection] = useState('about');

  return (
    <div className="grid grid-rows-[auto_1fr] w-full h-full">
        <Navoptions setSection={setSection} />
        <MainContent section={section} />
    </div>
  );
};

export default Navbar;