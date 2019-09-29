import { combineReducers } from "redux";
import { whoIsThisPokemonReducer as whoIsThisPokemon } from "../pages/whoIsThisPokemon/reducer";

import {
  pokemonReducer as pokemon,
  pokemonNumberFetchedActionCreator,
  pokemonNameFetchedActionCreator,
  pokemonsFetchedActionCreator,
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
    pokemonDescription: state.pokemon.pokemonDescription
  },
  whoIsThisPokemon: {
    status: state.whoIsThisPokemon.status,
    pokemonId: state.whoIsThisPokemon.pokemonId,
    pokemonName: state.whoIsThisPokemon.pokemonName,
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
  onPokemonsFetched: pokemons => {
    dispatch(pokemonsFetchedActionCreator(pokemons));
  },
  onPokemonDescriptionFetched: description => {
    dispatch(pokemonDescriptionFetchedActionCreator(description));
  }
});
