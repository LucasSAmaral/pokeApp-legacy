import randomizeNumber from "./randomizeNumber";
import getPokemons from "./getPokemons";
import {
  dispatchPokemonNumber,
  dispatchPokemonName,
  dispatchPokemonUrl,
  dispatchPokemonImage,
  dispatchPokemonLoading,
  dispatchPokemonLoaded
} from "./dispatchers";

const randomizePokemon = props => {
  const randomNumber = randomizeNumber(1, 151);
  const pokemons = getPokemons(0, 151);
  dispatchPokemonLoading(props, true);
  dispatchPokemonNumber(props, randomNumber);
  dispatchPokemonName(props, randomNumber, pokemons);
  dispatchPokemonUrl(props, randomNumber, pokemons);
  dispatchPokemonImage(props, randomNumber);
  setTimeout(() => {
    dispatchPokemonLoaded(props, false);
  }, 1500);
};

export default randomizePokemon;
