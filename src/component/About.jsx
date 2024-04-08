import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about-cont">
      <User name={"abhash kumar (functional component)"} />
      <UserClass name={"abhash kumar (Class component)"} />
    </div>
  );
};

export default About;
