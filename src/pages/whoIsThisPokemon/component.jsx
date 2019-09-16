import React from "react";
import useComponentDidMount from "../../helpers/index";

export default props => {
  useComponentDidMount(() => {
    document.title = "Who Is This Pokémon?";
    props.onPokemonIdFetched(1);
  });
  return (
    <div className="container__pokeApp">
      <h1>Who Is This Pokémon?</h1>
    </div>
  );
};
