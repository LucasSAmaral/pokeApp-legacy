import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import { path } from "ramda";
import AppText from "../../assets/AppText/AppText.json";
import ContainerPokeApp from "../../components/containerPokeApp/containerPokeApp";

const PokedexPageText = path(["PokedexPageText", "PageTitle"], AppText);

export default props => {
  useComponentDidMount(() => {
    document.title = "Pokédex";
  });

  return (
    <ContainerPokeApp>
      <h1 className="pokeApp__FeatureTitle">{PokedexPageText}</h1>
    </ContainerPokeApp>
  );
};
