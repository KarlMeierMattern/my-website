"use client";

import Navbar from "@/components/navigation/Navbar";
import Content from "@/components/navigation/Content";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
// import profilePic from "@/app/public/images/profilePic.png";
import landscape from "@/app/public/images/landscape.png";
import { useState } from "react";

export default function Home() {
  const [section, setSection] = useState("about");
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <main className="bg-zinc-300 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="relative">
        <Image
          className="w-full h-full"
          src={landscape}
          alt="Landscape picture"
        />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <Navbar setSection={setSection} setIsLoaded={setIsLoaded} />
        </div>
      </div>
      <section className="grid grid-cols-[0.5fr_1fr]">
        <div className="col-start-1">
          <Sidebar />
        </div>
        <div className="col-start-2">
          <Content section={section} isLoaded={isLoaded} />
        </div>
      </section>
    </main>
  );
}
