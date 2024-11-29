import Card from "../../Card";
import React from "react";
import Image from "next/image";
import { portfolioData } from "@/components/navigation/userData";

export default function Portfolio() {
  return (
    <div className="grid justify-center items-center mt-40">
      <div className="text-8xl italic pb-12">Portfolio</div>
      <div className="grid grid-cols-2 gap-8">
        {portfolioData.map((item, index) => (
          <div
            className={`transition-transform duration-500 ${
              index % 2 === 0 ? "translate-y-4" : "translate-y-12"
            }`}
            key={index}
          >
            <Card>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="image-container rounded-xl mb-4">
                  <Image
                    className="rounded-xl"
                    src={item.src}
                    alt={item.title}
                  />
                </div>
                <h3 className="text-3xl font-semibold">{item.title}</h3>
                <p className="text-lg mt-2 font-extralight">
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
