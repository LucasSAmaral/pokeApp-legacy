import React, { useState, createRef } from "react";
import guessPokemonName from "../../helpers/guessPokemonName";
import useComponentDidMount from "../../helpers/useComponentDidMount";

const inputText = createRef();

export const focusInput = () => {
  inputText.current.focus();
};

const InputContainer = props => {
  const [inputValue, setIntputValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  useComponentDidMount(() => {
    inputText.current.focus();
  });

  return (
    <div className="pokeApp__input-container">
      <input
        type="text"
        name="pokemonName"
        id="pokemonName"
        value={inputValue}
        disabled={disabled}
        ref={inputText}
        onChange={evt =>
          guessPokemonName(
            evt.target.value,
            props,
            setIntputValue
          )(setDisabled, inputText)
        }
      />
    </div>
  );
};

export default InputContainer;
