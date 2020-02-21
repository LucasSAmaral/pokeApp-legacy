import randomizePokemon from "./randomizePokemon";

const guessPokemonName = (e, props, setIntputValue) => (
  setDisabled,
  inputText
) => {
  setIntputValue(e);
  const { pokemonName } = props.pokemon;
  const name = e.toLowerCase();
  if (name === pokemonName) {
    setDisabled(true);
    props.onPokemonGuessed();
    setTimeout(() => {
      setIntputValue("");
      randomizePokemon(props);
      setDisabled(false);
      inputText.current.focus();
    }, 3000);
  }
};

export default guessPokemonName;
