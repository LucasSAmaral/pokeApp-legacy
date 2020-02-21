import React, { useState } from "react";
import guessPokemonName from "../../helpers/guessPokemonName";

const InputContainer = props => {
  const [inputValue, setIntputValue] = useState("");
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="pokeApp__input-container">
      <input
        type="text"
        name="pokemonName"
        id="pokemonName"
        value={inputValue}
        disabled={disabled}
        onChange={evt =>
          guessPokemonName(evt.target.value, props, setIntputValue)(setDisabled)
        }
      />
    </div>
  );
};

export default InputContainer;
