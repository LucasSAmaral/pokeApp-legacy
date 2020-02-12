import React from "react";

const PokemonImage = props => {
  return (
    <img
      draggable="false"
      className={`pokeApp__pokeImage ${props.cover ? "cover" : ""}`}
      src={props.pokemonImage}
      alt=""
    />
  );
};

export default PokemonImage;
