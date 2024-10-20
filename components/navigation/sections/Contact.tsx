import React, { useEffect, useRef } from "react";

type ContentProps = {
  section: string;
  className: string;
};

export default function Contact({ section, className }: ContentProps) {
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollToSection = () => {
      switch (section) {
        case "contact":
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    };
    scrollToSection();
  }, [section]);

  return (
    <div ref={contactRef} className={`min-h-screen flex flex-col ${className}`}>
      <footer className="bg-zinc-100 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-8xl text-zinc-600 mb-8">Get in Touch</p>
          <p className="text-4xl text-zinc-400 mb-8">
            karlmeiermattern@gmail.com
          </p>
          <hr className="mt-24 border-gray-300" />
          <p className="mt-8">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
