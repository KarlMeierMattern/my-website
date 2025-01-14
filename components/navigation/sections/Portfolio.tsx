import Card from "@/components/Card";
import React from "react";
import Image from "next/image";
import { portfolioData } from "@/components/navigation/userData";

export default function Portfolio() {
  return (
    <div className="mt-20 px-8 lg:mt-40">
      <div className="text-4xl pb-12 italic lg:text-8xl">Portfolio</div>
      <div className={`grid grid-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:gap-8`}>
        {portfolioData.map((item, index) => (
          <div
            className={`transition-transform duration-500 ${
              index % 2 === 0 ? "lg:translate-y-4" : "lg:translate-y-12"
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
                <h3 className="text-lg font-bold lg:text-4xl lg:font-semibold lg:pt-4">
                  {item.title}
                </h3>
                <p className="text-base pt-2 lg:text-xl lg:pt-8 font-extralight">
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
