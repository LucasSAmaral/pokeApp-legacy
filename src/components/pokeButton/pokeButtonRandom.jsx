import React from "react";
import randomizePokemon from "../../helpers/randomizePokemon";
import { focusInput } from "../inputContainer/inputContainer";

const PokeButtonRandom = props => {
  return (
    <div className="container__pokeButton">
      <button
        className="pokeButton"
        onClick={() => {
          randomizePokemon(props);
          focusInput();
        }}
      >
        {props.buttonLabel}
      </button>
    </div>
  );
};

export default PokeButtonRandom;
