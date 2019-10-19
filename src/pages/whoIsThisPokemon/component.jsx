import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import randomizeNumber from "../../helpers/randomizeNumber";
import { store } from "../..";
import { pathOr } from "ramda";
import FeatureMainTitle from "../../components/featureTitle/featureMainTitle";
import getPokemons from "../../helpers/getPokemons";
import PokeAppGame from "../../components/pokeAppGame/pokeAppGame";
import PokemonImage from "../../components/pokemonImage/pokemonImage";
import p25 from "../../assets/first_generation/25.png";
import {
  dispatchPokemonName,
  dispatchPokemonUrl,
  dispatchPokemonNumber,
  dispatchPokemonImage
} from "../../helpers/dispatchers";

export default props => {
  const state = store.getState();
  const pokemonName = pathOr("", ["pokemon", "pokemonName"], state);
  const pokemonImage = pathOr("", ["pokemon", "pokemonImage"], state);
  useComponentDidMount(() => {
    document.title = "Who Is This Pokémon?";
    const randomNumber = randomizeNumber(1, 151);
    const pokemons = getPokemons(0, 151);
    dispatchPokemonNumber(props, randomNumber);
    dispatchPokemonName(props, randomNumber, pokemons);
    dispatchPokemonUrl(props, randomNumber, pokemons);
    dispatchPokemonImage(props, randomNumber);
  });
  return (
    <div className="container__pokeApp">
      <PokeAppGame>
        <FeatureMainTitle>Who Is This Pokémon?</FeatureMainTitle>
        <PokemonImage src={p25} />
        <h2>{pokemonImage}</h2>
      </PokeAppGame>
    </div>
  );
};
