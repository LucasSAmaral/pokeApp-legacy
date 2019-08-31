import { combineReducers } from "redux";
import {
  whoIsThisPokemon,
  pokemonIdFetchedActionCreator,
  pokemonNameFetchedActionCreator
} from "./whoIsThisPokemon.reducer";

export default combineReducers({
  whoIsThisPokemon
});

export const mapStateToProps = state => ({
  whoIsThisPokemon: {
    status: state.whoIsThisPokemon.status,
    pokemonId: state.whoIsThisPokemon.pokemonId,
    pokemonName: state.whoIsThisPokemon.pokemonName,
    timesWithoutSkip: state.whoIsThisPokemon.timesWithoutSkip
  }
});

export const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  onPokemonIdFetched: id => {
    dispatch(pokemonIdFetchedActionCreator(id));
  },
  onPokemonNameFetched: name => {
    dispatch(pokemonNameFetchedActionCreator(name));
  }
});
