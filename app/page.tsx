"use client";

import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Image from "next/image";
import { useState } from "react";
import Contact from "../components/Contact";

export default function Home() {
  const [section, setSection] = useState("");

  return (
    <main className="bg-zinc-50">
      <section className="bg-zinc-300 relative w-full min-h-[100dvh] overflow-hidden">
        <div className="fixed top-4 left-0 right-0 w-screen flex justify-center z-20">
          <Navbar setSection={setSection} selectedSection={section} />
        </div>
        <div className="relative w-full h-screen md:block hidden">
          <Image
            className="object-cover opacity-90 w-full h-full"
            src="/images/landscape.png"
            fill
            alt="Landscape picture"
            priority // Optional: For performance optimization
          />
        </div>
        <div className="md:hidden relative w-full h-screen flex-grow">
          <Image
            className="absolute bottom-0 left-0 z-20 opacity-80"
            src="/images/also-me.png"
            fill
            alt="Alternate picture"
          />
          <div>
            <p className="absolute top-24 right-20 text-6xl font-sans italic opacity-60 text-white font-bold z-30">
              karl
            </p>
            <p className="absolute top-40 right-4 text-6xl font-sans opacity-90 text-white font-bold z-30">
              alexander
            </p>
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-[0.5fr_1fr_0.5fr]">
        <div className="col-start-2">
          <Content section={section} />
        </div>
        <Contact section={section} className="col-span-3 mt-8" />
      </section>
    </main>
  );
}
