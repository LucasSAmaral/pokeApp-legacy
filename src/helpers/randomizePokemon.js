import randomizeNumber from "./randomizeNumber";
import getPokemons from "./getPokemons";

const randomizePokemon = async ({ dispatchPokemonLoading, dispatchPokemonNumber, dispatchPokemonName, dispatchPokemonUrl, dispatchPokemonImage, dispatchPokemonCovered }) => {
  const randomNumber = randomizeNumber(1, 151);
  const pokemons = await getPokemons(0, 151);
  dispatchPokemonLoading();
  dispatchPokemonNumber(randomNumber);
  dispatchPokemonName(randomNumber, pokemons);
  dispatchPokemonUrl(randomNumber, pokemons);
  dispatchPokemonImage(randomNumber);
  setTimeout(() => {
    dispatchPokemonCovered();
  }, 1500);
};

export default randomizePokemon;
