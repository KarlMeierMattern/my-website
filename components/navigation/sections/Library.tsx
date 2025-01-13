import React from "react";
import Image from "next/image";
import { bookList } from "@/components/navigation/userData";

const Library = () => {
  return (
    <div className="mt-20 px-8 md:mt-40 md:grid md:justify-center md:items-center">
      <div className="text-4xl md:text-8xl italic pb-12">Library</div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8">
        {bookList.map((book, index) => (
          <div
            key={index}
            className="flex flex-row items-start image-container"
          >
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              <Image src={book.src} alt={book.title} />
            </a>
            <div className="text-xs md:text-sm pl-4 w-full h-full">
              {book.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
