import randomizePokemon from "./randomizePokemon";
import { focusInput } from "../components/inputContainer/inputContainer";

const guessPokemonName = (
  guessedPokemonName,
  props,
  onGuessedPokemon,
  onNextPokemon
) => {
  const { pokemonName } = props.pokemon;
  const name = guessedPokemonName.toLowerCase();
  if (name === pokemonName) {
    onGuessedPokemon();
    props.onPokemonGuessed();
    setTimeout(() => {
      onNextPokemon();
      randomizePokemon(props);
      focusInput();
    }, 3000);
  }
};

export default guessPokemonName;
