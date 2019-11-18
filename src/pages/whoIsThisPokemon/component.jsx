import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import { store } from "../..";
import AppText from "../../assets/AppText/AppText.json";
import FeatureMainTitle from "../../components/featureTitle/featureMainTitle";
import PokeAppGame from "../../components/pokeAppGame/pokeAppGame";
import PokemonImage from "../../components/pokemonImage/pokemonImage";
import randomizePokemon from "../../helpers/randomizePokemon";
import {
  getWhoIsThisPokemonPageText,
  getIsCover,
  getPokemonImage
} from "./selector";

export default props => {
  const state = store.getState();
  const WhoIsThisPokemonPageText = getWhoIsThisPokemonPageText(AppText);
  const isCover = getIsCover(state);
  const pokemonImage = getPokemonImage(state);
  useComponentDidMount(() => {
    document.title = "Who Is This Pokémon?";
    randomizePokemon(props);
  });
  return (
    <div className="container__pokeApp">
      <PokeAppGame>
        <FeatureMainTitle>
          {WhoIsThisPokemonPageText.PageTitle}
        </FeatureMainTitle>
        <PokemonImage class={isCover ? "cover" : ""} src={pokemonImage} />
        <div className="container__pokeButton">
          <button
            className="pokeButton"
            onClick={() => randomizePokemon(props)}
          >
            {WhoIsThisPokemonPageText.buttonLabel}
          </button>
        </div>
      </PokeAppGame>
    </div>
  );
};
