import { combineReducers } from "redux";
import { whoIsThisPokemonReducer as whoIsThisPokemon } from "../pages/whoIsThisPokemon/reducer";

import {
  pokemonReducer as pokemon,
  pokemonNumberFetchedActionCreator,
  pokemonNameFetchedActionCreator,
  pokemonUrlFetchedActionCreator,
  pokemonImageFetchedActionCreator,
  pokemonDescriptionFetchedActionCreator
} from "../pages/Pokemon/reducer";

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
    timesWithoutSkip: state.whoIsThisPokemon.timesWithoutSkip
  }
});

export const mapDispatchToProps = dispatch => ({
  dispatch,
  onPokemonNumberFetched: number => {
    dispatch(pokemonNumberFetchedActionCreator(number));
  },
  onPokemonNameFetched: name => {
    dispatch(pokemonNameFetchedActionCreator(name));
  },
  onPokemonUrlFetched: url => {
    dispatch(pokemonUrlFetchedActionCreator(url));
  },
  onPokemonImageFetched: image => {
    dispatch(pokemonImageFetchedActionCreator(image));
  },
  onPokemonDescriptionFetched: description => {
    dispatch(pokemonDescriptionFetchedActionCreator(description));
  }
});
