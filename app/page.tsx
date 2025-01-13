"use client";

import Navbar from "@/components/navigation/Navbar";
import Content from "@/components/navigation/Content";
import Image from "next/image";
import landscape from "@/app/public/images/landscape.png";
import imageSmall from "@/app/public/images/img-no-bkg.png";
import { useState, useEffect } from "react";
import Contact from "@/components/navigation/sections/Contact";

export default function Home() {
  const [section, setSection] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Use a breakpoint (e.g., 768px)
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-zinc-50 min-h-screen">
      <section className="border-red-500 bg-zinc-300 border-4 w-screen h-screen">
        <Image
          className={`${
            isLargeScreen
              ? "md:w-screen md:h-screen h-auto object-cover"
              : "w-3/4 absolute bottom-0 left-4 z-20 opacity-80"
          } `}
          src={isLargeScreen ? landscape : imageSmall}
          alt="Landscape picture"
        />
        <div className="fixed top-4 left-0 right-0 z-10 flex justify-center">
          <Navbar
            setSection={setSection}
            selectedSection={section}
            isLargeScreen={isLargeScreen}
          />
        </div>
        {!isLargeScreen && (
          <div>
            <p className="absolute bottom-20 left-4 text-6xl text-white font-bold z-30">
              karl
            </p>
            <p className="absolute bottom-4 left-16 text-6xl text-white font-bold z-30">
              alexander
            </p>{" "}
          </div>
        )}
      </section>
      <section className="grid grid-cols-[0.5fr_1fr_0.5fr]">
        <div className="col-start-2">
          <Content section={section} />
        </div>
        <Contact section={section} className="col-span-3 mt-8" />
      </section>
    </main>
  );
}
