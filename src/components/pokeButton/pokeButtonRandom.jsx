import React from "react";
import randomizePokemon from "../../helpers/randomizePokemon";

const PokeButtonRandom = props => {
  return (
    <div className="container__pokeButton">
      <button className="pokeButton" onClick={() => randomizePokemon(props)}>
        {props.buttonLabel}
      </button>
    </div>
  );
};

export default PokeButtonRandom;
