import React from "react";
import useComponentDidMount from "../../helpers/useComponentDidMount";
import AppText from "../../assets/AppText/AppText.json";
import FeatureMainTitle from "../../components/featureTitle/featureMainTitle";
import PokeAppGame from "../../components/pokeAppGame/pokeAppGame";
import PokemonImage from "../../components/pokemonImage/pokemonImage";
import randomizePokemon from "../../helpers/randomizePokemon";
import { getWhoIsThisPokemonPageText } from "./whoIsThisPokemon.selector";
import SkipCounter from "../../components/SkipCounter/SkipCounter";
import Loading from "../../components/Loading/Loading";
import PokeButtonRandom from "../../components/pokeButton/pokeButtonRandom";

export default props => {
  const {
    TimesWithoutSkip,
    PageTitle,
    buttonLabel
  } = getWhoIsThisPokemonPageText(AppText);
  const { whoIsThisPokemon } = props;
  const { timesWithoutSkip } = whoIsThisPokemon;

  useComponentDidMount(() => {
    document.title = "Who Is This Pokémon?";
    randomizePokemon(props);
  });
  return (
    <div className="container__pokeApp">
      <SkipCounter text={TimesWithoutSkip} counter={timesWithoutSkip} />
      <PokeAppGame>
        <FeatureMainTitle>{PageTitle}</FeatureMainTitle>
        <Loading {...props} />
        <PokemonImage {...props} />
        <PokeButtonRandom {...props} buttonLabel={buttonLabel} />
      </PokeAppGame>
    </div>
  );
};
