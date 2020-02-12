import React from "react";
import {
  POKEMON_LOADING,
  POKEMON_COVERED,
  POKEMON_GUESSED
} from "../../pages/whoIsThisPokemon/whoIsThisPokemon.reducer";
import Loading from "../Loading/Loading";
import PokemonImage from "../pokemonImage/pokemonImage";

const PokemonContainer = props => {
  const { pokemonImage } = props.pokemon;
  const { status } = props.whoIsThisPokemon;
  switch (status) {
    case POKEMON_LOADING:
      return <Loading />;
    case POKEMON_COVERED:
      return <PokemonImage cover={true} pokemonImage={pokemonImage} />;
    case POKEMON_GUESSED:
      return <PokemonImage pokemonImage={pokemonImage} />;

    default:
      return <Loading />;
  }
};

export default PokemonContainer;
