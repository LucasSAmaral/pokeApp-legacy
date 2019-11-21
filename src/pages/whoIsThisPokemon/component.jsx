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
  getCover,
  getPokemonImage
} from "./whoIsThisPokemon.selector";
import Loading from "../../components/Loading/Loading";

export default props => {
  const state = store.getState();
  const WhoIsThisPokemonPageText = getWhoIsThisPokemonPageText(AppText);
  const isCover = getCover(state);
  const pokemonImageSrc = getPokemonImage(state);
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
        <Loading />
        <PokemonImage class={isCover ? "cover" : ""} src={pokemonImageSrc} />
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
