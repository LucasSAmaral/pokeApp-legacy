import React, { useState } from "react";
import randomizePokemon from "../../helpers/randomizePokemon";
// import guessPokemonName from "../../helpers/guessPokemonName";

const guessPokemonName = (e, props, setIntputValue) => {
  setIntputValue(e);
  const { pokemonName } = props.pokemon;
  const name = e.toLowerCase();
  if (name === pokemonName) {
    props.onPokemonGuessed();
    setTimeout(() => {
      setIntputValue("");
      randomizePokemon(props);
    }, 3000);
  }
};

const InputContainer = props => {
  const [inputValue, setIntputValue] = useState("");

  return (
    <div className="pokeApp__input-container">
      <input
        type="text"
        name="pokemonName"
        id="pokemonName"
        value={inputValue}
        onChange={evt =>
          guessPokemonName(evt.target.value, props, setIntputValue)
        }
        // onKeyUp={e => guessPokemonName(e.target.value, props)}
      />
    </div>
  );
};

export default InputContainer;
