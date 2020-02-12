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
import PokemonContainer from "../../components/pokemonContainer/pokemonContainer";
import InputContainer from "../../components/inputContainer/inputContainer";
import ContainerPokeApp from "../../components/containerPokeApp/containerPokeApp";

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
    <ContainerPokeApp>
      <SkipCounter text={TimesWithoutSkip} counter={timesWithoutSkip} />
      <PokeAppGame>
        <FeatureMainTitle>{PageTitle}</FeatureMainTitle>
        <PokemonContainer {...props}>
          <Loading {...props} />
          <PokemonImage {...props} />
        </PokemonContainer>
        <InputContainer {...props} />
        <PokeButtonRandom {...props} buttonLabel={buttonLabel} />
      </PokeAppGame>
    </ContainerPokeApp>
  );
};
