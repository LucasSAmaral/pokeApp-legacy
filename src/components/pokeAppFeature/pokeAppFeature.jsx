import React from "react";
import FeatureTitle from "../featureTitle/featureTitle";
import PokeButtonRoute from "../pokeButton/pokeButtonRoute";

const PokeAppFeature = props => (
  <div className="container__pokeApp-features">
    <FeatureTitle>{props.children}</FeatureTitle>
    <PokeButtonRoute path={props.path} />
    <div className="buttonLabel">{props.buttonLabel}</div>
  </div>
);

export default PokeAppFeature;
