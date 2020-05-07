import React from "react";
import {
  POKEMON_LOADING,
  POKEMON_COVERED,
  POKEMON_GUESSED,
} from "../../pages/whoIsThatPokemon/whoIsThatPokemon.reducer";
import Loading from "../Loading/Loading";
import PokemonImage from "../pokemonImage/pokemonImage";

const PokemonContainer = ({ pokemonImage, status }) => {
  switch (status) {
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
    case POKEMON_LOADING:
    default:
      return (
        <div className="pokemon__container">
          <Loading />
        </div>
      );
  }
};

export default PokemonContainer;
