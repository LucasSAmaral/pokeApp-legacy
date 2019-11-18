import React from "react";
import FeatureTitle from "../featureTitle/featureTitle";
import PokeButtonRoute from "../pokeButton/pokeButtonRoute";

const PokeAppFeature = props => (
  <div className="container__pokeApp-features">
    <FeatureTitle>{props.children}</FeatureTitle>
    <PokeButtonRoute path={props.path} buttonLabel={props.buttonLabel} />
  </div>
);

export default PokeAppFeature;
