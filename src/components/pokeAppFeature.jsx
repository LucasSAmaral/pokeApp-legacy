import React from "react";
import FeatureTitle from "./featureTitle";
import PokeButton from "./pokeButton";

const PokeAppFeature = ({ children, buttonLabel }) => (
  <div className="container__pokeApp-features">
    <FeatureTitle>{children}</FeatureTitle>
    <PokeButton />
    <div className="buttonLabel">{buttonLabel}</div>
  </div>
);

export default PokeAppFeature;
