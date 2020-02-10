import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import ContainerPokeApp from "../../components/containerPokeApp/containerPokeApp";

export default props => {
  useComponentDidMount(() => {
    document.title = "About The App";
  });
  return (
    <ContainerPokeApp>
      <h1 className="pokeApp__FeatureTitle">About The App</h1>
    </ContainerPokeApp>
  );
};
