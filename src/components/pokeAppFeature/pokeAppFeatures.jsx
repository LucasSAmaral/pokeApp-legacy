import React from "react";
import PokeAppFeature from "./pokeAppFeature";
import AppText from "../../assets/AppText/AppText.json";
import { path } from "ramda";

const PokeAppFeatureText = path(
  ["mainPageText", "PokeAppFeatureText"],
  AppText
);

const PokeAppFeatures = () =>
  PokeAppFeatureText.map((feature, index) => (
    <PokeAppFeature
      key={index}
      path={feature.path}
      buttonLabel={feature.buttonLabel}
    >
      {feature.children}
    </PokeAppFeature>
  ));

export default PokeAppFeatures;
