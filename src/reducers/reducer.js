import { combineReducers } from "redux";
import {
  whoIsThatPokemonReducer as whoIsThatPokemon,
  pokemonLoadingActionCreator,
  pokemonGuessedActionCreator,
  pokemonCoveredActionCreator
} from "../pages/whoIsThatPokemon/whoIsThatPokemon.reducer";

import {
  pokemonReducer as pokemon,
  pokemonNumberFetchedActionCreator,
  pokemonNameFetchedActionCreator,
  pokemonUrlFetchedActionCreator,
  pokemonImageFetchedActionCreator,
  pokemonDescriptionFetchedActionCreator
} from "../pages/Pokemon/pokemon.reducer";
import stringfyNumber from "../helpers/stringfyNumber";
import {
  getPokemonName,
  getPokemonImage,
  getPokemonStatus,
  getPokemonNumber,
  getPokemonUrl,
  getPokemonDescription,
  getWhoIsThatPokemonStatus,
  getTimesWithoutSkip
} from "../pages/whoIsThatPokemon/whoIsThatPokemon.selector";

export default combineReducers({
  pokemon,
  whoIsThatPokemon
});

export const mapStateToProps = state => ({
  pokemon: {
    status: getPokemonStatus(state),
    pokemonNumber: getPokemonNumber(state),
    pokemonName: getPokemonName(state),
    pokemonUrl: getPokemonUrl(state),
    pokemonImage: getPokemonImage(state),
    pokemonDescription: getPokemonDescription(state)
  },
  whoIsThatPokemon: {
    status: getWhoIsThatPokemonStatus(state),
    timesWithoutSkip: getTimesWithoutSkip(state)
  }
});

export const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatchPokemonName: (randomNumber, pokemon) => {
    dispatch(pokemonNameFetchedActionCreator(pokemon[randomNumber].name));
  },
  dispatchPokemonNumber: randomNumber => {
    const pokemonNumber = randomNumber + 1;
    dispatch(pokemonNumberFetchedActionCreator(pokemonNumber));
  },
  dispatchPokemonUrl: (randomNumber, pokemon) => {
    dispatch(pokemonUrlFetchedActionCreator(pokemon[randomNumber].url));
  },
  dispatchPokemonImage: randomNumber => {
    const pokemonNumber = randomNumber + 1;
    const stringPokemonNumber = stringfyNumber(pokemonNumber);
    const pokemonImagePath = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${stringPokemonNumber}.png`;
    dispatch(pokemonImageFetchedActionCreator(pokemonImagePath));
  },
  dispatchPokemonLoading: () => {
    dispatch(pokemonLoadingActionCreator());
  },
  dispatchPokemonCovered: () => {
    dispatch(pokemonCoveredActionCreator());
  },
  onPokemonGuessed: () => {
    dispatch(pokemonGuessedActionCreator());
  },
  onPokemonDescriptionFetched: description => {
    dispatch(pokemonDescriptionFetchedActionCreator(description));
  }
});
