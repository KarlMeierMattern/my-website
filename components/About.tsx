import Card from "./Card";
import React from "react";
import { profileInfo } from "./userData";

const About = () => {
  return (
    <div
      className={`mt-20 px-8 lg:mt-40 lg:grid lg:justify-center lg:items-center `}
    >
      <div className="text-4xl lg:text-8xl italic pb-12">About</div>
      <div>
        <p className="text-lg lg:text-2xl pb-36 md:pb-12">
          I like to build things. I follow my curiosity and build things that I
          think are interesting. I like to build things that help people.
          I&apos;m a software engineer with a passion for understanding how
          things work and making them better. I have a deep passion for taking
          complex ideas and making them simple to understand.
        </p>
      </div>
      <div
        className={`grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-8`}
      >
        {profileInfo.map((profile, index) => (
          <div
            key={profile.title}
            className={`transition-transform duration-500 ${
              index % 2 === 0 ? "lg:translate-y-4" : "lg:translate-y-12"
            } `}
          >
            <Card>
              <p className={`text-lg font-bold lg:text-4xl lg:font-semibold`}>
                {profile.title}
              </p>
              <p
                className={`text-base pt-2 font-extralight lg:text-xl lg:pt-8 lg:leading-10`}
              >
                {profile.description}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
