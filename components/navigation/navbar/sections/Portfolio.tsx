import Card from '@/components/card'
import React from 'react'

type PortfolioProps = {
    title: string;
    description: string;
}

const PortfolioItem = ({ title, description }: PortfolioProps) => (
    <div className="grid grid-rows-[2fr_auto_auto] gap-2">
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
    ];

    return (
        <div className="grid grid-cols-2 gap-6 p-6">
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