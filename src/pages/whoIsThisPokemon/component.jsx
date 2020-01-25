import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import AppText from "../../assets/AppText/AppText.json";
import FeatureMainTitle from "../../components/featureTitle/featureMainTitle";
import PokeAppGame from "../../components/pokeAppGame/pokeAppGame";
import PokemonImage from "../../components/pokemonImage/pokemonImage";
import randomizePokemon from "../../helpers/randomizePokemon";
import { getWhoIsThisPokemonPageText } from "./whoIsThisPokemon.selector";
import Loading from "../../components/Loading/Loading";

export default props => {
  const WhoIsThisPokemonPageText = getWhoIsThisPokemonPageText(AppText);
  const { whoIsThisPokemon, pokemon } = props;

  useComponentDidMount(() => {
    document.title = "Who Is This Pokémon?";
    randomizePokemon(props);
  });
  return (
    <div className="container__pokeApp">
      <div className="container__timesWithoutSkip">
        {`${WhoIsThisPokemonPageText.TimesWithoutSkip}: ${whoIsThisPokemon.timesWithoutSkip}`}
      </div>
      <PokeAppGame>
        <FeatureMainTitle>
          {WhoIsThisPokemonPageText.PageTitle}
        </FeatureMainTitle>
        <Loading />
        <PokemonImage
          class={whoIsThisPokemon.cover ? "cover" : ""}
          src={pokemon.pokemonImage}
        />
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
