import Card from "@/components/Card";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faObjectUngroup } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="grid grid-rows-[auto_auto] justify-center items-center">
      <div className="grid-rows-1 mb-4">
        <Card>About</Card>
      </div>
      <div className="grid-rows-2 w-full">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="h-96">
            <Card>
              <div className="ml-4">
                <FontAwesomeIcon icon={faObjectUngroup} />
              </div>

              <div className="ml-4 mr-4">
                <p>
                  <strong>Web development</strong>
                </p>
                <p>I love creating & building responsive web apps</p>
              </div>
            </Card>
          </div>
          <div className="h-96">
            <Card>
              <FontAwesomeIcon icon={faObjectUngroup} />
              <div>
                <p>
                  <strong>Web development</strong>
                </p>
                <p>I love creating & building responsive web apps</p>
              </div>
            </Card>
          </div>
          <div className="h-96">
            <Card>
              <FontAwesomeIcon icon={faObjectUngroup} />
              <div>
                <p>
                  <strong>Web development</strong>
                </p>
                <p>I love creating & building responsive web apps</p>
              </div>
            </Card>
          </div>
          <div className="h-96">
            <Card>
              <FontAwesomeIcon icon={faObjectUngroup} />
              <div>
                <p>
                  <strong>Web development</strong>
                </p>
                <p>I love creating & building responsive web apps</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
