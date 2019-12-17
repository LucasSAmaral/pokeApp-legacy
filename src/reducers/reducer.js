import { combineReducers } from "redux";
import {
  whoIsThisPokemonReducer as whoIsThisPokemon,
  pokemonLoadingActionCreator,
  pokemonLoadedActionCreator
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

export default combineReducers({
  pokemon,
  whoIsThisPokemon
});

export const mapStateToProps = state => ({
  pokemon: {
    status: state.pokemon.status,
    pokemonNumber: state.pokemon.pokemonNumber,
    pokemonName: state.pokemon.pokemonName,
    pokemonUrl: state.pokemon.pokemonUrl,
    pokemonImage: state.pokemon.pokemonImage,
    pokemonDescription: state.pokemon.pokemonDescription
  },
  whoIsThisPokemon: {
    status: state.whoIsThisPokemon.status,
    timesWithoutSkip: state.whoIsThisPokemon.timesWithoutSkip,
    loading: state.whoIsThisPokemon.loading,
    cover: state.whoIsThisPokemon.cover
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
  dispatchPokemonLoading: loading => {
    dispatch(pokemonLoadingActionCreator(loading));
  },
  dispatchPokemonLoaded: loaded => {
    dispatch(pokemonLoadedActionCreator(loaded));
  },
  onPokemonDescriptionFetched: description => {
    dispatch(pokemonDescriptionFetchedActionCreator(description));
  }
});
