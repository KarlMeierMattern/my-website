"use client";

import Navbar from "@/components/navigation/Navbar";
import Content from "@/components/navigation/Content";
import Image from "next/image";
import landscape from "@/app/public/images/landscape.png";
import { useState } from "react";
import Contact from "@/components/navigation/sections/Contact";

export default function Home() {
  const [section, setSection] = useState("");

  return (
    <main className="bg-zinc-50 min-h-screen pb-96">
      <div className="relative">
        <Image
          className="w-screen h-screen object-cover"
          src={landscape}
          alt="Landscape picture"
        />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <Navbar setSection={setSection} selectedSection={section} />
        </div>
      </div>
      <section className="grid grid-cols-[0.5fr_1fr_0.5fr]">
        <div className="col-start-2">
          <Content section={section} />
        </div>
        <Contact section={section} className="col-span-3 mt-8" />
      </section>
    </main>
  );
}
