"use client";

import Navbar from "@/components/navigation/Navbar";
import Content from "@/components/navigation/Content";
import Image from "next/image";
import landscape from "@/app/public/images/landscape.png";
import alsoMe from "@/app/public/images/alsoMe.png";
import { useState } from "react";
import Contact from "@/components/navigation/sections/Contact";

export default function Home() {
  const [section, setSection] = useState("");

  return (
    <main className="bg-zinc-50 h-screen">
      <section className=" bg-zinc-300 w-screen h-screen">
        <div className="fixed top-4 left-0 right-0 w-screen flex justify-center z-20">
          <Navbar setSection={setSection} selectedSection={section} />
        </div>
        <div className="z-10 md:w-full md:h-screen">
          <Image
            className="md:object-cover md:opacity-90 opacity-0 w-full h-full"
            src={landscape}
            alt="Landscape picture"
          />
        </div>
        <div className="md:hidden">
          <Image
            className="absolute bottom-0 right-0 w-3/4 z-20 opacity-80"
            src={alsoMe}
            alt="Alternate picture"
          />
          <div>
            <p className="absolute bottom-20 left-4 text-6xl font-sans italic opacity-60 text-white font-bold z-30">
              karl
            </p>
            <p className="absolute bottom-4 left-16 text-6xl font-sans opacity-90 text-white font-bold z-30">
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
