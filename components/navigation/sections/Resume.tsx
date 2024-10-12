import Card from "@/components/Card";
import React from "react";

const Resume = () => {
  return (
    <div className="pr-72 p-6">
      <Card>
        <article>
          <header>
            <h2 className="text-2xl font-bold mb-4 pt-4 pl-4">Resume</h2>
          </header>
          <section className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 flex justify-center items-center bg-slate-600 animate-ping rounded-full">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <ol className="ml-11 text-sm">
              <li className="relative mb-5">
                <h4 className="text-sm font-semibold leading-relaxed mb-1">
                  University school of the arts
                </h4>
                <span className="text-yellow-500 font-normal leading-loose">
                  2007 — 2008
                </span>
                <p className="text-gray-400 font-light leading-relaxed mt-2">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>
              <li className="relative mb-5">
                <h4 className="text-sm font-semibold leading-relaxed mb-1">
                  New york academy of art
                </h4>
                <span className="text-yellow-500 font-normal leading-loose">
                  2006 — 2007
                </span>
                <p className="text-gray-400 font-light leading-relaxed mt-2">
                  Ratione voluptatem sequi nesciunt, facere quisquams facere
                  menda ossimus, omnis voluptas assumenda est omnis..
                </p>
              </li>
              <li className="relative mb-5">
                <h4 className="text-sm font-semibold leading-relaxed mb-1">
                  High school of art and design
                </h4>
                <span className="text-yellow-500 font-normal leading-loose">
                  2002 — 2004
                </span>
                <p className="text-gray-400 font-light leading-relaxed mt-2">
                  Duis aute irure dolor in reprehenderit in voluptate, quila
                  voluptas mag odit aut fugit, sed consequuntur magni dolores
                  eos.
                </p>
              </li>
            </ol>
          </section>
          <section className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 flex justify-center items-center bg-slate-600 animate-ping rounded-full">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <ol className="ml-11 text-sm">
              <li className="relative mb-5">
                <h4 className="text-sm font-semibold leading-relaxed mb-1">
                  Creative director
                </h4>
                <span className="text-yellow-500 font-normal leading-loose">
                  2015 — Present
                </span>
                <p className="text-gray-400 font-light leading-relaxed mt-2">
                  Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>
              <li className="relative mb-5">
                <h4 className="text-sm font-semibold leading-relaxed mb-1">
                  Art director
                </h4>
                <span className="text-yellow-500 font-normal leading-loose">
                  2013 — 2015
                </span>
                <p className="text-gray-400 font-light leading-relaxed mt-2">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>
              <li className="relative mb-5">
                <h4 className="text-sm font-semibold leading-relaxed mb-1">
                  Web designer
                </h4>
                <span className="text-yellow-500 font-normal leading-loose">
                  2010 — 2013
                </span>
                <p className="text-gray-400 font-light leading-relaxed mt-2">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>
            </ol>
          </section>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-5">My skills</h3>
            <ul className="p-5 bg-white shadow-md rounded-md">
              <li className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="text-base font-semibold">Web design</h5>
                  <data value="80" className="text-gray-400 text-xs font-light">
                    80%
                  </data>
                </div>
                <div className="bg-gray-800 w-full h-2 rounded-md">
                  <div
                    className="bg-yellow-400 h-full rounded-md"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="text-base font-semibold">Graphic design</h5>
                  <data value="70" className="text-gray-400 text-xs font-light">
                    70%
                  </data>
                </div>
                <div className="bg-gray-800 w-full h-2 rounded-md">
                  <div
                    className="bg-yellow-400 h-full rounded-md"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="text-base font-semibold">Branding</h5>
                  <data value="90" className="text-gray-400 text-xs font-light">
                    90%
                  </data>
                </div>
                <div className="bg-gray-800 w-full h-2 rounded-md">
                  <div
                    className="bg-yellow-400 h-full rounded-md"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="text-base font-semibold">WordPress</h5>
                  <data value="50" className="text-gray-400 text-xs font-light">
                    50%
                  </data>
                </div>
                <div className="bg-gray-800 w-full h-2 rounded-md">
                  <div
                    className="bg-yellow-400 h-full rounded-md"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </section>
        </article>
      </Card>
    </div>
  );
};

export default Resume;
