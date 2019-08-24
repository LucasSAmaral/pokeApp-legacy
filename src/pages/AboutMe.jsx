import React, { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    document.title = "About Me";
  });
  return (
    <div className="container__pokeApp">
      <h1 className="pokeApp__FeatureTitle">About Me</h1>
    </div>
  );
};

export default AboutMe;
