import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import randomizeNumber from "../../helpers/randomizeNumber";
import { store } from "../..";
import { pathOr } from "ramda";
import getPokemons from "../../helpers/getPokemons";
import {
  dispatchPokemonName,
  dispatchPokemonUrl,
  dispatchPokemonNumber
} from "../../helpers/dispatchers";

export default props => {
  const state = store.getState();
  const pokemonName = pathOr("", ["pokemon", "pokemonName"], state);
  useComponentDidMount(() => {
    document.title = "Who Is This Pokémon?";
    const randomNumber = randomizeNumber(1, 151);
    const pokemons = getPokemons(0, 151);
    dispatchPokemonNumber(props, randomNumber);
    dispatchPokemonName(props, randomNumber, pokemons);
    dispatchPokemonUrl(props, randomNumber, pokemons);
  });
  return (
    <div className="container__pokeApp">
      <h1>Who Is This Pokémon?</h1>
      <h2>{pokemonName}</h2>
    </div>
  );
};
