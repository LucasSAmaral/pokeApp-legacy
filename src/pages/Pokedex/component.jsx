import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import { path } from "ramda";
import AppText from "../../assets/AppText/AppText.json";

const PokedexPageText = path(["PokedexPageText", "PageTitle"], AppText);

export default props => {
  useComponentDidMount(() => {
    document.title = "Pokédex";
  });

  return (
    <div className="container__pokeApp">
      <h1 className="pokeApp__FeatureTitle">{PokedexPageText}</h1>
    </div>
  );
};
