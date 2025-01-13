import Card from "@/components/Card";
import React from "react";
import Image from "next/image";
import { portfolioData } from "@/components/navigation/userData";

export default function Portfolio() {
  return (
    <div className="mt-20 px-8 md:mt-40 md:grid md:justify-center md:items-center">
      <div className="text-4xl md:text-8xl italic pb-12">Portfolio</div>
      <div className={`grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-8`}>
        {portfolioData.map((item, index) => (
          <div
            className={`transition-transform duration-500 ${
              index % 2 === 0 ? "md:translate-y-4" : "md:translate-y-12"
            }`}
            key={index}
          >
            <Card>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="image-container rounded-xl mb-4 ">
                  <Image
                    className="rounded-xl"
                    src={item.src}
                    alt={item.title}
                  />
                </div>
                <h3 className="text-lg font-bold md:text-4xl md:font-semibold md:pt-4">
                  {item.title}
                </h3>
                <p className="text-base pt-2 md:text-xl md:pt-8 font-extralight">
                  {item.description}
                </p>
              </a>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
