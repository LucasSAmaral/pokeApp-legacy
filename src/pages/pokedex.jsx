import React, { useEffect } from "react";
import { path } from "ramda";
import AppText from "../assets/AppText/AppText.json";

const PokedexPageText = path(["PokedexPageText", "PageTitle"], AppText);

const Pokedex = () => {
  useEffect(() => {
    document.title = "Pokédex";
  });

  return (
    <div className="container__pokeApp">
      <h1 className="pokeApp__FeatureTitle">{PokedexPageText}</h1>
    </div>
  );
};

export default Pokedex;
