"use client";

import Navbar from "@/components/navigation/Navbar";
import Content from "@/components/navigation/Content";
import Image from "next/image";
import landscape from "@/app/public/images/landscape.png";
import alsoMe from "@/app/public/images/alsoMe.png";
import { useState, useEffect } from "react";
import Contact from "@/components/navigation/sections/Contact";
// import Arrow1 from "@/components/arrow";

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
      <section className=" bg-zinc-300  w-screen h-screen">
        <div className="fixed top-4 left-0 right-0 w-screen z-10 flex justify-center">
          <Navbar
            setSection={setSection}
            selectedSection={section}
            isLargeScreen={isLargeScreen}
          />
        </div>
        <Image
          className={`absolute bottom-0 right-0 z-20 opacity-80 md:w-screen md:h-screen md:object-cover md:opacity-90 md:z-0 w-3/4`}
          src={isLargeScreen ? landscape : alsoMe}
          alt="Landscape picture"
        />
        {!isLargeScreen && (
          <div>
            <p className="absolute bottom-20 left-4 text-6xl font-sans italic opacity-60 text-white font-bold z-30">
              karl
            </p>
            <p className="absolute bottom-4 left-16 text-6xl font-sans opacity-90 text-white font-bold z-30">
              alexander
            </p>{" "}
          </div>
        )}
      </section>
      <section className="md:grid md:grid-cols-[0.5fr_1fr_0.5fr]">
        <div className="col-start-2">
          <Content section={section} />
        </div>
        <Contact section={section} className="col-span-3 mt-8" />
      </section>
    </main>
  );
}
