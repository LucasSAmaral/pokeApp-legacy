import React from "react";
import guessPokemonName from "../../helpers/guessPokemonName";

const InputContainer = props => (
  <div className="pokeApp__input-container">
    <input
      type="text"
      name="pokemonName"
      id="pokemonName"
      onKeyUp={e => guessPokemonName(e.target.value, props)}
    />
  </div>
);

export default InputContainer;
