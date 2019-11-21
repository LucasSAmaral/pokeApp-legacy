import React from "react";
import { store } from "../..";
import { getLoading } from "../../pages/whoIsThisPokemon/whoIsThisPokemon.selector";

const PokemonImage = props => {
  const state = store.getState();
  const isLoading = getLoading(state);
  return (
    !isLoading && (
      <img
        draggable="false"
        className={`pokeApp__pokeImage ${props.class}`}
        src={props.src}
        alt=""
      />
    )
  );
};

export default PokemonImage;
