import React from "react";
import PokeAppFeature from "../components/pokeAppFeature";
import AppText from "../assets/AppText/AppText.json";
import { path } from "ramda";

const PokeAppFeatureText = path(
  ["mainPageText", "PokeAppFeatureText"],
  AppText
);

const RenderPokeAppFeature = () =>
  PokeAppFeatureText.map((feature, index) => (
    <PokeAppFeature
      key={index}
      path={feature.path}
      buttonLabel={feature.buttonLabel}
    >
      {feature.children}
    </PokeAppFeature>
  ));

export default RenderPokeAppFeature;
