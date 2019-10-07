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
      props.onPokemonUrlFetched(pokemon[randomNumber].name);
    })
    .catch(error => {
      console.log(error);
    });
};

export const dispatchPokemonNumber = (props, randomNumber) => {
  props.onPokemonNumberFetched(randomNumber);
};
