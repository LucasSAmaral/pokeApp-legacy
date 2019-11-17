import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import { store } from "../..";
import { pathOr, path } from "ramda";
import FeatureMainTitle from "../../components/featureTitle/featureMainTitle";
import PokeAppGame from "../../components/pokeAppGame/pokeAppGame";
import PokemonImage from "../../components/pokemonImage/pokemonImage";
import AppText from "../../assets/AppText/AppText.json";
import randomizePokemon from "../../helpers/randomizePokemon";

export default props => {
  const state = store.getState();

  // const pokemonName = pathOr("", ["pokemon", "pokemonName"], state);
  const pokemonImage = pathOr("", ["pokemon", "pokemonImage"], state);

  const isCover = pathOr(false, ["whoIsThisPokemon", "cover"], state);

  const WhiIsThisPokemonPageText = path(["WhiIsThisPokemonPageText"], AppText);

  useComponentDidMount(() => {
    document.title = "Who Is This Pokémon?";
    randomizePokemon(props);
  });
  return (
    <div className="container__pokeApp">
      <PokeAppGame>
        <FeatureMainTitle>
          {WhiIsThisPokemonPageText.PageTitle}
        </FeatureMainTitle>
        <PokemonImage class={isCover ? "cover" : ""} src={pokemonImage} />
        <button className="pokeball" onClick={() => randomizePokemon(props)} />
      </PokeAppGame>
    </div>
  );
};
