import React, { useEffect } from "react";

const Pokemon = () => {
  useEffect(() => {
    document.title = "Pokémon";
  });
  return (
    <div className="container__pokeApp">
      <h1 className="pokeApp__FeatureTitle">Pokémon</h1>
    </div>
  );
};

export default Pokemon;