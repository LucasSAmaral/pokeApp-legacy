import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";

export default props => {
  useComponentDidMount(() => {
    document.title = "Pokémon";
  });
  return (
    <div className="container__pokeApp">
      <h1 className="pokeApp__FeatureTitle">Pokémon</h1>
    </div>
  );
};
