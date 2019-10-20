import randomizeNumber from "./randomizeNumber";
import getPokemons from "./getPokemons";
import {
  dispatchPokemonNumber,
  dispatchPokemonName,
  dispatchPokemonUrl,
  dispatchPokemonImage
} from "./dispatchers";

const randomizePokemon = props => {
  const randomNumber = randomizeNumber(1, 151);
  const pokemons = getPokemons(0, 151);
  dispatchPokemonNumber(props, randomNumber);
  dispatchPokemonName(props, randomNumber, pokemons);
  dispatchPokemonUrl(props, randomNumber, pokemons);
  dispatchPokemonImage(props, randomNumber);
};

export default randomizePokemon;
