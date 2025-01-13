import Card from "@/components/Card";
import React from "react";
import { profileInfo } from "@/components/navigation/userData";

const About = () => {
  return (
    <div
      className={`mt-20 px-8 md:mt-40 md:grid md:justify-center md:items-center`}
    >
      <div className="text-4xl md:text-8xl italic pb-12">About</div>
      <div>
        <p className="text-lg md:text-2xl pb-12">
          Aspiring software engineer with a passion for data science, ML, AI,
          statistical analysis, and predictive modelling. With a foundation in
          building software and a deep interest in solving complex problems, I
          am driven by the challenge of blending both fields to build intuitive
          web applications. While still building practical experience, I bring
          strong technical skills and a data-driven approach to problem-solving.
        </p>
      </div>
      <div className={`grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-8`}>
        {profileInfo.map((profile, index) => (
          <div
            key={profile.title}
            className={`transition-transform duration-500 ${
              index % 2 === 0 ? "md:translate-y-4" : "md:translate-y-12"
            }`}
          >
            <Card>
              <p className={`text-lg font-bold md:text-4xl md:font-semibold`}>
                {profile.title}
              </p>
              <p
                className={`text-base pt-2 font-extralight md:text-xl md:pt-8 md:leading-10`}
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
