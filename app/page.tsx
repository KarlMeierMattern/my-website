"use client";

import Navbar from "@/components/navigation/Navbar";
import Content from "@/components/navigation/Content";
import Image from "next/image";
// import profilePic from "@/app/public/images/profilePic.png";
import landscape from "@/app/public/images/landscape.png";
import { useState, useRef } from "react";

export default function Home() {
  const [section, setSection] = useState("about");
  const [isLoaded, setIsLoaded] = useState(true);
  const contentRef = useRef<HTMLDivElement | null>(null); // Create a ref for the content section

  return (
    <main className="bg-zinc-500 min-h-screen font-[family-name:var(--font-geist-sans)] pb-96">
      <div className="relative">
        <Image
          className="w-screen h-screen object-cover"
          src={landscape}
          alt="Landscape picture"
        />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <Navbar
            setSection={setSection}
            setIsLoaded={setIsLoaded}
            scrollToContent={contentRef}
          />
        </div>
      </div>
      <section className="grid grid-cols-[0.5fr_1fr_0.5fr] mt-40">
        <div className="col-start-2" ref={contentRef}>
          <Content section={section} isLoaded={isLoaded} />
        </div>
      </section>
    </main>
  );
}
