import randomizePokemon from "./randomizePokemon";

const guessPokemonName = (e, props) => {
  const { pokemonName } = props.pokemon;
  const name = e.toLowerCase();
  if (name === pokemonName) {
    props.onPokemonGuessed();
    setTimeout(() => {
      randomizePokemon(props);
      document.getElementById("pokemonName").value = "";
      document.getElementById("pokemonName").focus();
    }, 3000);
  }
};

export default guessPokemonName;
