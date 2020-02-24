import React from "react";
import Helmet from "react-helmet";
import ContainerPokeApp from "../../components/containerPokeApp/containerPokeApp";

export default props => {
  return (
    <ContainerPokeApp>
      <Helmet title="About Me" />
      <h1 className="pokeApp__FeatureTitle">About Me</h1>
    </ContainerPokeApp>
  );
};
