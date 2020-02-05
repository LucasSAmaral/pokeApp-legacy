import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import ContainerPokeApp from "../../components/containerPokeApp/containerPokeApp";

export default props => {
  useComponentDidMount(() => {
    document.title = "Pokémon";
  });
  return (
    <ContainerPokeApp>
      <h1 className="pokeApp__FeatureTitle">Pokémon</h1>
    </ContainerPokeApp>
  );
};
