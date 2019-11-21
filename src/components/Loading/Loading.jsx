import React from "react";
import { store } from "../..";
import { getLoading } from "../../pages/whoIsThisPokemon/whoIsThisPokemon.selector";

const Loading = props => {
  const state = store.getState();
  const isLoading = getLoading(state);
  return (
    isLoading && (
      <div className="pokeApp__loading--container">
        <div className="pokeApp__loading"></div>
      </div>
    )
  );
};

export default Loading;
