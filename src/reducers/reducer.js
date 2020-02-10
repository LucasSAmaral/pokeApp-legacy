import { combineReducers } from "redux";
import {
  whoIsThisPokemonReducer as whoIsThisPokemon,
  pokemonLoadingActionCreator,
  pokemonLoadedActionCreator,
  pokemonGuessedActionCreator
} from "../pages/whoIsThisPokemon/whoIsThisPokemon.reducer";

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
  getCover,
  getLoading,
  getPokemonStatus,
  getPokemonNumber,
  getPokemonUrl,
  getPokemonDescription,
  getWhoIsThisPokemonStatus,
  getTimesWithoutSkip
} from "../pages/whoIsThisPokemon/whoIsThisPokemon.selector";

export default combineReducers({
  pokemon,
  whoIsThisPokemon
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
  whoIsThisPokemon: {
    status: getWhoIsThisPokemonStatus(state),
    timesWithoutSkip: getTimesWithoutSkip(state),
    loading: getLoading(state),
    cover: getCover(state)
  }
});

export const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatchPokemonName: (randomNumber, pokemons) => {
    pokemons
      .then(pokemon => {
        dispatch(pokemonNameFetchedActionCreator(pokemon[randomNumber].name));
      })
      .catch(error => {
        console.log(error);
      });
  },
  dispatchPokemonNumber: randomNumber => {
    const pokemonNumber = randomNumber + 1;
    dispatch(pokemonNumberFetchedActionCreator(pokemonNumber));
  },
  dispatchPokemonUrl: (randomNumber, pokemons) => {
    pokemons
      .then(pokemon => {
        dispatch(pokemonUrlFetchedActionCreator(pokemon[randomNumber].url));
      })
      .catch(error => {
        console.log(error);
      });
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
  dispatchPokemonLoaded: () => {
    dispatch(pokemonLoadedActionCreator());
  },
  onPokemonGuessed: () => {
    dispatch(pokemonGuessedActionCreator());
  },
  onPokemonDescriptionFetched: description => {
    dispatch(pokemonDescriptionFetchedActionCreator(description));
  }
});
