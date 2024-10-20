import Card from "@/components/Card";
import React from "react";
import profileInfo from "@/components/navigation/profile-info";

const About = () => {
  return (
    <div className="grid grid-rows-[auto_auto] justify-center items-center">
      <div className="grid-rows-1 mb-4 h-36 text-8xl">
        <Card>About</Card>
      </div>
      <div className="grid-rows-2 w-full">
        <div className="grid grid-cols-2 gap-4 w-full">
          <>
            {profileInfo.map((profile) => (
              <div className="w-120 h-96" key={profile.title}>
                <Card>
                  <div className="ml-4 mr-4">
                    <p className="text-6xl">{profile.title}</p>
                    <p className="text-2xl font-extralight mt-8 leading-10">
                      {profile.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default About;
