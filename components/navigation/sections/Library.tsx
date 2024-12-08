import React from "react";
import Image from "next/image";
import { bookList } from "@/components/navigation/userData";

const Library = () => {
  return (
    <div className="w-full h-full mt-40">
      <div className="text-8xl italic pb-12">Library</div>
      <div className="grid grid-cols-3 gap-8">
        {bookList.map((book, index) => (
          <div
            key={index}
            className="flex flex-row items-start image-container"
          >
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full"
            >
              <Image src={book.src} alt={book.title} />
            </a>
            <div className="text-sm pl-4 w-full h-full">{book.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
