const guessPokemonName = (e, props) => {
  const { pokemon } = props;
  const { pokemonName } = pokemon;
  const name = e.toLowerCase();
  if (name === pokemonName) {
    props.onPokemonGuessed();
  }
};

export default guessPokemonName;
