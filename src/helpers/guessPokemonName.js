import randomizePokemon from "./randomizePokemon";

const guessPokemonName = (e, props, setIntputValue) => setDisabled => {
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
    }, 3000);
  }
};

export default guessPokemonName;
