import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import randomizeNumber from "../../helpers/randomizeNumber";
import { store } from "../..";
import { pathOr } from "ramda";
import getPokemons from "../../helpers/getPokemons";

export default props => {
  const state = store.getState();
  const pokemonName = pathOr("", ["pokemon", "pokemonName"], state);
  useComponentDidMount(() => {
    document.title = "Who Is This Pokémon?";
    const randomNumber = randomizeNumber(1, 151);
    props.onPokemonNumberFetched(randomNumber);
    const pokemons = getPokemons(0, 151);
    pokemons
      .then(pokemon => {
        props.onPokemonNameFetched(pokemon[randomNumber].name);
        props.onPokemonsUrlFetched(pokemon[randomNumber].url);
        console.log("Inside Promise", state);
      })
      .catch(error => {
        console.log(error);
      });
    console.log("Outside Promise", state);
  });
  return (
    <div className="container__pokeApp">
      <h1>Who Is This Pokémon?</h1>
      <h2>{pokemonName}</h2>
    </div>
  );
};
