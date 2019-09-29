import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import randomizeNumber from "../../helpers/randomizeNumber";
// import { store } from "../..";
import getPokemons from "../../helpers/getPokemons";

export default props => {
  useComponentDidMount(() => {
    document.title = "Who Is This Pokémon?";
    const randomNumber = randomizeNumber(1, 151);
    props.onPokemonNumberFetched(randomNumber);
    const pokemons = getPokemons(0, 151);
    // props.onPokemonsFetched(pokemons);
    // const state = store.getState();
    console.log(pokemons);
  });
  return (
    <div className="container__pokeApp">
      <h1>Who Is This Pokémon?</h1>
    </div>
  );
};
