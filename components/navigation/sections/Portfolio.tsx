import Card from "@/components/Card";
import React from "react";
import Image from "next/image";
import investcalc from "@/app/public/images/invest-calc.png";

type PortfolioProps = {
  title: string;
  description: string;
  src: string;
};

const PortfolioItem = ({ title, description, src }: PortfolioProps) => (
  <div className="mb-8">
    <Card>
      <div className="image-container rounded-xl">
        <Image
          className=""
          width={250}
          height={250}
          src={src}
          alt="investment calculator"
        />
      </div>
    </Card>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      src: investcalc,
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      src: investcalc,
    },
    {
      title: "Project 3",
      description: "Description for Project 1",
      src: investcalc,
    },
    {
      title: "Project 4",
      description: "Description for Project 1",
      src: investcalc,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-10 ">
      {portfolioItems.map((item, index) => (
        <PortfolioItem
          key={index}
          title={item.title}
          description={item.description}
          src={item.src}
        />
      ))}
    </div>
  );
}
