import React from "react";
import Helmet from "react-helmet";
import ContainerPokeApp from "../../components/containerPokeApp/containerPokeApp";

export default props => {
  return (
    <ContainerPokeApp>
      <Helmet title="About The App" />
      <h1 className="pokeApp__FeatureTitle">About The App</h1>
    </ContainerPokeApp>
  );
};
