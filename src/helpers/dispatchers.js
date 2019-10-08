export const dispatchPokemonName = (props, randomNumber, pokemons) => {
  pokemons
    .then(pokemon => {
      props.onPokemonNameFetched(pokemon[randomNumber].name);
    })
    .catch(error => {
      console.log(error);
    });
};

export const dispatchPokemonUrl = (props, randomNumber, pokemons) => {
  pokemons
    .then(pokemon => {
      props.onPokemonUrlFetched(pokemon[randomNumber].url);
    })
    .catch(error => {
      console.log(error);
    });
};

export const dispatchPokemonNumber = (props, randomNumber) => {
  const pokemonNumber = randomNumber + 1;
  props.onPokemonNumberFetched(pokemonNumber);
};
