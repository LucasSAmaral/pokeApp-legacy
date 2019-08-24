import React, { useEffect } from "react";

const WhoIsThisPokemon = () => {
  useEffect(() => {
    document.title = "Who Is This Pokémon?";
  });
  return (
    <div className="container__pokeApp">
      <h1>Who Is This Pokémon?</h1>
    </div>
  );
};

export default WhoIsThisPokemon;
