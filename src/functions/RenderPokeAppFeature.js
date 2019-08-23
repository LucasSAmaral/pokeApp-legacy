import React from "react";
import PokeAppFeature from "../components/pokeAppFeature";
import AppText from "../assets/AppText/AppText.json";

const RenderPokeAppFeature = () =>
  AppText.map((feature, index) => (
    <PokeAppFeature
      key={index}
      path={feature.path}
      buttonLabel={feature.buttonLabel}
    >
      {feature.children}
    </PokeAppFeature>
  ));

export default RenderPokeAppFeature;
