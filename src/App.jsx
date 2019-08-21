import React from "react";
import PokeAppFeature from "./components/pokeAppFeature";
import "./style/style.scss";

function App() {
  return (
    <div className="container__pokeApp">
      <PokeAppFeature buttonLabel="Click the Pokeball to know more about Pokémons">
        Pokedex
      </PokeAppFeature>
      <PokeAppFeature buttonLabel="Click the Pokeball to Play">
        Who is this Pokémon?
      </PokeAppFeature>
    </div>
  );
}

export default App;
