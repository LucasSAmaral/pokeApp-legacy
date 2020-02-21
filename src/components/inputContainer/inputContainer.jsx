import React, { useState, createRef } from "react";
import guessPokemonName from "../../helpers/guessPokemonName";
import useComponentDidMount from "../../helpers/useComponentDidMount";

const inputText = createRef();

export const focusInput = () => {
  inputText.current.focus();
};

const InputContainer = props => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  useComponentDidMount(() => {
    inputText.current.focus();
  });
  const onInputChange = pokemonName => {
    setInputValue(pokemonName);
    guessPokemonName(pokemonName, props, onGuessedPokemon, onNextPokemon);
  };
  const onGuessedPokemon = () => setDisabled(true);
  const onNextPokemon = () => {
    setInputValue("");
    setDisabled(false);
  };

  return (
    <div className="pokeApp__input-container">
      <input
        type="text"
        name="pokemonName"
        id="pokemonName"
        value={inputValue}
        disabled={disabled}
        ref={inputText}
        onChange={evt => onInputChange(evt.target.value)}
      />
    </div>
  );
};

export default InputContainer;
