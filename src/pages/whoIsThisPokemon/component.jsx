import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import randomizeNumber from "../../helpers/randomizeNumber";
import { store } from "../..";
import getPokemons from "../../helpers/getPokemons";

export default props => {
  useComponentDidMount(() => {
    document.title = "Who Is This Pokémon?";
    const randomNumber = randomizeNumber(1, 151);
    props.onPokemonNumberFetched(randomNumber);
    const state = store.getState();
    Promise.resolve(getPokemons(0, 151))
      .then(pokemon => {
        props.onPokemonNameFetched(pokemon[randomNumber].name);
        props.onPokemonsUrlFetched(pokemon[randomNumber].url);
        const state = store.getState();
        console.log("Inside Promise", state);
      })
      .catch(error => {
        throw error;
      });
    console.log("Outside Promise", state);
  });
  return (
    <div className="container__pokeApp">
      <h1>Who Is This Pokémon?</h1>
    </div>
  );
};
