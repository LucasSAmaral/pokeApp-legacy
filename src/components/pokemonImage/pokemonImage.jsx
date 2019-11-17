import React from "react";

const PokemonImage = props => (
  <img className={`pokeApp__pokeImage ${props.class}`} src={props.src} alt="" />
);

export default PokemonImage;
