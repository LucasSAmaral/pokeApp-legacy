import React, { useEffect } from "react";

const AboutTheApp = () => {
  useEffect(() => {
    document.title = "About The App";
  });
  return (
    <div className="container__pokeApp">
      <h1 className="pokeApp__FeatureTitle">About The App</h1>
    </div>
  );
};

export default AboutTheApp;
