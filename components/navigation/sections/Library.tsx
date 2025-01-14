import React from "react";
import Image from "next/image";
import { bookList } from "@/components/navigation/userData";

const Library = () => {
  return (
    <div className="mt-20 px-8 lg:mt-40 lg:grid lg:justify-center lg:items-center">
      <div className="text-4xl lg:text-8xl italic pb-12">Library</div>
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8">
        {bookList.map((book, index) => (
          <div
            key={index}
            className="flex flex-row items-start image-container"
          >
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              <Image src={book.src} alt={book.title} />
            </a>
            <div className="text-sm sm:text-lg md:text-xl lg:text-md pl-4 w-full h-full">
              {book.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
