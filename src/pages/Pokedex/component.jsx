import React from "react";
import Helmet from "react-helmet";
import { path } from "ramda";
import AppText from "../../assets/AppText/AppText.json";
import ContainerPokeApp from "../../components/containerPokeApp/containerPokeApp";

const PokedexPageText = path(["PokedexPageText", "PageTitle"], AppText);

export default props => {
  return (
    <ContainerPokeApp>
      <Helmet title="Pokédex" />
      <h1 className="pokeApp__FeatureTitle">{PokedexPageText}</h1>
    </ContainerPokeApp>
  );
};
