import randomizeNumber from "./randomizeNumber";
import getPokemons from "./getPokemons";

const randomizePokemon = async props => {
  const randomNumber = randomizeNumber(1, 151);
  const pokemons = await getPokemons(0, 151);
  props.dispatchPokemonLoading(true);
  props.dispatchPokemonNumber(randomNumber);
  props.dispatchPokemonName(randomNumber, pokemons);
  props.dispatchPokemonUrl(randomNumber, pokemons);
  props.dispatchPokemonImage(randomNumber);
  setTimeout(() => {
    props.dispatchPokemonLoaded(false);
  }, 1500);
};

export default randomizePokemon;
