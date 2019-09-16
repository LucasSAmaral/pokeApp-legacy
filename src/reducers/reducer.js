import { combineReducers } from "redux";
import {
  whoIsThisPokemonReducer as whoIsThisPokemon,
  pokemonIdFetchedActionCreator,
  pokemonNameFetchedActionCreator
} from "../pages/whoIsThisPokemon/reducer";

import {
  pokemonReducer as pokemon,
  pokemonNumberFetchedActionCreator,
  pokemonInfoNameFetchedActionCreator,
  pokemonInfoDescriptionFetchedActionCreator
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
  onPokemonIdFetched: id => {
    dispatch(pokemonIdFetchedActionCreator(id));
  },
  onPokemonNameFetched: name => {
    dispatch(pokemonNameFetchedActionCreator(name));
  },
  onPokemonNumberFetched: number => {
    dispatch(pokemonNumberFetchedActionCreator(number));
  },
  onPokemonInfoNameFetched: name => {
    dispatch(pokemonInfoNameFetchedActionCreator(name));
  },
  onPokemonInfoDescriptionFetched: description => {
    dispatch(pokemonInfoDescriptionFetchedActionCreator(description));
  }
});
