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
      return (
        <div className="pokemon__container">
          <Loading />
        </div>
      );
    case POKEMON_COVERED:
      return (
        <div className="pokemon__container">
          <PokemonImage cover={true} pokemonImage={pokemonImage} />
        </div>
      );
    case POKEMON_GUESSED:
      return (
        <div className="pokemon__container">
          <PokemonImage pokemonImage={pokemonImage} />
        </div>
      );

    default:
      return (
        <div className="pokemon__container">
          <Loading />
        </div>
      );
  }
};

export default PokemonContainer;
