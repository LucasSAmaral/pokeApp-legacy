import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import ContainerPokeApp from "../../components/containerPokeApp/containerPokeApp";

export default props => {
  useComponentDidMount(() => {
    document.title = "About Me";
  });
  return (
    <ContainerPokeApp>
      <h1 className="pokeApp__FeatureTitle">About Me</h1>
    </ContainerPokeApp>
  );
};
