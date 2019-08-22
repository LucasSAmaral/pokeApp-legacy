import React from "react";
import FeatureTitle from "./featureTitle";
import PokeButtonRoute from "./pokeButtonRoute";

const PokeAppFeature = ({ children, buttonLabel, path }) => (
  <div className="container__pokeApp-features">
    <FeatureTitle>{children}</FeatureTitle>
    <PokeButtonRoute path={path} />
    <div className="buttonLabel">{buttonLabel}</div>
  </div>
);

export default PokeAppFeature;
