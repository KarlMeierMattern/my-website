import Card from "@/components/Card";
import React from "react";
import { profileInfo } from "@/components/navigation/userData";

const About = () => {
  return (
    <div className="grid justify-center items-center mt-40">
      <div className="text-8xl italic pb-12">About</div>
      <div>
        <p className="text-2xl pb-12">
          Aspiring software engineer with a passion for data science, ML, AI,
          statistical analysis, and predictive modelling. With a foundation in
          building software and a deep interest in solving complex problems, I
          am driven by the challenge of blending both fields to build intuitive
          web applications. While still building practical experience, I bring
          strong technical skills and a data-driven approach to problem-solving.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {profileInfo.map((profile, index) => (
          <div
            key={profile.title}
            className={`transition-transform duration-500 ${
              index % 2 === 0 ? "translate-y-4" : "translate-y-12"
            }`} // Conditional offset
          >
            <Card>
              <p className="text-4xl">{profile.title}</p>
              <p className="text-2xl font-extralight mt-8 leading-10">
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
