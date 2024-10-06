import Card from '@/components/card'
import React from 'react'

type PortfolioProps = {
    title: string;
    description: string;
}

const PortfolioItem = ({ title, description }: PortfolioProps) => (
    <div className="grid grid-rows-[2fr_auto_auto] gap-2 w-[350px] h-[350px]">
      <Card>Portfolio</Card>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )

export default function Portfolio() {
    const portfolioItems = [
        { title: "Project 1", description: "Description for Project 1" },
        { title: "Project 2", description: "Description for Project 2" },
        { title: "Project 3", description: "Description for Project 3" },
        { title: "Project 4", description: "Description for Project 4" },
        { title: "Project 5", description: "Description for Project 5" },
        { title: "Project 6", description: "Description for Project 6" },
        { title: "Project 7", description: "Description for Project 7" },
        { title: "Project 8", description: "Description for Project 8" },
        { title: "Project 8", description: "Description for Project 8" },
        { title: "Project 8", description: "Description for Project 8" },
        { title: "Project 8", description: "Description for Project 8" },
        { title: "Project 8", description: "Description for Project 8" },
    ];

    return (
        <div className="grid grid-cols-[repeat(2,1fr)] gap-10 pr-72 p-6 overflow-y-auto">
          {portfolioItems.map((item, index) => (
            <PortfolioItem 
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      )
}