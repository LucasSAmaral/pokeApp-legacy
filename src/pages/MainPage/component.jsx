import React from "react";
import PokeAppFeatures from "../../components/pokeAppFeature/pokeAppFeatures";
import ContainerPokeApp from "../../components/containerPokeApp/containerPokeApp";

export default props => {
  return (
    <ContainerPokeApp>
      <PokeAppFeatures />
    </ContainerPokeApp>
  );
};
