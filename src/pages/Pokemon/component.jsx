import React from "react";
import Helmet from "react-helmet";
import ContainerPokeApp from "../../components/containerPokeApp/containerPokeApp";

export default props => {
  return (
    <ContainerPokeApp>
      <Helmet title="Pokémon" />
      <h1 className="pokeApp__FeatureTitle">Pokémon</h1>
    </ContainerPokeApp>
  );
};
