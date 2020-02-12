const guessPokemonName = (e, props) => {
  const { pokemonName } = props.pokemon;
  const name = e.toLowerCase();
  if (name === pokemonName) {
    props.onPokemonGuessed();
  }
};

export default guessPokemonName;
