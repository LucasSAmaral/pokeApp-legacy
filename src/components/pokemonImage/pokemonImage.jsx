import React from "react";

const PokemonImage = props => {
  const { whoIsThisPokemon, pokemon } = props;
  const { loading, cover } = whoIsThisPokemon;
  const { pokemonImage } = pokemon;
  return (
    !loading && (
      <img
        draggable="false"
        className={`pokeApp__pokeImage ${cover ? "cover" : ""}`}
        src={pokemonImage}
        alt=""
      />
    )
  );
};

export default PokemonImage;
