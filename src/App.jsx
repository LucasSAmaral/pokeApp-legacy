import React from "react";
import PokeAppFeature from "./components/pokeAppFeature";
import "./style/style.scss";

const App = () => {
  return (
    <div className="container__pokeApp">
      <PokeAppFeature
        path="/pokedex"
        buttonLabel="Click the Pokeball to know more about Pokémons"
      >
        Pokedex
      </PokeAppFeature>
      <PokeAppFeature
        path="/who-is-this-pokemon"
        buttonLabel="Click the Pokeball to Play"
      >
        Who is this Pokémon?
      </PokeAppFeature>
    </div>
  );
};

export default App;
